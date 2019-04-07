import React from 'react';
import { connect } from 'react-redux';

import Counter from './Counters'

const App = ({count}) => {
    return (
        <>
            <h1>Counter</h1>
            <div>Count: {count}</div>
            <br/>
            <Counter/>
        </>
    );
};

const mapStateToProps = state => {
    console.log(state.calculation);
    return {count: state.calculation};
}

export default connect(mapStateToProps)(App);