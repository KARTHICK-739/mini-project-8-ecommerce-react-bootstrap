import React, { useState } from "react";
import NavBar from "./components/NavBar";
import ProductGrid from "./components/ProductGrid";
import CartModal from "./components/CartModal";
import products from "./products";

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

  return (
    <div>
      <NavBar
        cartCount={cartItems.reduce((total, item) => total + item.quantity, 0)}
        onCartClick={() => setShowCart(true)}
      />
      <ProductGrid products={products} addToCart={addToCart} />
      <CartModal
        show={showCart}
        onHide={() => setShowCart(false)}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
      />
    </div>
  );
}

export default App;
