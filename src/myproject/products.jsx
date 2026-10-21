import "./style.css";
import { useNavigate, Link } from "react-router-dom";

function Products() {

    const navigate = useNavigate();
function addToCart(name, price) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find(
        (item) => item.name === name
    );

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    navigate("/cart");
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
                                <Link className="nav-link" to="/about">
                                    About
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" to="/products">
                                    Products
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">
                                    Contact
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/cart">
                                    🛒 Cart
                                </Link>
                            </li>

                        </ul>

                    </div>

                </div>
            </nav>


            <section className="py-5">

                <div className="container-fluid">

                    <h2 className="text-center mb-5">
                        Our Fresh Vegetables
                    </h2>

                    <div className="row g-4">


                        <div className="col-md-3">

                            <div className="card h-100 shadow">

                                <img
                                    src="https://i.pinimg.com/736x/56/9c/18/569c18ef66d564da98386891dc2b37a1.jpg"
                                    alt="Tomato"
                                />

                                <div className="card-body text-center">

                                    <h5>Tomato</h5>

                                    <p>Fresh Farm Tomatoes</p>

                                    <button
                                        className="btn btn-success"
                                        onClick={() => addToCart("Tomato", 40)}
                                    >
                                        Order Now
                                    </button>

                                </div>

                            </div>

                        </div>


                        <div className="col-md-3">

                            <div className="card h-100 shadow">

                                <img
                                    src="https://i.pinimg.com/736x/49/f4/ab/49f4abec79d57bff4014ae098576d508.jpg"
                                    alt="Onion"
                                />

                                <div className="card-body text-center">

                                    <h5>Onion</h5>

                                    <p>Premium Quality Onion</p>

                                    <button
                                        className="btn btn-success"
                                        onClick={() => addToCart("Onion", 50)}
                                    >
                                        Order Now
                                    </button>

                                </div>

                            </div>

                        </div>


                        <div className="col-md-3">

                            <div className="card h-100 shadow">

                                <img
                                    src="https://i.pinimg.com/1200x/0e/b5/a4/0eb5a4cffa8ea8b1eec1fbecd2cfa818.jpg"
                                    alt="Potato"
                                />

                                <div className="card-body text-center">

                                    <h5>Potato</h5>

                                    <p>Fresh Potato</p>

                                    <button
                                        className="btn btn-success"
                                        onClick={() => addToCart("Potato", 45)}
                                    >
                                        Order Now
                                    </button>

                                </div>

                            </div>

                        </div>


                        <div className="col-md-3">

                            <div className="card h-100 shadow">

                                <img
                                    src="https://i.pinimg.com/736x/4a/cc/5f/4acc5f804f89cd17ef7efe9d87c2e37b.jpg"
                                    alt="Carrot"
                                />

                                <div className="card-body text-center">

                                    <h5>Carrot</h5>

                                    <p>Healthy Carrots</p>

                                    <button
                                        className="btn btn-success"
                                        onClick={() => addToCart("Carrot", 60)}
                                    >
                                        Order Now
                                    </button>

                                </div>

                            </div>

                        </div>


                        <div className="col-md-3">

                            <div className="card h-100 shadow">

                                <img
                                    src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500"
                                    alt="Brinjal"
                                />

                                <div className="card-body text-center">

                                    <h5>Brinjal</h5>

                                    <p>Fresh Brinjal</p>

                                    <button
                                        className="btn btn-success"
                                        onClick={() => addToCart("Brinjal", 50)}
                                    >
                                        Order Now
                                    </button>

                                </div>

                            </div>

                        </div>


                        <div className="col-md-3">

                            <div className="card h-100 shadow">

                                <img
                                    src="https://i.pinimg.com/1200x/69/9c/d7/699cd782edaecef833f517d642eee38e.jpg"
                                    alt="Cabbage"
                                />

                                <div className="card-body text-center">

                                    <h5>Cabbage</h5>

                                    <p>Fresh Green Cabbage</p>

                                    <button
                                        className="btn btn-success"
                                        onClick={() => addToCart("Cabbage", 40)}
                                    >
                                        Order Now
                                    </button>

                                </div>

                            </div>

                        </div>


                        <div className="col-md-3">

                            <div className="card h-100 shadow">

                                <img
                                    src="https://i.pinimg.com/1200x/1b/28/fc/1b28fc2bd285925d482667e8986461b5.jpg"
                                    alt="Spinach"
                                />

                                <div className="card-body text-center">

                                    <h5>Spinach</h5>

                                    <p>Healthy Green Leaves</p>

                                    <button
                                        className="btn btn-success"
                                        onClick={() => addToCart("Spinach", 30)}
                                    >
                                        Order Now
                                    </button>

                                </div>

                            </div>

                        </div>


                        <div className="col-md-3">

                            <div className="card h-100 shadow">

                                <img
                                    src="https://i.pinimg.com/1200x/42/2d/cc/422dcc2744c313ff8f5a0c1ed9ebeecb.jpg"
                                    alt="Cucumber"
                                />

                                <div className="card-body text-center">

                                    <h5>Cucumber</h5>

                                    <p>Fresh Cucumber</p>

                                    <button
                                        className="btn btn-success"
                                        onClick={() => addToCart("Cucumber", 35)}
                                    >
                                        Order Now
                                    </button>

                                </div>

                            </div>

                        </div>


                    </div>

                </div>

            </section>


            <footer className="bg-success text-white text-center p-4">

                <h4>Palmurugan Fresh Vegetables</h4>

                <p>Farm Fresh Vegetables Delivered Daily</p>

                <p>© 2026 All Rights Reserved.</p>

            </footer>

        </div>
    );
}

export default Products;