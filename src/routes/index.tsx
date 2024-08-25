import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Resume from "../components/Resume";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/resume"element={<Resume/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
