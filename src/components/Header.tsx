import React from 'react'
import {Link} from 'wouter'
import {useUser} from "../store/user";

export const Header = () => {
    const {user} = useUser()
    return (
        <nav className="navbar navbar-light">
            <div className="container">
                <Link className="navbar-brand" to="/">Conduit</Link>
                <ul className="nav navbar-nav pull-xs-right">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/home">Home</Link>
                    </li>
                    {user ? <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/editor">
                                <i className="ion-compose"/>&nbsp;New Post
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/settings">
                                <i className="ion-gear-a"/>&nbsp;Settings
                            </Link>
                        </li>
                    </> : <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Sign in</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Sign up</Link>
                        </li>
                    </>}

                </ul>
            </div>
        </nav>
    )
}
