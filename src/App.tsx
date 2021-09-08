import { Provider } from "react-redux";

import LoginPageComponent from "./components/LoginPageComponent";
import ThemeProviderWrapper from "./components/ThemeProviderWrapper";
import TranslationProvider from "./components/TranslationProvider";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <TranslationProvider>
        <ThemeProviderWrapper>
          <LoginPageComponent />
        </ThemeProviderWrapper>
      </TranslationProvider>
    </Provider>
  );
}

export default App;
