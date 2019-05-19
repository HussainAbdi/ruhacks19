import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { observer } from "mobx-react";

import "./firebase";

import Enrich from "./components/Enrich";
import styled from "styled-components";
import Helmet from "react-helmet";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import List from "./components/List";
import Responses from "./components/Responses";
import Login from "./components/Login";

import firebase from "firebase";
import store from "./store";

const BodyContainer = styled.div`
  display: flex;
  flex: 1;

  justify-content: center;
  align-items: center;
`;

const Container = styled.div``;

@observer
class App extends React.Component {
  state = {
    user: null
  };

  createUser = (email: string, password: string) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        store.loggedIn = true;
        this.setState({
          user: user.user
        });
      });
  };

  logout = () => {
    console.log("Logged out");
    firebase.auth().signOut();
    store.loggedIn = false;
    this.setState(
      {
        user: null
      },
      () => console.log(this.state.user)
    );
  };

  render() {
    return (
      <BrowserRouter>
        <Container>
          <Navbar
            loggedIn={this.state.user ? true : false}
            logout={() => this.logout()}
          />
          <BodyContainer>
            <Helmet
              bodyAttributes={{ style: "background-color : rgb(20, 12, 20)" }}
            />
            <Switch>
              <Route path="/todays-questions/" component={Enrich} />
              <Route
                path="/sign-up"
                component={() => <SignUp createUser={this.createUser} />}
              />
              <Route path="/log-in" component={Login} />
              <Route
                path="/question-list"
                component={() => (
                  <List loggedIn={this.state.user ? true : false} />
                )}
              />
              <Route path="/responses/:id" component={Responses} />
            </Switch>
          </BodyContainer>
        </Container>
      </BrowserRouter>
    );
  }
}
export default App;
