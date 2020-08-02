import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/session_actions'

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.showDropDown = this.showDropDown.bind(this);
        this.hideDropDown = this.hideDropDown.bind(this);
        this.handleDropDown = this.handleDropDown.bind(this);
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

    render() {
        const { currentUser } = this.props;
        let headerComponent = null;

        let dropDown = (
          // <div className="dropdown">
          <>
            <a
              className="dropbtn"
              value="drop-down-now"
            >
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
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </>
        );
        if (!currentUser.name) {
            headerComponent = (
                <div className="header-container" onClick={this.handleDropDown} >
                    <div className="logo-right">
                        <Link to="/"><img src="http://yogapattern.com/e-brite.png" /></Link>
                    </div>
                    <div>
                      <form className="search-header">
                        <input type="text" className="search-bar" placeholder="Search Events" />
                      </form>
                    </div>
                    <div className="signin-header">
                      <Link className="no-style" to="/signup">Sign in</Link>
                    </div>
                </div>
            )
        } else {
            headerComponent = (
              <div className="header-container" onClick={this.handleDropDown}>
                <div className="logo-right">
                  <Link to="/">
                    <img src="http://yogapattern.com/e-brite.png" />
                  </Link>
                <div>
                <div className="searchContainer">
                    <input type="text" className="searchBox" placeholder="Search Events" />
                </div>
                </div>
                </div>
                <div className="dropdown" >
                  {dropDown}
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
        logout: () => dispatch(logout())
    };
};

export default connect(msp, mdp)(Header);