import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const [showMsg, setShowMsg] = useState(false);

  const handleCheckout = () => {
    clearCart();
    setShowMsg(true);
    setTimeout(() => setShowMsg(false), 4000);
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div>
      <h2>Cart</h2>
      {cart.map(p => (
        <div key={p.id}>
          <span>{p.title} - {p.qty} x ${p.price}</span>
          <button onClick={() => removeFromCart(p.id)}>Remove</button>
        </div>
      ))}
      <h3>Total: ${total.toFixed(2)}</h3>
      <button onClick={handleCheckout}>Checkout</button>
      {showMsg && <div className="popup">Order placed successfully!</div>}
    </div>
  );
}
