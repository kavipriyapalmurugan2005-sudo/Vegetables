import "./style.css";
import { Link, useLocation } from "react-router-dom";

function Order() {

    const location = useLocation();
    const product = location.state;

    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container-fluid">

                    <Link className="navbar-brand" to="/">
                        🥬 Palmurugan Fresh Vegetables
                    </Link>

                    <div className="navbar-nav ms-auto">

                        <Link className="nav-link" to="/">
                            Home
                        </Link>

                        <Link className="nav-link" to="/products">
                            Products
                        </Link>

                        <Link className="nav-link" to="/cart">
                            Cart 🛒
                        </Link>

                    </div>

                </div>
            </nav>


            <section className="container-fluid py-5">

                <div className="row justify-content-center">

                    <div className="col-lg-6 col-md-8">

                        <div className="contact-box shadow p-4">

                            <h2 className="text-center text-success mb-4">
                                Place Your Order
                            </h2>

                            {product && (
                                <div className="mb-4">

                                    <h5>
                                        Product: {product.name}
                                    </h5>

                                    <h5>
                                        Price: ₹{product.price}
                                    </h5>

                                </div>
                            )}

                            <form>

                                <div className="mb-3">

                                    <label className="form-label">
                                        Full Name
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your name"
                                    />

                                </div>


                                <div className="mb-3">

                                    <label className="form-label">
                                        Mobile Number
                                    </label>

                                    <input
                                        type="tel"
                                        className="form-control"
                                        placeholder="Enter your mobile number"
                                    />

                                </div>


                                <div className="mb-3">

                                    <label className="form-label">
                                        Delivery Address
                                    </label>

                                    <textarea
                                        className="form-control"
                                        rows="4"
                                        placeholder="Enter your delivery address"
                                    ></textarea>

                                </div>


                                <div className="text-center">

                                    <button
                                        type="submit"
                                        className="btn btn-success btn-lg"
                                    >
                                        Confirm Order
                                    </button>

                                </div>

                            </form>

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
                    © 2026 All Rights Reserved.
                </p>

            </footer>

        </div>
    );
}

export default Order;