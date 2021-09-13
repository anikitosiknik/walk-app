import { Provider } from "react-redux";
import styled from "styled-components";

import RouterComponent from "./components/RouterComponent";
import ThemeProviderWrapper from "./components/ThemeProviderWrapper";
import TranslationProvider from "./components/TranslationProvider";
import { store } from "./store/store";

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <AppContainer>
      <Provider store={store}>
        <TranslationProvider>
          <ThemeProviderWrapper>
            <RouterComponent />
          </ThemeProviderWrapper>
        </TranslationProvider>
      </Provider>
    </AppContainer>
  );
}

export default App;
