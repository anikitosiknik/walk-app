import { Provider } from "react-redux";

import NavigationBar from "./components/NavigationBar";
import ThemeProviderWrapper from "./components/ThemeProviderWrapper";
import TranslationProvider from "./components/TranslationProvider";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <TranslationProvider>
        <ThemeProviderWrapper>
          <NavigationBar />
        </ThemeProviderWrapper>
      </TranslationProvider>
    </Provider>
  );
}

export default App;
