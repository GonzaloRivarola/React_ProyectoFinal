
import React from 'react';
import { useCart } from '../context/CartContext';
import Swal from 'sweetalert2';
import './CartPage.css';

const CartPage = () => {
  const { cart, removeFromCart, emptyCart, checkout } = useCart();

  const totalPrice = cart.reduce((acc, item) => {
    const price = parseFloat(item.Price);
    return isNaN(price) ? acc : acc + price * item.quantity;
  }, 0);

  const handleCheckout = () => {
    const orderId = checkout(); 
    Swal.fire({
      title: '¡Compra realizada con éxito!',
      text: `Tu ID de compra es: ${orderId}`,
      icon: 'success',
      confirmButtonText: 'Aceptar',
    });
  };

  return (
    <div className="cart-page">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <div className="cart-item">
                  <img src={item.Image} alt={item.Name} />
                  <div>
                    <h3>{item.Name}</h3>
                    <p>Precio: ${parseFloat(item.Price).toFixed(2)}</p>
                    <p>Cantidad: {item.quantity}</p>
                    <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <p>Total: ${totalPrice.toFixed(2)}</p>
            <button onClick={emptyCart}>Vaciar Carrito</button>
            <button onClick={handleCheckout}>Finalizar Compra</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
