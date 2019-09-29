import React from 'react'
import {Link} from 'wouter'
import {appName} from "../store/app";

export const Header = ({user}) => {
    return (
        <nav className="navbar navbar-light">
            <div className="container">
                <Link className="navbar-brand" to="/">{appName}</Link>
                <ul className="nav navbar-nav pull-xs-right">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/home">Home</Link>
                    </li>
					{user.username ? <>
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
                        <li className="nav-item">
                            <Link className="nav-link" to={`/user/${user.username}`}>
                                <i className="ion-gear-a"/>&nbsp;{user.username}
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
