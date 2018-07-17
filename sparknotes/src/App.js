//default imports
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';

//containers
import AllNotes from './containers/AllNotes';
import Note from './containers/Note';
import CreateNote from './containers/CreateNote';
import EditNote from './containers/EditNote';

//components
import Menu from './components/Menu';

class App extends Component {
  render() {
    return (

      // <DeleteModal />
      <div className="App">
        <Route path="/" component={Menu} />
        <Route path="/" exact component={AllNotes} />
        <Route path="/note" exact component={Note} />
        <Route path="/createnote" exact component={CreateNote} />
        <Route path="/editnote" exact component={EditNote} />
      </div>
    );
  }
}

export default App;
