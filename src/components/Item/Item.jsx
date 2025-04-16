
import React from "react";
import { Link } from "react-router-dom"; 
import { useCart } from "../../context/CartContext"; 

const Item = ({ producto }) => {
  const { cart, addToCart, removeFromCart } = useCart();
  const isInCart = cart.some((item) => item.id === producto.id);

  const handleClick = () => {
    if (isInCart) {
      removeFromCart(producto.id);
    } else {
      addToCart(producto);
    }
  };

  return (
    <div className="item-card">
      <img src={producto.Image} alt={producto.Name} className="item-image" />
      <div className="item-details">
        <h3>{producto.Name}</h3>
        <p>{producto.Description}</p>
        <p>${producto.Price}</p>
        <p>Stock disponible: {producto.stock}</p>

        <div className="buttons">
          <button onClick={handleClick}>
            {isInCart ? "Eliminar del carrito" : "Agregar al carrito"}
          </button>

          {}
          <Link to={`/producto/${producto.id}`} className="btn-detail">
            Ver Detalles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
