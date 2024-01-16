import Navbar from "./components/Nabar";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";

import Cart from "./Pages/Cart";
import SinglePage from "./Pages/Singlepage";
function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Products />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/single/:id" element={<SinglePage />} />
      </Routes>
    </div>
  );
}

export default App;
