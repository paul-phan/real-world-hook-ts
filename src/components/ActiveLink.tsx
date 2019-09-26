import React from 'react'
import {Link, useRoute} from "wouter";

export const ActiveLink = props => {
    const [isActive] = useRoute(props.to);
    return (
        <Link {...props}>
            <a className={isActive ? props.class + " active" : props.class}>{props.children}</a>
        </Link>
    );
};
