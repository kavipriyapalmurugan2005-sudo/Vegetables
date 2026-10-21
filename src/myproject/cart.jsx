
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Cart() {
    const navigate = useNavigate();

    const [cart, setCart] = useState(() => {
        return JSON.parse(localStorage.getItem("cart")) || [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    function increase(name) {
        setCart(cart.map(item =>
            item.name === name
                ? { ...item, quantity: item.quantity + 1 }
                : item
        ));
    }

    function decrease(name) {
        setCart(cart.map(item =>
            item.name === name
                ? { ...item, quantity: Math.max(1, item.quantity - 1) }
                : item
        ));
    }

    function removeItem(name) {
        setCart(cart.filter(item => item.name !== name));
    }

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    function placeOrder() {
        navigate("/contact", {
            state: {
                products: cart,
                total: total
            }
        });
    }

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
                        <Link className="nav-link active" to="/cart">Cart 🛒</Link>
                    </div>
                </div>
            </nav>

            <section className="container py-5">
                <h2 className="text-center mb-5">Your Cart 🛒</h2>

                {cart.length > 0 ? (
                    <>
                        <div className="row justify-content-center">
                            {cart.map(item => (
                                <div className="col-md-6 mb-4" key={item.name}>
                                    <div className="card shadow p-4">
                                        <h3 className="text-success">
                                            {item.name}
                                        </h3>

                                        <p>Fresh quality {item.name}</p>
                                        <h5>Price: ₹{item.price}</h5>

                                        <div className="d-flex align-items-center mt-3">
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => decrease(item.name)}
                                            >
                                                -
                                            </button>

                                            <h5 className="mx-4 mb-0">
                                                {item.quantity}
                                            </h5>

                                            <button
                                                className="btn btn-success"
                                                onClick={() => increase(item.name)}
                                            >
                                                +
                                            </button>

                                            <button
                                                className="btn btn-outline-danger ms-3"
                                                onClick={() => removeItem(item.name)}
                                            >
                                                Remove
                                            </button>
                                        </div>

                                        <h5 className="mt-3">
                                            Subtotal: ₹{item.price * item.quantity}
                                        </h5>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-3">
                            <h3 className="text-success">
                                Total Amount: ₹{total}
                            </h3>

                            <button
                                className="btn btn-success me-2 mt-2"
                                onClick={placeOrder}
                            >
                                Place Order
                            </button>

                            <Link
                                to="/products"
                                className="btn btn-warning mt-2"
                            >
                                Continue Shopping
                            </Link>
                        </div>
                    </>
                ) : (
                    <div className="text-center">
                        <h4>Your cart is empty</h4>

                        <Link to="/products" className="btn btn-success mt-3">
                            Continue Shopping
                        </Link>
                    </div>
                )}
            </section>

            <footer className="bg-success text-white text-center p-4">
                <h4>Palmurugan Fresh Vegetables</h4>
                <p>Fresh Vegetables Delivered to Your Doorstep</p>
                <p>© 2026 All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default Cart;
