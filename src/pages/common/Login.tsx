import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
    return (
        <div>
            login
            <ul>
               <li>
                   <Link to="/admin">admin</Link>
               </li>
                <li>
                    <Link to="/customer">customer</Link>
                </li>
                <li>
                    <Link to="/provider">provider</Link>
                </li>
            </ul>
        </div>
    );
}

export default Login;
