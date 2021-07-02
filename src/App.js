import React from "react";
import "./App.css";
import Routes from "./routes";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/es/integration/react";
import { ConnectedRouter } from "connected-react-router";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import configureStore from "./config";
import Loader from "./components/Loader";

/*********** History function **************/
const history = createBrowserHistory();

const { persistor, store } = configureStore(history);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <ConnectedRouter history={history}>
          <ToastContainer />
          <Routes {...store} />
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
