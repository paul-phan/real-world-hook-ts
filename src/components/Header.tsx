import React from 'react'
import {Link} from 'wouter'

export const Header = () => {
    return (
        <nav className="navbar navbar-light">
            <div className="container">
                <Link className="navbar-brand" to="/">Conduit</Link>
                <ul className="nav navbar-nav pull-xs-right">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">
                            <i className="ion-compose" />&nbsp;New Post
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">
                            <i className="ion-gear-a" />&nbsp;Settings
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">Sign up</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
