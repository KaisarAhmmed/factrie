import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import RequireAuth from "./Pages/Login/RequiredAuth";
import ResetPassword from "./Pages/Login/ResetPassword";
import NotFound from "./Pages/NotFound/NotFound";
import Products from "./Pages/Products/Products";
import Reviews from "./Pages/Reviews/Reviews";

function App() {
    return (
        <div className="body">
            <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/products" element={<Products />}></Route>
                <Route path="/reviews" element={<Reviews />}></Route>
                <Route path="/blog" element={<Blog />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route
                    path="/dashboard"
                    element={
                        <RequireAuth>
                            <Dashboard />
                        </RequireAuth>
                    }
                ></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route
                    path="/reset-password"
                    element={<ResetPassword />}
                ></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
