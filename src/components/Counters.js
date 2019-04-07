import React from 'react';
import { connect } from 'react-redux';
import { addButton, subtractButton, addDelayButton, subtractDelayButton } from '../actions';

class Counter extends React.Component {
    render() {
        return(
            <div>
                <button 
                    type="button" 
                    className="btn btn-primary" 
                    onClick={() => this.props.addButton()}>
                        Add
                </button>
                <button
                    type="button"
                    className="btn btn-danger" 
                    onClick={() => this.props.subtractButton()}>
                        Subtract
                </button>
                    <br/>
                <button
                    type="button"
                    className="btn btn-success" 
                    onClick={() => this.props.addDelayButton()}>
                        Add (1s delay)
                </button>
                <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => this.props.subtractDelayButton()}>
                        Subtract (1s delay)
                </button>
            </div>
        );
    };
}

const mapStateToProps = state => {
    return(state)
}

export default connect(mapStateToProps, {addButton, subtractButton, addDelayButton, subtractDelayButton})(Counter);