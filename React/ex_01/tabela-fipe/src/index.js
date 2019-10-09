import {Route, Link, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/Home';
import * as serviceWorker from './serviceWorker';


const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();