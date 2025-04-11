import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function Header() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/cart">Cart ({cart.length})</Link>
      <button onClick={logout}>Logout</button>
    </header>
  );
}
