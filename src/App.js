import React, { Component, useState } from "react";
import { Note } from "./components/Note";
import UserProvider from './providers/UserProvider';
import axios from "axios";
import { Home } from './pages/Home';
import { Listings } from './pages/Listings';
import { Profiles } from './pages/Profiles';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  // useRouteMatch,
  // useParams
} from 'react-router-dom';


class App extends Component {
  state = {
    notes: null,
  };
  componentDidMount() {
    axios
      .get("/get5Notes")
      .then((res) => {
        this.setState({
          notes: res.data,
        });
      })
      .catch((err) => console.log(err));
  }
  render() {
    let notesloaded = this.state.notes ? (
      this.state.notes.map((notes) => <Note note={notes} />)
    ) : (
        <p>Getting Notes... </p>
      );
    return (
      <UserProvider>
        <Router>
          <div>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/listings">
                <Listings />
              </Route>
              <Route path="/profiles">
                <Profiles />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </UserProvider>

    );
  }
}

export default App;
