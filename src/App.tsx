import React from "react";

import { Provider } from "react-redux";
import { store } from "./store/store";
import styled from "styled-components";

const Main = styled.main`
  height: 100vh;
`;

function App() {
  return (
    <Provider store={store}>
      <Main></Main>
    </Provider>
  );
}

export default App;
