// Libraries
import React from 'react';
import {Provider} from 'react-redux';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import appReducer from './modules/Reducers/index';

// Store Redux
const store = createStore(appReducer,applyMiddleware(thunk));
// Components

import Layouts from 'Modules/Layouts';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/" component={Layouts} />
                </Switch>
            </Router>
        </Provider>
    );
};

export default App;
