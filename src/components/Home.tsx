import React from 'react'
import {appName} from "../store/app";
import {ActiveLink} from "./ActiveLink";
import Tags from "./Tags";
import ArticleList from "./ArticleList";
import {useRoute} from "wouter";

const Banner = () => {

    return (
        <div className="banner">
            <div className="container">
                <h1 className="logo-font">
                    {appName.toLowerCase()}
                </h1>
                <p>A place to share your knowledge.</p>
            </div>
        </div>
    );
};

const YourFeedTab = props => {
    if (props.currentUser) {
        return (
            <li className="nav-item">
                <ActiveLink
                    class="nav-link"
                    to={'/feed'}
                >
                    Your Feed
                </ActiveLink>
            </li>
        );
    }
    return null;
};

const GlobalFeedTab = () => {
    return (
        <li className="nav-item">
            <ActiveLink
                class="nav-link"
                to={'/'}
            >
                Global Feed
            </ActiveLink>
        </li>
    );
};
const TagFilterTab = props => {
    return (
        <li className="nav-item">
            <a href="" className="nav-link active">
                <i className="ion-pound"/> {props.tag}
            </a>
        </li>
    );
};

const MainView = () => {
    const [match, params] = useRoute("/tags/:tag");
    return (
        <div className="col-md-9">
            <div className="feed-toggle">
                <ul className="nav nav-pills outline-active">
                    <YourFeedTab
                        // currentUser={currentUser}
                        // tab={this.getTab()}
                    />
                    <GlobalFeedTab/>
                    {match && params && <TagFilterTab tag={params.tag}/>}
                </ul>
            </div>

            <ArticleList/>
        </div>
    );
}

export default function Home() {
    return (
        <div className="home-page">

            <Banner/>

            <div className="container page">
                <div className="row">
                    <MainView />
                    <div className="col-md-3">
                        <div className="sidebar">

                            <p>Popular Tags</p>
                            <Tags/>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
