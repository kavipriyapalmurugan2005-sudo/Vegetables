
import "./style.css";
import { Link } from "react-router-dom";

function About() {
    return (
        <div className="about-page">
            <nav className="navbar navbar-expand-lg about-navbar">
                <div className="container">
                    <Link className="navbar-brand about-brand" to="/">
                        🥬 Palmurugan Fresh Vegetables
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#aboutMenu"
                        aria-controls="aboutMenu"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="aboutMenu">
                        <ul className="navbar-nav ms-auto align-items-lg-center">
                            <li className="nav-item">
                                <Link className="nav-link about-nav-link" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link about-nav-link active" to="/about">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link about-nav-link" to="/products">
                                    Products
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link about-nav-link" to="/contact">
                                    Contact
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link about-nav-link" to="/cart">
                                    Cart 🛒
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link about-nav-link" to="/admin">
                                    Admin
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section className="about-hero">
                <div className="container">
                    <span className="about-tag">🌿 ROOTED IN FRESHNESS</span>
                    <h1>About Our Company</h1>
                    <p>
                        Bringing farm-fresh goodness and healthy choices
                        straight to your home.
                    </p>
                </div>
            </section>

            <section className="about-content">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <div className="about-image-wrapper">
                                <img
                                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=900"
                                    className="about-image"
                                    alt="Fresh vegetables in a market"
                                />
                                <div className="about-image-label">
                                    <span>🌱</span>
                                    <div>
                                        <strong>Fresh Every Day</strong>
                                        <p>Quality you can trust</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <span className="about-section-tag">WHO WE ARE</span>
                            <h2>Fresh Vegetables, Healthier Living</h2>

                            <p>
                                Palmurugan Fresh Vegetables is dedicated to
                                providing fresh, healthy, and high-quality
                                vegetables from trusted farmers to our customers.
                                We carefully select our products to maintain
                                freshness and quality.
                            </p>

                            <p>
                                Our mission is to make healthy eating easy by
                                offering farm-fresh vegetables at affordable
                                prices. We focus on quality, customer
                                satisfaction, and convenient service.
                            </p>

                            <p>
                                From tomatoes, onions, and potatoes to carrots,
                                brinjal, cabbage, cauliflower, ladies finger,
                                beans, spinach, and cucumber, we bring everyday
                                vegetable essentials closer to your home.
                            </p>

                            <Link to="/products" className="about-button">
                                Explore Our Products <span>→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-values">
                <div className="container">
                    <div className="text-center about-values-heading">
                        <span className="about-section-tag">WHAT MATTERS TO US</span>
                        <h2>Our Promise to You</h2>
                        <p>Good food starts with good choices.</p>
                    </div>

                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="about-value-card">
                                <div className="about-value-icon">🥬</div>
                                <h3>Fresh Quality</h3>
                                <p>
                                    We focus on offering fresh vegetables
                                    selected with care for your everyday meals.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="about-value-card">
                                <div className="about-value-icon">💚</div>
                                <h3>Customer First</h3>
                                <p>
                                    Your satisfaction matters to us. We aim to
                                    make shopping simple and convenient.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="about-value-card">
                                <div className="about-value-icon">🌱</div>
                                <h3>Healthy Living</h3>
                                <p>
                                    We encourage healthy everyday meals with
                                    fresh vegetables for the whole family.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-cta">
                <div className="container">
                    <h2>Make Fresh Choices Every Day</h2>
                    <p>Explore our vegetables and find what you need.</p>
                    <Link to="/products" className="about-cta-button">
                        Shop Vegetables →
                    </Link>
                </div>
            </section>

            <footer className="about-footer">
                <h4>🥬 Palmurugan Fresh Vegetables</h4>
                <p>Fresh Vegetables Delivered to Your Doorstep</p>
                <p className="about-copyright">
                    © 2026 Palmurugan Fresh Vegetables. All Rights Reserved.
                </p>
            </footer>
        </div>
    );
}

export default About;
