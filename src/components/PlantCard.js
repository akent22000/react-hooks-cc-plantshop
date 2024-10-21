import React from "react";

function PlantCard({ plant, onInStock, onOutOfStock }) {

  function handleStockButtonClick() {
    onInStock(plant)
    console.log("clicked item:", plant)
  }

  function handleStockButtonClick2() {
    onOutOfStock(plant)
    console.log("clicked item:", plant)
  }

  //
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {plant.inStock == false ? (
        <button id={plant.id} className="primary" onClick={handleStockButtonClick}>In Stock</button>
      ) : (
        <button id={plant.id} onClick={handleStockButtonClick2}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
