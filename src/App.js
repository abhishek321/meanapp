import Addproduct from "./components/Addproduct";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { BrowserRouter,Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/add-product" element={<Addproduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
