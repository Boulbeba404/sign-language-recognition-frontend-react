import AppRoutes from "./routes";
import { Provider } from "react-redux";
import { store } from "./redux";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <Provider store={store}>
      <ToastContainer />
      <AppRoutes />
    </Provider>
  );
};
export default App;
