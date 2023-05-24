import React from "react";
import './Card.css';

const Card = ({children, className}) => {         //props destructuring the props
  return (
    <>
    <article className={'card ${className}'}>
        {children}
    </article>
    
    </>
    
  );
};


export default Card;
