import "./style.css";
import { Link } from "react-router-dom";

function About() {
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
                        data-bs-target="#menu"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="menu">
                        <ul className="navbar-nav ms-auto">

                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Home
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" to="/about">
                                    About
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/products">
                                    Products
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">
                                    Contact
                                </Link>
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
                <div className="row align-items-center">

                    <div className="col-lg-6">
                        <img
                            src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=700"
                            className="img-fluid rounded shadow"
                            alt="Fresh Vegetables"
                        />
                    </div>

                    <div className="col-lg-6">
                        <h2 className="mb-4">
                            About Our Company
                        </h2>

                        <p>
                            Palmurugan Fresh Vegetables is dedicated to providing
                            fresh, healthy, and high-quality vegetables directly
                            from trusted farmers to customers. We carefully
                            select every product to ensure freshness and hygiene.
                        </p>

                        <p>
                            Our mission is to make healthy eating easy by
                            delivering farm-fresh vegetables to your doorstep at
                            affordable prices. We focus on quality, customer
                            satisfaction, and fast delivery services.
                        </p>

                        <p>
                            We offer tomatoes, onions, potatoes, carrots,
                            brinjal, cabbage, cauliflower, ladies finger,
                            beans, spinach, cucumber, and many other fresh
                            vegetables every day.
                        </p>

                        <Link to="/products" className="btn btn-success">
                            View Products
                        </Link>
                    </div>

                </div>
            </section>

            <footer className="bg-success text-white text-center p-4">
                <h4>Palmurugan Fresh Vegetables</h4>

                <p>
                    Fresh Vegetables Delivered to Your Doorstep
                </p>

                <p>
                    © 2026 All Rights Reserved.
                </p>
            </footer>
        </div>
    );
}

export default About;