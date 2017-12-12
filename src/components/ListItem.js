import React from 'react';

const ListItem = ({ name, profilePhoto, bio }) => (
	<div>
		<ul>
			<li><img src={profilePhoto} alt=""/></li>
			<li>{name}</li>
			<li>{bio}</li>
		</ul>
	</div>
)

export default ListItem;