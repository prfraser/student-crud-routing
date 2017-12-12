import React from 'react';
import ListItem from './ListItem';

const StudentList = ({students}) => (
  <div>
    { students.map(student => { return <ListItem {...student} /> }) }
  </div>
)

export default StudentList;