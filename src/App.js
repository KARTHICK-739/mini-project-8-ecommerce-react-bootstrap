import React, { useState } from "react";
// To this
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ProductGrid from "./components/ProductGrid";
import ProductScreen from "./components/ProductScreen";
import CartModal from "./components/CartModal";
import Footer from "./components/Footer";
import SignupScreen from "./screens/SignupScreen";
import products from "./products";
import NavBar from "./components/NavBar";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Router>
      <NavBar cartCount={cartCount} onCartClick={() => setShowCart(true)} />

      <main style={{ minHeight: "80vh" }}>
        <Routes>
          <Route
            path="/"
            element={<ProductGrid products={products} addToCart={addToCart} />}
          />
          <Route
            path="/product/:id"
            element={<ProductScreen addToCart={addToCart} />}
          />
          <Route path="/signup" element={<SignupScreen />} />
        </Routes>
      </main>

      <CartModal
        show={showCart}
        onHide={() => setShowCart(false)}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
      />

      <Footer />
    </Router>
  );
}

export default App;
