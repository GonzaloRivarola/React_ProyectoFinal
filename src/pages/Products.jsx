// src/pages/Products.jsx
import React, { useState, useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase/config'; 
import ItemList from '../components/ItemList/ItemList';
import ItemCount from '../components/ItemCount/ItemCount'; // Importamos ItemCount
import { useCart } from '../context/CartContext';

const Products = () => {
  const { addToCart } = useCart();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'Products'));
        const productosData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProductos(productosData);
        setFilteredProducts(productosData);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      } finally {
        setLoading(false);
      }
    };

    obtenerProductos();
  }, []);

  const handleFilterChange = (e) => {
    const selectedFilter = e.target.value;
    setFilter(selectedFilter);
  };

  useEffect(() => {
    let filtered;
    if (filter === 'greater') {
      filtered = productos.filter(product => product.Price > 100);
    } else if (filter === 'less') {
      filtered = productos.filter(product => product.Price < 100);
    } else {
      filtered = productos;
    }
    setFilteredProducts(filtered);
  }, [filter, productos]);

  const handleAddToCart = (quantity, productId) => {
    const product = productos.find(product => product.id === productId);
    addToCart(product, quantity);
  };

  return (
    <div className="products-container">
      <h2>Productos</h2>

      {/* Filtros de precio */}
      <div>
        <label>Filtrar por precio:</label>
        <select onChange={handleFilterChange} value={filter}>
          <option value="">Todos</option>
          <option value="greater">Mayor a 100</option>
          <option value="less">Menor a 100</option>
        </select>
      </div>

      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <div className="product-list">
          {filteredProducts.map((producto) => (
            <div key={producto.id} className="product-card">
              <h3>{producto.Name}</h3>
              <img src={producto.Image} alt={producto.Name} className="product-image" />
              <p>{producto.Description}</p>
              <p>Precio: ${producto.Price}</p>
              <p>Stock disponible: {producto.stock}</p>
              
              {/* Agregar ItemCount aquí */}
              <ItemCount
                stock={producto.stock}
                productId={producto.id}
                onAddToCart={handleAddToCart}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
