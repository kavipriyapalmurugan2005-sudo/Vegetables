import "./style.css";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-success sticky-top">
                <div className="container-fluid">

                    <Link className="navbar-brand fw-bold" to="/">
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
                                <Link className="nav-link active" to="/">
                                    Home
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
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


            <section className="kavi">

                <div className="container-fluid">

                    <div className="row align-items-center">

                        <div className="col-lg-6">

                            <h1>
                                Fresh Vegetables Delivered To Your Doorstep
                            </h1>

                            <p>
                                We provide farm-fresh vegetables directly from
                                trusted farmers to your home. Quality products,
                                affordable prices, and fast delivery are our
                                promises.
                            </p>

                            <Link
                                to="/products"
                                className="btn btn-warning btn-lg"
                            >
                                Shop Now
                            </Link>

                        </div>


                        <div className="col-lg-6 text-center">

                            <img
                                src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=500"
                                className="img-fluid rounded shadow"
                                alt="Fresh Vegetables"
                            />

                        </div>

                    </div>

                </div>

            </section>


            <section className="py-5 bg-light">

                <div className="container-fluid">

                    <h2 className="text-center mb-5">
                        Our Fresh Vegetables
                    </h2>

                    <div className="row">


                        <div className="col-md-3 mb-4">

                            <div className="card shadow h-100">

                                <img
                                    src="https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=500"
                                    className="card-img-top"
                                    alt="Tomato"
                                />

                                <div className="card-body text-center">

                                    <h5>Tomato</h5>

                                    <p>
                                        Fresh and juicy tomatoes directly from farms.
                                    </p>

                                    <button className="btn btn-success">
                                        Buy Now
                                    </button>

                                </div>

                            </div>

                        </div>


                        <div className="col-md-3 mb-4">

                            <div className="card shadow h-100">

                                <img
                                    src="https://i.pinimg.com/1200x/ee/80/9e/ee809e20d7b80441260dcd295baf243f.jpg"
                                    className="card-img-top"
                                    alt="Carrot"
                                />

                                <div className="card-body text-center">

                                    <h5>Carrot</h5>

                                    <p>
                                        Healthy carrots rich in vitamins and nutrients.
                                    </p>

                                    <button className="btn btn-success">
                                        Buy Now
                                    </button>

                                </div>

                            </div>

                        </div>


                        <div className="col-md-3 mb-4">

                            <div className="card shadow h-100">

                                <img
                                    src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500"
                                    className="card-img-top"
                                    alt="Potato"
                                />

                                <div className="card-body text-center">

                                    <h5>Potato</h5>

                                    <p>
                                        Premium quality potatoes for everyday cooking.
                                    </p>

                                    <button className="btn btn-success">
                                        Buy Now
                                    </button>

                                </div>

                            </div>

                        </div>


                        <div className="col-md-3 mb-4">

                            <div className="card shadow h-100">

                                <img
                                    src="https://i.pinimg.com/1200x/18/8c/17/188c179fcd69e6de1845965968d569bc.jpg"
                                    className="card-img-top"
                                    alt="Brinjal"
                                />

                                <div className="card-body text-center">

                                    <h5>Brinjal</h5>

                                    <p>
                                        Fresh brinjals carefully selected from farms.
                                    </p>

                                    <button className="btn btn-success">
                                        Buy Now
                                    </button>

                                </div>

                            </div>

                        </div>


                    </div>

                </div>

            </section>


            <section className="py-5">

                <div className="container-fluid">

                    <h2 className="text-center mb-5">
                        Why Choose Us?
                    </h2>

                    <div className="row text-center">


                        <div className="col-md-4">

                            <h1>🥬</h1>

                            <h4>Farm Fresh</h4>

                            <p>
                                We collect vegetables directly from trusted farmers.
                            </p>

                        </div>


                        <div className="col-md-4">

                            <h1>🚚</h1>

                            <h4>Fast Delivery</h4>

                            <p>
                                Quick and safe doorstep delivery across your city.
                            </p>

                        </div>


                        <div className="col-md-4">

                            <h1>💰</h1>

                            <h4>Affordable Price</h4>

                            <p>
                                Best quality vegetables at reasonable prices.
                            </p>

                        </div>


                    </div>

                </div>

            </section>


            <footer className="bg-success text-white text-center p-4">

                <h4>Palmurugan Fresh Vegetables</h4>

                <p>
                    Fresh Vegetables Delivered to Your Doorstep
                </p>

                <p>
                    Email : info@palmuruganvegetables.com
                </p>

                <p>
                    Phone : +91 98765 43210
                </p>

                <p>
                    © 2026 Palmurugan Fresh Vegetables. All Rights Reserved.
                </p>

            </footer>

        </div>
    );
}

export default Home;