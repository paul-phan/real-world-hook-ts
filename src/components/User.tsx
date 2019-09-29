import React from 'react'
import {Link} from "wouter";

export default function User({user}) {
	console.log('user', user)
	if (!user.username) return <RedError message="Can't load profile"/>;
	return (
		<div className="profile-page">

			<div className="user-info">
				<div className="container">
					<div className="row">
						<div className="col-xs-12 col-md-10 offset-md-1">

							<img src={user.image || 'https://static.productionready.io/images/smiley-cyrus.jpg'}
								 className="user-img" alt=""/>
							<h4>{user.username}</h4>
							<p>{user.bio}</p>

							<EditProfileSettings/>
							{/*<FollowUserButton*/}
							{/*    isUser={isUser}*/}
							{/*    username={profile.username}*/}
							{/*    following={profile.following}*/}
							{/*    follow={this.handleFollow}*/}
							{/*    unfollow={this.handleUnfollow}*/}
							{/*/>*/}

						</div>
					</div>
				</div>
			</div>

			<div className="container">
				<div className="row">

					<div className="col-xs-12 col-md-10 offset-md-1">

						<div className="articles-toggle">
							{/*{this.renderTabs()}*/}
						</div>

						{/*<ArticleList*/}
						{/*    articles={articlesStore.articles}*/}
						{/*    totalPagesCount={articlesStore.totalPagesCount}*/}
						{/*    onSetPage={this.handleSetPage}*/}
						{/*    loading={articlesStore.isLoading}*/}
						{/*/>*/}
					</div>

				</div>
			</div>

		</div>
	);

}

const FollowUserButton = props => {

	let classes = 'btn btn-sm action-btn';
	if (props.following) {
		classes += ' btn-secondary';
	} else {
		classes += ' btn-outline-secondary';
	}

	const handleClick = ev => {
		ev.preventDefault();
		if (props.following) {
			props.unfollow(props.username)
		} else {
			props.follow(props.username)
		}
	};

	return (
		<button
			className={classes}
			onClick={handleClick}
		>
			<i className="ion-plus-round"/>
			&nbsp;
			{props.following ? 'Unfollow' : 'Follow'} {props.username}
		</button>
	);
};

const EditProfileSettings = () => {
	return (
		<Link
			to="/settings"
			className="btn btn-sm btn-outline-secondary action-btn">
			<i className="ion-gear-a"/> Edit Profile Settings
		</Link>
	);
};

const wrapperStyle = {
	display: 'flex',
	justifyContent: 'center',
};

const errorStyle = {
	display: 'inline-block',
	margin: '20px auto',
	borderRadius: '4px',
	padding: '8px 15px',
	color: 'rgb(240, 45, 45)',
	fontWeight: "bold",
	backgroundColor: 'rgba(240, 45, 45, 0.1)'
};

const RedError = ({message}) => {
	return (
		<div style={wrapperStyle}>
			{
				// @ts-ignore
				<div style={errorStyle}>
					{message}
				</div>
			}
		</div>
	);
}
