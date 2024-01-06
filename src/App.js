import Body from "./Components/Body";
import { Provider } from "react-redux";
import AppStore from "./Utils/Redux/Store/AppStore";
import { ChakraProvider } from "@chakra-ui/react";
function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Provider store={AppStore}>
          <Body />
        </Provider>
      </ChakraProvider>
    </div>
  );
}

export default App;
