
import "./style.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function Contact() {
    const location = useLocation();
    const order = location.state;
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [message, setMessage] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        const orderData = {
            name,
            mobile,
            email,
            address,
            message,
            products: order?.products || [],
            total: order?.total || 0
        };

        try {
            const response = await fetch("http://localhost:3000/order", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(orderData)
            });

            const data = await response.json();

          
if (response.ok) {
    alert("Order placed successfully!");

    localStorage.removeItem("cart");

    setName("");
    setMobile("");
    setEmail("");
    setAddress("");
    setMessage("");

    navigate("/products");
}
 else {
                alert(data.message || "Order not saved");
            }
        } catch (error) {
            console.log("Order Error:", error);
            alert("Backend connection failed");
        }
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        🥬 Palmurugan Fresh Vegetables
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/products">Products</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" to="/contact">Contact</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/cart">Cart 🛒</Link>
                            </li>
                             <li className="nav-item">
                           <Link className="nav-link" to="/admin">
                                                                Admin
                                                                </Link>
                                                        </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section className="container-fluid py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10">
                        <div className="contact-box shadow p-4">
                            <h2 className="text-center text-success mb-4">
                                {order ? "Place Your Order" : "Contact Us"}
                            </h2>

                            {order && (
                                <div className="alert alert-success">
                                    <h5>Order Products</h5>

                                    {order.products?.length > 0 ? (
                                        order.products.map((item) => (
                                            <div key={item.name} className="mb-3">
                                                <p className="mb-1">
                                                    Product: {item.name}
                                                </p>
                                                <p className="mb-1">
                                                    Price: ₹{item.price}
                                                </p>
                                                <p className="mb-1">
                                                    Quantity: {item.quantity}
                                                </p>
                                                <p className="mb-1">
                                                    Subtotal: ₹{item.price * item.quantity}
                                                </p>
                                            </div>
                                        ))
                                    ) : (
                                        <p>No products found in this order.</p>
                                    )}

                                    <hr />

                                    <h5>Total: ₹{order.total}</h5>
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Full Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Mobile Number</label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        placeholder="Enter your mobile number"
                                        value={mobile}
                                        onChange={(e) => setMobile(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Email Address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Delivery Address</label>
                                    <textarea
                                        className="form-control"
                                        rows="3"
                                        placeholder="Enter your address"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        required
                                    ></textarea>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Message</label>
                                    <textarea
                                        className="form-control"
                                        rows="4"
                                        placeholder="Type your message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    ></textarea>
                                </div>

                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="btn btn-success btn-lg"
                                    >
                                        {order ? "Confirm Order" : "Submit"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container-fluid pb-5">
                <div className="row text-center">
                    <div className="col-md-4">
                        <h4>📍 Address</h4>
                        <p>
                            Palmurugan Fresh Vegetables<br />
                            Virudhunagar, Tamil Nadu
                        </p>
                    </div>

                    <div className="col-md-4">
                        <h4>📞 Phone</h4>
                        <p>+91 98765 43210</p>
                    </div>

                    <div className="col-md-4">
                        <h4>📧 Email</h4>
                        <p>info@palmuruganvegetables.com</p>
                    </div>
                </div>
            </section>

            <footer className="bg-success text-white text-center p-4">
                <h4>Palmurugan Fresh Vegetables</h4>
                <p>Fresh Vegetables Delivered to Your Doorstep</p>
                <p>© 2026 Palmurugan Fresh Vegetables. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default Contact;
