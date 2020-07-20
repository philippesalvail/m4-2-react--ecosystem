import React from "react";
import Header from "./Header";
import Homepage from "./Homepage";
import ItemDetails from "./ItemDetails";
import About from "./About";
import { items } from "../data";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
function App(props) {
  return (
    <MainPage>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact strict path="/">
            <Homepage />
          </Route>
          <Route exact strict path="/about">
            <About />
          </Route>
          <Route path="/items/:itemId">
            <ItemDetails />
          </Route>
        </Switch>
      </BrowserRouter>
    </MainPage>
  );
}

const MainPage = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export default App;
