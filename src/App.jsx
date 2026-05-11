import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Extra from "./pages/Feedback.jsx";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={Home} />
      <Route path="/extra" element={Extra} />
      <Route path="/about" element={About} />
      <Route path="/contact" element={Contact} />
      <Route path="/products" element={Products} />
      <Route path="*" element={NotFound} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
