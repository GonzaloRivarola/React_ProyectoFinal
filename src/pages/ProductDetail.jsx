// src/pages/ProductDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { useCart } from "../context/CartContext";
import ItemCount from "../components/ItemCount/ItemCount"; 

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart, cart, updateQuantity } = useCart();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [addedToCart, setAddedToCart] = useState(false);
  const [quantity, setQuantity] = useState(1); 

  useEffect(() => {
    if (id) {
      const getProductDetails = async () => {
        try {
          const docRef = doc(db, "Products", id);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setProducto({ id: docSnap.id, ...docSnap.data() });
          } else {
            console.log("Producto no encontrado");
          }
        } catch (error) {
          console.error("Error al cargar el producto: ", error);
        } finally {
          setLoading(false);
        }
      };

      getProductDetails();
    }
  }, [id]);

  const handleAddToCart = (quantity) => {
    addToCart(producto, quantity);
    setAddedToCart(true);
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity > 0 && newQuantity <= producto.stock) {
      setQuantity(newQuantity);
      if (addedToCart) {
        updateQuantity(producto.id, newQuantity); 
      }
    }
  };

  if (loading) return <div>Cargando...</div>;
  if (!producto) return <div>No se encontró el producto</div>;

  const existingProduct = cart.find((item) => item.id === producto.id);

  return (
    <div>
      <h2>{producto.Name}</h2>
      <img src={producto.Image} alt={producto.Name} />
      <p>{producto.Description}</p>
      <p>Precio: ${producto.Price}</p>
      <p>Stock disponible: {producto.stock}</p>

      {!addedToCart ? (
        <ItemCount
          stock={producto.stock}
          onAddToCart={handleAddToCart}
          quantity={quantity}
          setQuantity={handleQuantityChange}
        />
      ) : (
        <div>
          <p>Producto agregado al carrito</p>
          <button onClick={() => setAddedToCart(false)}>Seguir comprando</button>
          <button onClick={() => updateQuantity(producto.id, quantity)}>Actualizar cantidad</button>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
