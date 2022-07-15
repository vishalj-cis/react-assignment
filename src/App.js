import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar";
import Browse from "./pages/Browse";
import Favorite from "./pages/Favorite";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route element={<Browse />} path={"/"} />
          <Route element={<Browse />} path={"/browse"} />
          <Route element={<Favorite />} path={"/favorite"} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
