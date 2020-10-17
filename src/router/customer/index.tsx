import * as React from 'react';
import {Route, RouteComponentProps, Switch} from "react-router-dom";
import CustomerHome from '../../pages/customer/Home';
import ProviderList from '../../pages/customer/ProviderList';

function CustomerRouter(props: RouteComponentProps<{}>) {
    return (
        <Switch>
            <Route exact path={`${props.match.url}/providers`} component={ProviderList}/>
            <Route path={props.match.url} component={CustomerHome}/>
        </Switch>
    );
}

export default CustomerRouter;