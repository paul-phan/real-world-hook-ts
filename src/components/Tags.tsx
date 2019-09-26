import React from 'react';
import {Link} from 'wouter';
import LoadingSpinner from './LoadingSpinner';
import {useTag} from "../store/tag";

const Tags = () => {
    const {tags} = useTag()

    if (tags) {
        return (
            <div className="tag-list">
                {
                    tags.map(tag => {

                        return (
                            <Link
                                to={'/tags/' + tag}
                                className="tag-default tag-pill"
                                key={tag}
                            >
                                {tag}
                            </Link>
                        );
                    })
                }
            </div>
        );
    } else {
        return (
            <LoadingSpinner/>
        );
    }
};

export default Tags;

