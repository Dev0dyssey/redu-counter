import React from 'react';
import { connect } from 'react-redux';

import Counter from './Counters'
import './style.css'

const App = ({count}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <h1>Counter</h1>
                    <div>Count: {count}</div>
                    <br/>
                    <Counter/>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    console.log(state.calculation);
    return {count: state.calculation};
}

export default connect(mapStateToProps)(App);