import "./cart-dropdown.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import React from "react";

export default function CartDropdown() {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems, " is cart items");
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => {
          return <CartItem key={item.id} cartItem={item} />;
        })}
        <Button> CHECKOUT</Button>
      </div>
    </div>
  );
}
