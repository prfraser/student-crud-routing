import React from 'react';

const ListItem = ({ id, name, profilePhoto, bio, handleDelete }) => (
	<div className="student-list-item">
		<ul>
			<li>
				<a href={`/students/${id}`}>
					<img src={profilePhoto} alt=""/>
				</a>
			</li>
			<li>{name}</li>
			<li>{bio}</li>
			<button onClick={() => handleDelete(id)}>Delete</button>
		</ul>
	</div>
)

export default ListItem;