
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
        setError("");

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

            if (response.ok && Array.isArray(data)) {
                setOrders(data);
            } else {
                setError(data.message || "Orders load panna mudiyala");
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

    const totalRevenue = orders.reduce(
        (sum, order) => sum + (Number(order.total) || 0),
        0
    );

    return (
        <div className="admin-page">
            <nav className="navbar navbar-expand-lg admin-navbar">
                <div className="container-fluid px-lg-4">
                    <Link className="navbar-brand admin-brand" to="/">
                        🥬 Palmurugan Fresh Vegetables
                    </Link>

                    <div className="d-flex align-items-center gap-3">
                        <Link className="admin-nav-link d-none d-sm-inline" to="/">
                            Home
                        </Link>

                        <Link className="admin-nav-link d-none d-sm-inline" to="/products">
                            Products
                        </Link>

                        <button
                            className="admin-logout-btn"
                            onClick={handleLogout}
                        >
                            <span>↪</span> Logout
                        </button>
                    </div>
                </div>
            </nav>

            <main className="admin-main container-fluid">
                <div className="admin-heading">
                    <div>
                        <span className="admin-eyebrow">MANAGEMENT PANEL</span>
                        <h1>Admin Dashboard</h1>
                        <p>Manage customer orders and review order details.</p>
                    </div>

                    <button
                        className="admin-refresh-btn"
                        onClick={fetchOrders}
                        disabled={loading}
                    >
                        <span>↻</span> {loading ? "Loading..." : "Refresh Orders"}
                    </button>
                </div>

                <div className="row g-4 admin-stats">
                    <div className="col-md-6 col-xl-4">
                        <div className="admin-stat-card">
                            <div className="admin-stat-icon">📦</div>
                            <div>
                                <p>Total Orders</p>
                                <h2>{orders.length}</h2>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-xl-4">
                        <div className="admin-stat-card">
                            <div className="admin-stat-icon">₹</div>
                            <div>
                                <p>Total Order Value</p>
                                <h2>₹{totalRevenue.toLocaleString("en-IN")}</h2>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-xl-4">
                        <div className="admin-stat-card">
                            <div className="admin-stat-icon">🌿</div>
                            <div>
                                <p>Dashboard Status</p>
                                <h2 className="admin-status-text">
                                    {loading ? "Loading" : error ? "Error" : "Active"}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="admin-orders-section">
                    <div className="admin-orders-heading">
                        <div>
                            <h2>Customer Orders</h2>
                            <p>View customer information and purchased products.</p>
                        </div>
                        <span className="admin-order-count">
                            {orders.length} Orders
                        </span>
                    </div>

                    {loading ? (
                        <div className="admin-message">
                            <div className="admin-loader"></div>
                            <p>Loading orders...</p>
                        </div>
                    ) : error ? (
                        <div className="admin-error">
                            <strong>Unable to load orders</strong>
                            <p>{error}</p>
                            <button onClick={fetchOrders}>Try Again</button>
                        </div>
                    ) : orders.length === 0 ? (
                        <div className="admin-empty">
                            <div>🛒</div>
                            <h3>No orders found</h3>
                            <p>Customer orders will appear here after they place an order.</p>
                        </div>
                    ) : (
                        <div className="admin-order-list">
                            {orders.map((order) => (
                                <article className="admin-order-card" key={order._id}>
                                    <div className="admin-order-card-header">
                                        <div>
                                            <span className="admin-order-label">
                                                ORDER ID
                                            </span>
                                            <p className="admin-order-id">
                                                {order._id}
                                            </p>
                                        </div>

                                        <div className="admin-order-total">
                                            <span>Order Total</span>
                                            <strong>
                                                ₹{(Number(order.total) || 0).toLocaleString("en-IN")}
                                            </strong>
                                        </div>
                                    </div>

                                    <div className="admin-customer-details">
                                        <h3>Customer Information</h3>

                                        <div className="row g-3">
                                            <div className="col-md-6 col-xl-3">
                                                <span>Customer Name</span>
                                                <p>{order.name || "Not provided"}</p>
                                            </div>

                                            <div className="col-md-6 col-xl-3">
                                                <span>Mobile Number</span>
                                                <p>{order.mobile || "Not provided"}</p>
                                            </div>

                                            <div className="col-md-6 col-xl-3">
                                                <span>Email Address</span>
                                                <p>{order.email || "Not provided"}</p>
                                            </div>

                                            <div className="col-md-6 col-xl-3">
                                                <span>Delivery Address</span>
                                                <p>{order.address || "Not provided"}</p>
                                            </div>
                                        </div>

                                        {order.message && (
                                            <div className="admin-customer-message">
                                                <span>Customer Message</span>
                                                <p>{order.message}</p>
                                            </div>
                                        )}
                                    </div>

                                    <div className="admin-products-section">
                                        <h3>Ordered Products</h3>

                                        {!order.products || order.products.length === 0 ? (
                                            <p className="admin-no-products">
                                                No products listed for this order.
                                            </p>
                                        ) : (
                                            <div className="table-responsive">
                                                <table className="table admin-products-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Product</th>
                                                            <th>Price</th>
                                                            <th>Quantity</th>
                                                            <th>Subtotal</th>
                                                        </tr>
                                                    </thead>

                                                    <tbody>
                                                        {order.products.map((item, index) => (
                                                            <tr key={item._id || index}>
                                                                <td>{item.name || "Product"}</td>
                                                                <td>
                                                                    ₹{Number(item.price) || 0}
                                                                </td>
                                                                <td>
                                                                    <span className="admin-quantity">
                                                                        {Number(item.quantity) || 0}
                                                                    </span>
                                                                </td>
                                                                <td className="admin-subtotal">
                                                                    ₹{(
                                                                        (Number(item.price) || 0) *
                                                                        (Number(item.quantity) || 0)
                                                                    ).toLocaleString("en-IN")}
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        )}
                                    </div>

                                    <div className="admin-order-card-footer">
                                        <span>Thank you for choosing us 🌿</span>
                                        <strong>
                                            Total: ₹{(Number(order.total) || 0).toLocaleString("en-IN")}
                                        </strong>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </section>
            </main>

            <footer className="admin-footer">
                <h4>🥬 Palmurugan Fresh Vegetables</h4>
                <p>Fresh Vegetables Delivered to Your Doorstep</p>
                <span>© 2026 Palmurugan Fresh Vegetables. All Rights Reserved.</span>
            </footer>
        </div>
    );
}

export default Admin;
