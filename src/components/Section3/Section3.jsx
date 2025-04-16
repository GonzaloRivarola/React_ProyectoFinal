import React from 'react';
import './Section3.css';
import ItemListContainer from '../ItemListContainer/ItemListContainer';

const Section3 = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="section3">
      <h2>Zermatt Collection - Limited Edition</h2>
      <ItemListContainer />
    </div>
  );
});

export default Section3;
