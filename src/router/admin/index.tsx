import * as React from 'react';
import {Route, RouteComponentProps, Switch} from "react-router-dom";
import AdminHome from '../../pages/admin/Home';
import UserList from '../../pages/admin/UserList';
import UserDetail from '../../pages/admin/UserDetail';

function AdminRouter(props: RouteComponentProps<{}>) {
    return (
        <Switch>
            <Route exact path={`${props.match.url}/users`} component={UserList}/>
            <Route path={`${props.match.url}/users/:id`} component={UserDetail}/>
            <Route path={props.match.url} component={AdminHome}/>
        </Switch>
    );
}

export default AdminRouter;