
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./myproject/index";
import About from "./myproject/about";
import Products from "./myproject/products";
import Contact from "./myproject/contact";
import Cart from "./myproject/cart";
import Admin from "./myproject/admin";
import AdminLogin from "./myproject/adminLogin";
import ProtectedAdmin from "./myproject/ProtectedAdmin";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/admin" element={<AdminLogin />} />
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route
                    path="/admin/dashboard"
                    element={
                        <ProtectedAdmin>
                            <Admin />
                        </ProtectedAdmin>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
