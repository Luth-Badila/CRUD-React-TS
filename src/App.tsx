import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";

import Root from "./routes/root";
import ErrorPage from "./pages/error-page";
import Contact from "./routes/contacts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<Create />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
