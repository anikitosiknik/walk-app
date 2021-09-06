import React from "react";

import { Provider } from "react-redux";
import { store } from "./store/store";
import styled from "styled-components";
import TranslationProvider from "./components/TranslationProvider";
const Main = styled.main`
  height: 100vh;
`;

function App() {
  return (
    <Provider store={store}>
      <TranslationProvider>
        <Main></Main>
      </TranslationProvider>
    </Provider>
  );
}

export default App;
