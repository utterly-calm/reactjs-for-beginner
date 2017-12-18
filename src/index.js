import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from 'containers/App/App';
import Admin from 'containers/Admin';
import AdminRoutes from 'containers/Admin/childRoutes';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/admin" render={props => (
                <Admin {...props} routes={AdminRoutes} />
            )} />
        </div>
    </Router>,
    document.getElementById('root')
);

registerServiceWorker();