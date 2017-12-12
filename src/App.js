import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
  } from 'react-router-dom';
import './App.css';
import StudentList from './components/StudentList';

class App extends Component {
  state = {
    students: [
      { id: 1, name: 'Billy Bob', profilePhoto: 'https://randomuser.me/api/portraits/men/78.jpg', bio: 'Billy is cool.' },
      { id: 2, name: 'Jane Doe', profilePhoto: 'https://randomuser.me/api/portraits/women/22.jpg', bio: 'Jane likes coffee.' },
      { id: 3, name: 'Mark Andersen', profilePhoto: 'https://randomuser.me/api/portraits/men/7.jpg', bio: 'Mark is the man.' },
      { id: 4, name: 'Henry Jones', profilePhoto: 'https://randomuser.me/api/portraits/men/9.jpg', bio: 'Henry is not cool.' }
    ]
  }

  render() {
    return (
      <div className="App">
        <StudentList students={this.state.students}/>
      </div>
    );
  }
}

export default App;
