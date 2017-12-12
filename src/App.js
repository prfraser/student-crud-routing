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
      { id: 1, name: 'Billy Bob', profilePhoto: 'asdf', bio: 'Billy Bob is cool.' },
      { id: 2, name: 'Jane Doe', profilePhoto: 'asdf', bio: 'Jane likes coffee.' },
      { id: 3, name: 'Mark Andersen', profilePhoto: 'asdf', bio: 'Mark is the man.' },
      { id: 4, name: 'Henry Jones', profilePhoto: 'asdf', bio: 'Henry is not cool.' }
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
