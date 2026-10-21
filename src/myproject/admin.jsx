
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

function Admin() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    async function fetchOrders() {
        setLoading(true);

        try {
            const token = localStorage.getItem("adminToken");

            if (!token) {
                navigate("/admin");
                return;
            }

            const response = await fetch("http://localhost:3000/order", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.status === 401 || response.status === 403) {
                localStorage.removeItem("adminToken");
                navigate("/admin");
                return;
            }

            const data = await response.json();

            if (response.ok) {
                setOrders(data);
                setError("");
            } else {
                setError("Orders load panna mudiyala");
            }
        } catch (err) {
            console.log(err);
            setError("Backend connection failed");
        } finally {
            setLoading(false);
        }
    }

    function handleLogout() {
        localStorage.removeItem("adminToken");
        navigate("/admin");
    }

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        🥬 Palmurugan Fresh Vegetables
                    </Link>

                    <div className="navbar-nav ms-auto">
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/products">Products</Link>
                        <button
                            className="btn btn-outline-light ms-2"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </nav>

            <div className="container-fluid py-5">
                <h2 className="text-center text-success mb-4">
                    Admin Dashboard
                </h2>

                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5>Total Orders: {orders.length}</h5>

                    <button
                        className="btn btn-success"
                        onClick={fetchOrders}
                        disabled={loading}
                    >
                        {loading ? "Loading..." : "Refresh Orders"}
                    </button>
                </div>

                {loading ? (
                    <p className="text-center">Loading orders...</p>
                ) : error ? (
                    <div className="alert alert-danger">{error}</div>
                ) : orders.length === 0 ? (
                    <p className="text-center">No orders found</p>
                ) : (
                    orders.map((order) => (
                        <div className="card shadow p-4 mb-4" key={order._id}>
                            <div className="d-flex justify-content-between flex-wrap">
                                <h5 className="text-success">
                                    Customer: {order.name}
                                </h5>
                                <span>Order ID: {order._id}</span>
                            </div>

                            <p className="mb-1">Mobile: {order.mobile}</p>
                            <p className="mb-1">Email: {order.email}</p>
                            <p className="mb-1">Address: {order.address}</p>
                            <p>Message: {order.message || "No message"}</p>

                            <h6 className="mt-2">Ordered Products</h6>

                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead className="table-success">
                                        <tr>
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Subtotal</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {(order.products || []).map((item, index) => (
                                            <tr key={item._id || index}>
                                                <td>{item.name}</td>
                                                <td>₹{item.price}</td>
                                                <td>{item.quantity}</td>
                                                <td>₹{item.price * item.quantity}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <h4 className="text-end text-success">
                                Total: ₹{order.total}
                            </h4>
                        </div>
                    ))
                )}
            </div>

            <footer className="bg-success text-white text-center p-4">
                <h4>Palmurugan Fresh Vegetables</h4>
                <p>Fresh Vegetables Delivered to Your Doorstep</p>
                <p>© 2026 All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default Admin;
