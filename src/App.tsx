import { ToastContainer } from "react-toastify";
import AppRouter from "./routes";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <AppRouter />
      <ToastContainer />
    </>
  );
};

export default App;
