import React, { Component } from 'react';
import { 
  Route,
  Link,
  Redirect,
  Switch,
  withRouter
  } from 'react-router-dom';
import './App.css';
import StudentList from './components/StudentList';
import NoMatch from './components/NoMatch';
import ListItem from './components/ListItem';
import NewStudent from './components/NewStudent';

const currentId = 4
const getId = () => {
  return currentId + 1
}

class App extends Component {
  state = {
    students: [
      { id: 1, name: 'Billy Bob', profilePhoto: 'https://randomuser.me/api/portraits/men/78.jpg', bio: 'Billy is cool.' },
      { id: 2, name: 'Jane Doe', profilePhoto: 'https://randomuser.me/api/portraits/women/22.jpg', bio: 'Jane likes coffee.' },
      { id: 3, name: 'Mark Andersen', profilePhoto: 'https://randomuser.me/api/portraits/men/7.jpg', bio: 'Mark is the man.' },
      { id: 4, name: 'Henry Jones', profilePhoto: 'https://randomuser.me/api/portraits/men/9.jpg', bio: 'Henry is not cool.' }
    ]
  }

  findStudent = (id) => {
    return this.state.students.find((student) => {
      return student.id === parseInt(id, 10)
    })
  }

  handleDelete = (id) => {
    this.setState({
      students: this.state.students.filter(student => {
        return student.id !== id 
      })
    }, () => {
      this.props.history.push('/')
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target
    const elements = form.elements
    const newStudent = { 
      id: getId(), 
      name: elements.nameField.value, 
      profilePhoto: elements.imageField.value, 
      bio: elements.bioField.value
    }
    this.setState({
      students: [newStudent, ...this.state.students]
    }, () => {
      this.props.history.push('/')
    })
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route 
            exact path='/' 
            component={() => <StudentList 
                              handleDelete={this.handleDelete}
                              students={this.state.students}/> }
            />
          <Route 
            exact path='/students/:id' 
            component={({match}) => <ListItem 
                                      handleDelete={this.handleDelete} 
                                      {...this.findStudent(match.params.id)}/> }
            />
          <Route 
            exact path='/student/new' 
            component={() => <NewStudent handleSubmit={this.handleSubmit} /> }
            />
          <Route component={NoMatch}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
