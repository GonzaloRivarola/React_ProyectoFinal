
import React from 'react';
import './Section2.css';
import deluxe from '../img/logos/deluxe.png';
import { Link } from "react-router-dom"; 

const Section2 = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="section2">
      <h1>Stilisse Edition</h1>
      {}
      <Link to="/products">
        <button>See more</button>
      </Link>
      <img src={deluxe} alt="Deluxe" className="deluxeImg" />
    </div>
  );
});

export default Section2;
