import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select from 'react-select';


class Header extends React.Component {
    constructor(props) {
        super(props);

        this.showDropDown = this.showDropDown.bind(this);
        this.hideDropDown = this.hideDropDown.bind(this);
        this.handleDropDown = this.handleDropDown.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyInput = this.handleKeyInput.bind(this);
        this.timer = null;
        this.state = {
          searchParam: ""
        }
    }

    showDropDown() {
        $('.dropdown-content').removeClass('hidden')
    }

    hideDropDown() {
        $('.dropdown-content').addClass('hidden')
    }

    handleDropDown(e) {
        e.preventDefault();
        this.showDropDown();
    }

    headerReturn() {
        return (
            <div>
                <p>Lets set it up like this</p>
            </div>
        )
    }
    handleKeyInput(e) {
      e.preventDefault()
      clearTimeout(this.timer);
      let timeout = () => {
        this.props.fetchEvents(this.state.searchParam);
      };
      this.timer = setTimeout(timeout, 1000);
      this.setState({ searchParam: e.target.value })
    }


    handleChange(selectedOption) {
      if (selectedOption.value === "home") {
        this.props.history.push("/");
      } else if (selectedOption.value === "profile") {
        this.props.history.push(`/users/${this.props.currentUser.id}`);
      } else if (selectedOption.value === "logout") {
        this.props.logout().then(() => {
          this.props.history.push('/login');
        });
      } else {
        this.props.history.push(`/${selectedOption.value}`);
      }
    };

    render() {
        const { currentUser } = this.props;
        let headerComponent = null;

      let options = null;
      if (this.props.loggedIn) {
        options = [
          { value: "home", label: "home" },
          { value: "profile", label: "profile" },
          { value: "events/new", label: "create event" },
          { value: "logout", label: "logout" },
        ];
      } else {
        options = [
          { value: "home", label: "home" },
          { value: "profile", label: "profile" },
          { value: "events/new", label: "create event" },
          { value: "logout", label: "logout" },
        ];
      }
      const selectedOption = null;

        let dropDown = (
          <>
            <a className="dropbtn" value="drop-down-now">
              <img
                src="http://yogapattern.com/lil-guy.png"
                className="pos-ab"
              />
            </a>
            <div
              id="myDropdown"
              className="dropdown-content hidden"
              onClick={this.handleDropDown}
            >
              <a onClick={this.props.logout}>Log Out</a>
              <NavLink to="/events/new">Create Event</NavLink>
              <NavLink to={`/users/${this.props.currentUser.id}`}>Tickets</NavLink>
            </div>
          </>
        );
        if (!currentUser.name) {
            headerComponent = (
              <div className="header-container" onClick={this.handleDropDown}>
                <div className="logo-right">
                  <Link to="/">
                    <img src="https://boredom-breakers-seed.s3.amazonaws.com/bb-joined.png" />
                  </Link>
                </div>
                <div className="searchContainer">
                  <FontAwesomeIcon icon={faSearch} className="search-icon" />
                  <input
                    type="text"
                    className="search-box"
                    placeholder="Search Events"
                    onChange={this.handleKeyInput}
                  />
                </div>
                <div className="signin-header">
                  <Link className="no-style" to="/signup">
                    Sign in
                  </Link>
                </div>
              </div>
            );
        } else {
            headerComponent = (
              <div className="header-container" onClick={this.handleDropDown}>
                <div className="logo-right">
                  <Link to="/">
                    <img src="https://boredom-breakers-seed.s3.amazonaws.com/bb-joined.png" />
                  </Link>
                <div>
                <div className="searchContainer">
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                    <input type="text" 
                    className="search-box" 
                    placeholder="Search Events" 
                    onChange={this.handleKeyInput}
                    />
                </div>
                </div>
                </div>
                  {/* {dropDown} */}
                  <div className="select-container">
                    <Select
                      style='drop-down-select'
                      value={selectedOption}
                      onChange={this.handleChange}
                      options={options}
                      placeholder='Nav Menu'
                    />
                  </div>
              </div>
            );
        }

        return (
          <div>
            {headerComponent}
          </div>
        );
    };
};

const msp = (state) => {
    return {
      errors: state.errors.session,
      currentUser: state.session.currentUser
    }
}

const mdp = (dispatch) => {
    return {
      logout: () => dispatch(logout()),
      fetchEvents: (searchParams) => dispatch(fetchEvents({ searchParams }))
    };
};

export default connect(msp, mdp)(withRouter(Header));