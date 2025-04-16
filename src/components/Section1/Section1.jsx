
import React, { useRef, useEffect, useState } from 'react';
import './Section1.css'

const Section1 = () => {
  return (
    <div className="section">
    <video
      src="https://res.cloudinary.com/duyofvkt2/video/upload/v1744765392/Sin_t%C3%ADtulo_hpdj5o.mp4"
      autoPlay
      muted
      loop
      playsInline
      className="video-loop"
    >
      Tu navegador no soporta videos HTML5.
    </video>
    </div>


  );
};


export default Section1;
