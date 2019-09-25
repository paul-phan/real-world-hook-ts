import React from 'react'
import {appName} from "../store/app";
import {Link} from "wouter";
import {ActiveLink} from "./ActiveLink";

const Banner = ({  token }) => {
    if (token) {
        return null;
    }
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

const GlobalFeedTab = props => {
    return (
        <li className="nav-item">
            <ActiveLink
                class="nav-link"
                to={'/?tab=all'}
            >
                Global Feed
            </ActiveLink>
        </li>
    );
};

const MainView = () => {
    return (
        <div className="col-md-9">
            <div className="feed-toggle">
                <ul className="nav nav-pills outline-active">

                    <YourFeedTab
                        // currentUser={currentUser}
                        // tab={this.getTab()}
                    />

                    <GlobalFeedTab
                        // tab={this.getTab()}
                    />

                    {/*<TagFilterTab tag={qsParse(this.props.location.search).tag} />*/}

                </ul>
            </div>

            {/*<ArticleList*/}
            {/*    articles={articles}*/}
            {/*    loading={isLoading}*/}
            {/*    totalPagesCount={totalPagesCount}*/}
            {/*    currentPage={page}*/}
            {/*    onSetPage={this.handleSetPage}*/}
            {/*/>*/}
        </div>
    );
}

export default function Home({token}) {

    return (
        <div className="home-page">

            <Banner token={token} />

            <div className="container page">
                <div className="row">
                    <MainView />

                    <div className="col-md-3">
                        <div className="sidebar">

                            <p>Popular Tags</p>

                            {/*<Tags*/}
                            {/*    tags={tags}*/}
                            {/*/>*/}

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
