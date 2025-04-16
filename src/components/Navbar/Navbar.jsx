
import { BsCartPlusFill } from "react-icons/bs";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../img/logos/logo_black.png";

function Navbar() {
  const { cart } = useCart();

  return (
    <header className="navbar-container">
      <nav className="navbar">
        <div className="logo_container">
        <Link to="/"><img src={logo} alt="Logo" className="navbar-logo" /></Link>
        </div>

        <ul className="nav-options">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <div className="cart-icon">
          <Link to="/cart" aria-label="Ir al carrito de compras">
            <BsCartPlusFill />
            <span className="cart-badge">{cart.length}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
