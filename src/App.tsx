import { Provider } from "react-redux";

import RouterComponent from "./components/RouterComponent";
import ThemeProviderWrapper from "./components/ThemeProviderWrapper";
import TranslationProvider from "./components/TranslationProvider";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <TranslationProvider>
        <ThemeProviderWrapper>
          <RouterComponent />
        </ThemeProviderWrapper>
      </TranslationProvider>
    </Provider>
  );
}

export default App;
