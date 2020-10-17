import * as React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Login from '../pages/common/Login';
import AdminRouter from './admin';
import CustomerRouter from './customer';
import ProviderRouter from './provider';

const Root: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/admin/" component={AdminRouter}/>
            <Route path="/customer/" component={CustomerRouter}/>
            <Route path="/provider/" component={ProviderRouter}/>
            <Redirect path="*" to="/"/>
        </Switch>
    </BrowserRouter>
)

export default Root;