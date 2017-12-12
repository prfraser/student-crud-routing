import React from 'react';

const StudentList = ({students}) => (
  <div>
    { students.map(student => { return <p>{student.name}</p> }) }
  </div>
)

export default StudentList;