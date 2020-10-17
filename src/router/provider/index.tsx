import * as React from 'react';
import {Route, RouteComponentProps, Switch} from "react-router-dom";
import ProviderHome from '../../pages/provider/Home';
import ProductList from '../../pages/provider/ProductList';

function CustomerRouter(props: RouteComponentProps<{}>) {
    return (
        <Switch>
            <Route exact path={`${props.match.url}/products`} component={ProductList}/>
            <Route path={props.match.url} component={ProviderHome}/>
        </Switch>
    );
}

export default CustomerRouter;