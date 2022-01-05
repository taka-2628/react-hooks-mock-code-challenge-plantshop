import React, { useState }  from "react";

function PlantCard( {plant} ) {
  const { name, image, price} = plant

  const [isInStock, setIsInStock] = useState(true)  

  function handleInOutStockClick(){
    setIsInStock(!isInStock)
  }

  return (
    <li className="card">
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button className="primary" onClick={handleInOutStockClick}>In Stock</button>
      ) : (
        <button onClick={handleInOutStockClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
