import React from "react";
import './App.css';
import Styled from 'styled-components'
import Gallery from "./components/Gallery";
// import { initialState } from "./data";

// className={classes.input}

export default function App() {
  return (
    <AppContainer>
        <Gallery />
    </AppContainer>
  );
}

const AppContainer = Styled.div``;