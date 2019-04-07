import React from 'react';
import { connect } from 'react-redux';
import { addButton, subtractButton, addDelayButton, subtractDelayButton } from '../actions';

class Counter extends React.Component {
    render() {
        return(
            <>
            <button onClick={() => this.props.addButton()}>Add</button>
            <button onClick={() => this.props.subtractButton()}>Subtract</button>
            <br/>
            <button onClick={() => this.props.addDelayButton()}>Add (1s delay)</button>
            <button onClick={() => this.props.subtractDelayButton()}>Subtract (1s delay)</button>
            </>
        );
    };
}

const mapStateToProps = state => {
    return(state)
}

export default connect(mapStateToProps, {addButton, subtractButton, addDelayButton, subtractDelayButton})(Counter);