import React from 'react'
import {useRoute, Link} from "wouter";

export const ActiveLink = props => {
    const [isActive] = useRoute(props.href);
    return (
        <Link {...props}>
            <a className={isActive ? props.class + " active" : props.class}>{props.children}</a>
        </Link>
    );
};
