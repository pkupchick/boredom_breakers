import React from 'react';
import { connect } from 'react-redux';
import { fetchEvents } from '../../actions/event_actions';
import EventEditForm from './event_edit_form';

class FormItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let props = this.props;
        return (
            <div>
                <EventEditForm props={props} />
            </div>
        )
    }
}

const msp = state => {
    return {
        events: state.events
    }
}

const mdp = dispatch => {
    return {
        fetchEvents: () => dispatch(fetchEvents())
    }
}

export default connect(msp, mdp)(FormItem);