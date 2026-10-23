
import "./style.css";
import { Link } from "react-router-dom";

function Home() {
    const vegetables = [
        {
            name: "Fresh Tomatoes",
            description: "Fresh, juicy tomatoes sourced from trusted farms.",
            image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=600",
            tag: "Farm Fresh"
        },
        {
            name: "Fresh Carrots",
            description: "Crunchy carrots packed with natural goodness.",
            image: "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=600",
            tag: "Healthy Choice"
        },
        {
            name: "Fresh Potatoes",
            description: "Quality potatoes perfect for everyday cooking.",
            image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600",
            tag: "Best Quality"
        },
        {
            name: "Fresh Brinjal",
            description: "Carefully selected brinjals for delicious meals.",
            image: "https://images.unsplash.com/photo-1659261200824-c1c0c4f0c4df?w=600",
            tag: "Naturally Fresh"
        }
    ];

    return (
        <div className="home-page">
            <nav className="navbar navbar-expand-lg home-navbar sticky-top">
                <div className="container">
                    <Link className="navbar-brand home-brand" to="/">
                        <span className="home-brand-icon">🥬</span>
                        <span>
                            Palmurugan
                            <small>FRESH VEGETABLES</small>
                        </span>
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto align-items-lg-center">
                            <li className="nav-item">
                                <Link className="nav-link home-nav-link active" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link home-nav-link" to="/about">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link home-nav-link" to="/products">
                                    Products
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link home-nav-link" to="/contact">
                                    Contact
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link home-nav-link" to="/cart">
                                    Cart 🛒
                                </Link>
                            </li>
                            <li className="nav-item ms-lg-3">
                                <Link className="home-admin-link" to="/admin">
                                    Admin Login
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section className="home-hero">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <span className="home-eyebrow">
                                🌿 FRESH FROM FARM TO HOME
                            </span>

                            <h1 className="home-hero-title">
                                Eat Fresh.
                                <br />
                                Live <span>Naturally.</span>
                            </h1>

                            <p className="home-hero-text">
                                Bring home nature's goodness with farm-fresh
                                vegetables, carefully selected for your family.
                                Freshness you can see, quality you can trust.
                            </p>

                            <div className="home-hero-actions">
                                <Link to="/products" className="home-primary-btn">
                                    Shop Fresh Vegetables <span>→</span>
                                </Link>
                                <Link to="/about" className="home-secondary-btn">
                                    Discover Our Story
                                </Link>
                            </div>

                            <div className="home-trust-row">
                                <div>
                                    <strong>100%</strong>
                                    <span>Freshness Focus</span>
                                </div>
                                <div>
                                    <strong>Farm</strong>
                                    <span>Sourced Produce</span>
                                </div>
                                <div>
                                    <strong>Daily</strong>
                                    <span>Fresh Selection</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="home-hero-image-wrap">
                                <img
                                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1000"
                                    className="home-hero-image"
                                    alt="A colourful selection of fresh vegetables"
                                />
                                <div className="home-image-badge">
                                    <span>🌱</span>
                                    <div>
                                        <strong>Freshness First</strong>
                                        <small>Good food, naturally</small>
                                    </div>
                                </div>
                                <div className="home-image-decoration"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="home-benefits">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="home-benefit">
                                <span className="home-benefit-icon">🌿</span>
                                <div>
                                    <h5>Fresh Selection</h5>
                                    <p>Vegetables selected with care.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="home-benefit">
                                <span className="home-benefit-icon">🚚</span>
                                <div>
                                    <h5>Doorstep Convenience</h5>
                                    <p>Shop from the comfort of home.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="home-benefit">
                                <span className="home-benefit-icon">💚</span>
                                <div>
                                    <h5>Quality You Trust</h5>
                                    <p>Good produce for everyday meals.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="home-products-section">
                <div className="container">
                    <div className="home-section-heading">
                        <span className="home-eyebrow">PICKED WITH CARE</span>
                        <h2>Fresh Picks for <span>Your Table</span></h2>
                        <p>Discover everyday favourites for delicious, wholesome meals.</p>
                    </div>

                    <div className="row g-4">
                        {vegetables.map((vegetable) => (
                            <div className="col-sm-6 col-lg-3" key={vegetable.name}>
                                <article className="home-product-card">
                                    <div className="home-product-image-wrap">
                                        <img
                                            src={vegetable.image}
                                            className="home-product-image"
                                            alt={vegetable.name}
                                            loading="lazy"
                                        />
                                        <span className="home-product-tag">
                                            {vegetable.tag}
                                        </span>
                                    </div>
                                    <div className="home-product-body">
                                        <span className="home-product-category">
                                            FRESH VEGETABLES
                                        </span>
                                        <h3>{vegetable.name}</h3>
                                        <p>{vegetable.description}</p>
                                        <Link
                                            to="/products"
                                            className="home-product-link"
                                        >
                                            Explore Products <span>→</span>
                                        </Link>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>

                    <div className="text-center home-products-cta">
                        <Link to="/products" className="home-primary-btn">
                            Explore All Vegetables <span>→</span>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="home-story-section">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <div className="home-story-image-wrap">
                                <img
                                    src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1000"
                                    alt="Green farmland and crops"
                                    className="home-story-image"
                                    loading="lazy"
                                />
                                <div className="home-story-label">
                                    <span>🌱</span>
                                    <span>Closer to nature, closer to freshness</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <span className="home-eyebrow">OUR PROMISE TO YOU</span>
                            <h2 className="home-story-title">
                                Good Food Starts With <span>Good Choices.</span>
                            </h2>
                            <p className="home-story-text">
                                At Palmurugan Fresh Vegetables, we believe that
                                quality ingredients make everyday meals special.
                                Our goal is to make shopping for fresh vegetables
                                simple, convenient and enjoyable.
                            </p>
                            <Link to="/about" className="home-primary-btn">
                                Learn About Us <span>→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="home-cta-section">
                <div className="container text-center">
                    <span>🥬 A FRESHER WAY TO SHOP</span>
                    <h2>Bring Home the Goodness of Fresh.</h2>
                    <p>Your next delicious meal starts with fresh ingredients.</p>
                    <Link to="/products" className="home-cta-btn">
                        Start Shopping <span>→</span>
                    </Link>
                </div>
            </section>

            <footer className="home-footer">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-5">
                            <Link className="home-footer-brand" to="/">
                                🥬 Palmurugan
                            </Link>
                            <p className="home-footer-description">
                                Fresh vegetables for happier kitchens and
                                healthier everyday meals.
                            </p>
                        </div>
                        <div className="col-6 col-lg-3">
                            <h5>Quick Links</h5>
                            <Link to="/">Home</Link>
                            <Link to="/about">About Us</Link>
                            <Link to="/products">Products</Link>
                            <Link to="/contact">Contact</Link>
                        </div>
                        <div className="col-6 col-lg-4">
                            <h5>Get In Touch</h5>
                            <p>✉ info@palmuruganvegetables.com</p>
                            <p>☎ +91 98765 43210</p>
                            <Link to="/cart">View Your Cart 🛒</Link>
                        </div>
                    </div>
                    <div className="home-footer-bottom">
                        <p>© 2026 Palmurugan Fresh Vegetables. All rights reserved.</p>
                        <Link to="/admin">Admin Login</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;
