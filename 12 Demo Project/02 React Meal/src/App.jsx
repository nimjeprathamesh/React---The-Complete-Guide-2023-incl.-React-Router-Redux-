import { useState } from "react";
import Cart from "./components/Cart/Cart.jsx";
import Header from "./components/Layout/Header.jsx";
import Meals from "./components/Meals/Meals.jsx";
import CartProvider from "./store/CartProvider.jsx";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  
  function showCartHandler() {
    setCartIsShown(true);
  }

  function hideCartHandler() {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler}  />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
