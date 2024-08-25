import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Resume from "../components/Resume";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
