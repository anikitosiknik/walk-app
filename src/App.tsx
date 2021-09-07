import { Provider } from "react-redux";
import styled from "styled-components";

import TranslationProvider from "./components/TranslationProvider";
import { store } from "./store/store";

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
