import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import About from "./Components/About";
import Packages from "./Components/Packages";
import Contacts from "./Components/Contacts";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";

function App() {
  const MaintLayout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Travel/" element={<MaintLayout />}>
            <Route index element={<Main />} />
            <Route path="about" element={<About />} />
            <Route path="packages" element={<Packages />} />
            <Route path="contact" element={<Contacts />} />
          </Route>
          <Route path="*" element={<h2>No Routes match</h2>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
