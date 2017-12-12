import React from 'react';
import ListItem from './ListItem';

const StudentList = ({students, handleDelete}) => (
  <div>
    { 
    	students.map(student => { 
	    	return <ListItem 
	    					handleDelete={handleDelete} 
	    					key={student.id} {...student} /> }) 
    }
  </div>
)

export default StudentList;