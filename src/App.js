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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddProduct from "./Pages/Dashboard/AddProduct";
import AdminData from "./Pages/Dashboard/AdminData";
import Profile from "./Pages/Dashboard/Profile";
import ProfileEdit from "./Pages/Dashboard/ProfileEdit";
import Purchase from "./Pages/Purchase/Purchase";
import ProductDetail from "./Pages/Products/ProductDetail";
import OrderHistory from "./Pages/Dashboard/OrderHistory";
import Users from "./Pages/Dashboard/Users";
import RequireAdmin from "./Pages/Login/RequiredAdmin";
import Orders from "./Pages/Dashboard/Orders";

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
                    path="/product-detail/:productId"
                    element={<ProductDetail />}
                ></Route>
                <Route
                    path="/purchase/:productId/:orderAmount"
                    element={
                        <RequireAuth>
                            <Purchase />
                        </RequireAuth>
                    }
                ></Route>
                <Route
                    path="/dashboard"
                    element={
                        <RequireAuth>
                            <Dashboard />
                        </RequireAuth>
                    }
                >
                    <Route index element={<AdminData></AdminData>}></Route>
                    <Route
                        path="/dashboard/users"
                        element={
                            <RequireAdmin>
                                <Users />
                            </RequireAdmin>
                        }
                    ></Route>
                    <Route
                        path="/dashboard/order-history"
                        element={
                            <RequireAdmin>
                                <Orders />
                            </RequireAdmin>
                        }
                    ></Route>
                    <Route
                        path="/dashboard/profile"
                        element={<Profile />}
                    ></Route>
                    <Route
                        path="/dashboard/profile/edit"
                        element={<ProfileEdit />}
                    ></Route>
                    <Route
                        path="/dashboard/add-product"
                        element={
                            <RequireAdmin>
                                <AddProduct />
                            </RequireAdmin>
                        }
                    ></Route>
                    <Route
                        path="/dashboard/my-order-history"
                        element={<OrderHistory />}
                    ></Route>
                </Route>
                <Route path="/register" element={<Register />}></Route>
                <Route
                    path="/reset-password"
                    element={<ResetPassword />}
                ></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
            <Footer />
            <ToastContainer />
        </div>
    );
}

export default App;
