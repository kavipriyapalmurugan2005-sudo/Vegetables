
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
                alert(order ? "Order placed successfully!" : "Message submitted successfully!");

                if (order) {
                    localStorage.removeItem("cart");
                }

                setName("");
                setMobile("");
                setEmail("");
                setAddress("");
                setMessage("");

                navigate("/products");
            } else {
                alert(data.message || "Request failed");
            }
        } catch (error) {
            console.log("Order Error:", error);
            alert("Backend connection failed");
        }
    }

    return (
        <div className="contact-page">
            <nav className="navbar navbar-expand-lg contact-navbar">
                <div className="container">
                    <Link className="navbar-brand contact-brand" to="/">
                        <span className="contact-brand-icon">🥬</span>
                        <span>
                            Palmurugan
                            <small>FRESH VEGETABLES</small>
                        </span>
                    </Link>

                    <button
                        className="navbar-toggler contact-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#contactNavbar"
                        aria-controls="contactNavbar"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="contactNavbar">
                        <ul className="navbar-nav ms-auto align-items-lg-center">
                            <li className="nav-item">
                                <Link className="nav-link contact-nav-link" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link contact-nav-link" to="/about">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link contact-nav-link" to="/products">
                                    Products
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link contact-nav-link contact-nav-active" to="/contact">
                                    Contact
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link contact-nav-link" to="/cart">
                                    Cart 🛒
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link contact-nav-link" to="/admin">
                                    Admin
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section className="contact-hero">
                <div className="container">
                    <span className="contact-eyebrow">
                        WE ARE HERE FOR YOU
                    </span>
                    <h1>
                        {order ? (
                            <>Complete Your <span>Order</span></>
                        ) : (
                            <>Let's Talk <span>Fresh</span></>
                        )}
                    </h1>
                    <p>
                        {order
                            ? "Enter your delivery details and confirm your fresh vegetable order."
                            : "Have a question? We would love to hear from you."}
                    </p>
                </div>
            </section>

            <main className="contact-main">
                <div className="container">
                    <div className="row g-4 justify-content-center">
                        <div className="col-lg-5">
                            <div className="contact-info-card">
                                <span className="contact-eyebrow">
                                    GET IN TOUCH
                                </span>
                                <h2>We'd love to hear from you</h2>
                                <p className="contact-info-description">
                                    Reach out to us for fresh vegetables,
                                    delivery details or any questions.
                                </p>

                                <div className="contact-info-item">
                                    <div className="contact-info-icon">📍</div>
                                    <div>
                                        <h3>Our Address</h3>
                                        <p>
                                            Palmurugan Fresh Vegetables<br />
                                            Virudhunagar, Tamil Nadu
                                        </p>
                                    </div>
                                </div>

                                <div className="contact-info-item">
                                    <div className="contact-info-icon">📞</div>
                                    <div>
                                        <h3>Call Us</h3>
                                        <p>+91 98765 43210</p>
                                    </div>
                                </div>

                                <div className="contact-info-item">
                                    <div className="contact-info-icon">✉️</div>
                                    <div>
                                        <h3>Email Us</h3>
                                        <p>info@palmuruganvegetables.com</p>
                                    </div>
                                </div>

                                <div className="contact-fresh-note">
                                    <span>🌱</span>
                                    <p>
                                        <strong>Freshness you can trust</strong>
                                        <br />
                                        Bringing fresh vegetables closer to your home.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="contact-form-card">
                                <div className="contact-form-heading">
                                    <span className="contact-eyebrow">
                                        {order ? "ORDER DETAILS" : "SEND A MESSAGE"}
                                    </span>
                                    <h2>
                                        {order ? "Delivery Information" : "Contact Us"}
                                    </h2>
                                    <p>
                                        {order
                                            ? "Please provide your details to complete your order."
                                            : "Fill in the form below and get in touch with us."}
                                    </p>
                                </div>

                                {order && (
                                    <div className="contact-order-summary">
                                        <div className="contact-summary-heading">
                                            <h3>🛒 Your Order</h3>
                                            <span>
                                                {order.products?.length || 0} products
                                            </span>
                                        </div>

                                        {order.products?.length > 0 ? (
                                            order.products.map((item) => (
                                                <div className="contact-order-item" key={item.name}>
                                                    <div>
                                                        <h4>{item.name}</h4>
                                                        <p>
                                                            ₹{item.price} × {item.quantity}
                                                        </p>
                                                    </div>
                                                    <strong>
                                                        ₹{item.price * item.quantity}
                                                    </strong>
                                                </div>
                                            ))
                                        ) : (
                                            <p className="contact-no-products">
                                                No products found in this order.
                                            </p>
                                        )}

                                        <div className="contact-order-total">
                                            <span>Total Amount</span>
                                            <strong>₹{order.total || 0}</strong>
                                        </div>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit}>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <label className="contact-label">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control contact-input"
                                                placeholder="Enter your name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                required
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="contact-label">
                                                Mobile Number *
                                            </label>
                                            <input
                                                type="tel"
                                                className="form-control contact-input"
                                                placeholder="Enter mobile number"
                                                value={mobile}
                                                onChange={(e) => setMobile(e.target.value)}
                                                pattern="[0-9]{10}"
                                                maxLength="10"
                                                title="Enter a valid 10-digit mobile number"
                                                required
                                            />
                                        </div>

                                        <div className="col-12">
                                            <label className="contact-label">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control contact-input"
                                                placeholder="Enter your email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </div>

                                        <div className="col-12">
                                            <label className="contact-label">
                                                Delivery Address *
                                            </label>
                                            <textarea
                                                className="form-control contact-input"
                                                rows="3"
                                                placeholder="Enter your complete address"
                                                value={address}
                                                onChange={(e) => setAddress(e.target.value)}
                                                required
                                            ></textarea>
                                        </div>

                                        <div className="col-12">
                                            <label className="contact-label">
                                                Message
                                            </label>
                                            <textarea
                                                className="form-control contact-input"
                                                rows="3"
                                                placeholder="Any additional information?"
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                            ></textarea>
                                        </div>

                                        <div className="col-12">
                                            <button
                                                type="submit"
                                                className="contact-submit-btn"
                                            >
                                                {order ? "Confirm Order" : "Send Message"}
                                                <span>→</span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="contact-footer">
                <div className="container">
                    <Link to="/" className="contact-footer-brand">
                        🥬 Palmurugan Fresh Vegetables
                    </Link>
                    <p>Fresh Vegetables Delivered to Your Doorstep</p>
                    <div className="contact-footer-line"></div>
                    <small>© 2026 Palmurugan Fresh Vegetables. All Rights Reserved.</small>
                </div>
            </footer>
        </div>
    );
}

export default Contact;
