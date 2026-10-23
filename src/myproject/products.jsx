
import "./style.css";
import { useNavigate, Link } from "react-router-dom";

function Products() {
    const navigate = useNavigate();

    const vegetables = [
        {
            name: "Tomato",
            description: "Juicy, farm-fresh tomatoes",
            price: 40,
            image: "https://i.pinimg.com/736x/56/9c/18/569c18ef66d564da98386891dc2b37a1.jpg"
        },
        {
            name: "Onion",
            description: "Fresh and flavourful onions",
            price: 50,
            image: "https://i.pinimg.com/736x/49/f4/ab/49f4abec79d57bff4014ae098576d508.jpg"
        },
        {
            name: "Potato",
            description: "Quality potatoes for every meal",
            price: 45,
            image: "https://i.pinimg.com/1200x/0e/b5/a4/0eb5a4cffa8ea8b1eec1fbecd2cfa818.jpg"
        },
        {
            name: "Carrot",
            description: "Crunchy and naturally sweet",
            price: 60,
            image: "https://i.pinimg.com/736x/4a/cc/5f/4acc5f804f89cd17ef7efe9d87c2e37b.jpg"
        },
        {
            name: "Brinjal",
            description: "Fresh brinjal for homemade dishes",
            price: 50,
            image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500"
        },
        {
            name: "Cabbage",
            description: "Crisp and fresh green cabbage",
            price: 40,
            image: "https://i.pinimg.com/1200x/69/9c/d7/699cd782edaecef833f517d642eee38e.jpg"
        },
        {
            name: "Spinach",
            description: "Nutritious and leafy greens",
            price: 30,
            image: "https://i.pinimg.com/1200x/1b/28/fc/1b28fc2bd285925d482667e8986461b5.jpg"
        },
        {
            name: "Cucumber",
            description: "Cool, crisp and refreshing",
            price: 35,
            image: "https://i.pinimg.com/1200x/42/2d/cc/422dcc2744c313ff8f5a0c1ed9ebeecb.jpg"
        }
    ];

    function addToCart(name, price) {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingProduct = cart.find(item => item.name === name);

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({
                name,
                price,
                quantity: 1
            });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        navigate("/cart");
    }

    return (
        <div className="products-page">
            <nav className="navbar navbar-expand-lg products-navbar">
                <div className="container">
                    <Link className="navbar-brand products-brand" to="/">
                        <span className="products-brand-icon">🥬</span>
                        <span>Palmurugan<span className="products-brand-light"> Fresh</span></span>
                    </Link>

                    <button
                        className="navbar-toggler products-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#productsMenu"
                        aria-controls="productsMenu"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="productsMenu">
                        <ul className="navbar-nav ms-auto align-items-lg-center">
                            <li className="nav-item">
                                <Link className="nav-link products-nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link products-nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link products-nav-link products-active" to="/products">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link products-nav-link" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link products-cart-link" to="/cart">🛒 My Cart</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <header className="products-hero">
                <div className="container">
                    <div className="products-hero-content">
                        <span className="products-eyebrow">FRESH FROM FARM TO HOME</span>
                        <h1>Good Food Starts<br />with <span>Fresh Vegetables.</span></h1>
                        <p>Discover handpicked freshness for your everyday meals, delivered with care.</p>
                        <a href="#vegetable-list" className="products-explore-btn">
                            Explore Vegetables <span>↓</span>
                        </a>
                    </div>
                    <div className="products-hero-note">
                        <span>🌿</span>
                        <div>
                            <strong>Freshness you can trust</strong>
                            <p>Carefully selected for your family</p>
                        </div>
                    </div>
                </div>
            </header>

            <main className="products-main" id="vegetable-list">
                <div className="container">
                    <div className="products-heading">
                        <div>
                            <span className="products-eyebrow">OUR FARM SELECTION</span>
                            <h2>Fresh Vegetables</h2>
                            <p>Everyday essentials, picked with care.</p>
                        </div>
                        <span className="products-count">{vegetables.length} fresh choices</span>
                    </div>

                    <div className="row g-4">
                        {vegetables.map((vegetable) => (
                            <div className="col-12 col-sm-6 col-lg-3" key={vegetable.name}>
                                <article className="products-card">
                                    <div className="products-image-wrap">
                                        <img
                                            src={vegetable.image}
                                            alt={vegetable.name}
                                            className="products-image"
                                            loading="lazy"
                                        />
                                        <span className="products-fresh-tag">🌿 Fresh Pick</span>
                                    </div>

                                    <div className="products-card-body">
                                        <span className="products-card-category">FRESH VEGETABLE</span>
                                        <h3>{vegetable.name}</h3>
                                        <p>{vegetable.description}</p>

                                        <div className="products-card-bottom">
                                            <div className="products-price">
                                                <strong>₹{vegetable.price}</strong>
                                                <span>/ kg</span>
                                            </div>

                                            <button
                                                className="products-add-btn"
                                                onClick={() => addToCart(vegetable.name, vegetable.price)}
                                            >
                                                <span>+</span> Add
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>

                    <div className="products-trust-strip">
                        <div><span>🌱</span><p><strong>Fresh Selection</strong><br />Carefully picked produce</p></div>
                        <div><span>💚</span><p><strong>Quality First</strong><br />Freshness in every order</p></div>
                        <div><span>🛒</span><p><strong>Easy Ordering</strong><br />Simple and convenient shopping</p></div>
                    </div>
                </div>
            </main>

            <footer className="products-footer">
                <div className="container">
                    <Link to="/" className="products-footer-brand">🥬 Palmurugan Fresh Vegetables</Link>
                    <p>Bringing freshness and goodness to your family.</p>
                    <div className="products-footer-line"></div>
                    <p className="products-copyright">© 2026 Palmurugan Fresh Vegetables. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Products;