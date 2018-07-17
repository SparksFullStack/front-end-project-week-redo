//default imports
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';

//containers
import AllNotes from './containers/AllNotes';
import Note from './containers/Note';

//components
import Menu from './components/Menu';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={Menu} />
        <Route path="/" exact component={AllNotes} />
        <Route path="/note" exact component={Note} />
      </div>
    );
  }
}

export default App;
