import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
    return (
        <div>
            admin home
            <ul>
                <li>
                    <Link to="/admin/users">user list</Link>
                </li>
                <li>
                    <Link to="/admin/users/1">user detail </Link>
                </li>
                <li>
                    <Link to="/test-not-available-url">not working</Link>
                </li>
            </ul>
        </div>
    );
}

export default Home;
