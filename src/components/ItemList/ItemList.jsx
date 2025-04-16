
import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ productos }) => {
  return (
    <div className="item-list-container">
      {productos.length > 0 ? (
        productos.map((producto) => (
          <Item key={producto.id} producto={producto} />
        ))
      ) : (
        <p>No hay productos disponibles</p>
      )}
    </div>
  );
};

export default ItemList;
