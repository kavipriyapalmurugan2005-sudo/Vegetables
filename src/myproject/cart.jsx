
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Cart() {
    const navigate = useNavigate();

    const [cart, setCart] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem("cart")) || [];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    function increase(name) {
        setCart(currentCart =>
            currentCart.map(item =>
                item.name === name
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    }

    function decrease(name) {
        setCart(currentCart =>
            currentCart.map(item =>
                item.name === name
                    ? { ...item, quantity: Math.max(1, item.quantity - 1) }
                    : item
            )
        );
    }

    function removeItem(name) {
        setCart(currentCart =>
            currentCart.filter(item => item.name !== name)
        );
    }

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const totalItems = cart.reduce(
        (sum, item) => sum + item.quantity,
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
        <div className="cart-page">
            <nav className="navbar navbar-expand-lg cart-navbar">
                <div className="container">
                    <Link className="navbar-brand cart-brand" to="/">
                        🥬 Palmurugan <span>Fresh</span>
                    </Link>

                    <div className="navbar-nav ms-auto flex-row">
                        <Link className="nav-link cart-nav-link" to="/">
                            Home
                        </Link>
                        <Link className="nav-link cart-nav-link" to="/products">
                            Products
                        </Link>
                        <Link className="nav-link cart-nav-link cart-nav-active" to="/cart">
                            🛒 Cart
                        </Link>
                    </div>
                </div>
            </nav>

            <main className="cart-main">
                <div className="container">
                    <div className="cart-heading">
                        <span className="cart-eyebrow">YOUR FRESH PICKS</span>
                        <h1>Your Shopping <span>Cart</span></h1>
                        <p>Review your vegetables before placing your order.</p>
                    </div>

                    {cart.length > 0 ? (
                        <div className="row g-4 align-items-start">
                            <div className="col-lg-8">
                                <div className="cart-items-panel">
                                    <div className="cart-panel-heading">
                                        <h2>Cart Items</h2>
                                        <span>{totalItems} items</span>
                                    </div>

                                    {cart.map(item => (
                                        <article className="cart-item" key={item.name}>
                                            <div className="cart-item-icon">
                                                🥬
                                            </div>

                                            <div className="cart-item-info">
                                                <span className="cart-item-label">
                                                    FRESH VEGETABLE
                                                </span>
                                                <h3>{item.name}</h3>
                                                <p>₹{item.price} per kg</p>

                                                <button
                                                    className="cart-remove-btn"
                                                    onClick={() => removeItem(item.name)}
                                                >
                                                    <span>×</span> Remove
                                                </button>
                                            </div>

                                            <div className="cart-item-controls">
                                                <div className="cart-quantity">
                                                    <button
                                                        type="button"
                                                        aria-label={`Decrease ${item.name} quantity`}
                                                        onClick={() => decrease(item.name)}
                                                    >
                                                        −
                                                    </button>

                                                    <span>{item.quantity}</span>

                                                    <button
                                                        type="button"
                                                        aria-label={`Increase ${item.name} quantity`}
                                                        onClick={() => increase(item.name)}
                                                    >
                                                        +
                                                    </button>
                                                </div>

                                                <strong className="cart-item-subtotal">
                                                    ₹{item.price * item.quantity}
                                                </strong>
                                                <span className="cart-subtotal-label">
                                                    Subtotal
                                                </span>
                                            </div>
                                        </article>
                                    ))}

                                    <Link to="/products" className="cart-back-link">
                                        <span>←</span> Continue Shopping
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <aside className="cart-summary">
                                    <span className="cart-eyebrow">ORDER OVERVIEW</span>
                                    <h2>Order Summary</h2>

                                    <div className="cart-summary-row">
                                        <span>Items</span>
                                        <strong>{totalItems}</strong>
                                    </div>

                                    <div className="cart-summary-row">
                                        <span>Subtotal</span>
                                        <strong>₹{total}</strong>
                                    </div>

                                    <div className="cart-summary-row">
                                        <span>Delivery</span>
                                        <strong className="cart-free">To be confirmed</strong>
                                    </div>

                                    <div className="cart-summary-divider"></div>

                                    <div className="cart-total-row">
                                        <span>Total Amount</span>
                                        <strong>₹{total}</strong>
                                    </div>

                                    <button
                                        className="cart-checkout-btn"
                                        onClick={placeOrder}
                                    >
                                        Place Order <span>→</span>
                                    </button>

                                    <p className="cart-summary-note">
                                        🌿 Fresh vegetables, selected with care.
                                    </p>
                                </aside>

                                <div className="cart-quality-note">
                                    <span>💚</span>
                                    <p>
                                        <strong>Freshness matters</strong>
                                        <br />
                                        Thank you for shopping with us.
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="cart-empty">
                            <div className="cart-empty-icon">🛒</div>
                            <h2>Your cart is waiting for freshness!</h2>
                            <p>You haven't added any vegetables yet. Explore our fresh selection.</p>
                            <Link to="/products" className="cart-checkout-btn cart-empty-btn">
                                Explore Vegetables <span>→</span>
                            </Link>
                        </div>
                    )}
                </div>
            </main>

            <footer className="cart-footer">
                <div className="container">
                    <Link to="/" className="cart-footer-brand">
                        🥬 Palmurugan Fresh Vegetables
                    </Link>
                    <p>Fresh vegetables delivered to your doorstep.</p>
                    <div className="cart-footer-line"></div>
                    <small>© 2026 Palmurugan Fresh Vegetables. All rights reserved.</small>
                </div>
            </footer>
        </div>
    );
}

export default Cart;