import React, { useState } from "react";

function PlantCard({ plant, onInStock, onOutOfStock, onDeleteItem, updatePrice }) {
  const { name, image, price, id } = plant;
  const [stock, setStock] = useState(true);

  function handleStock() {
    setStock(!stock)
  }

  function handleDeleteClick() {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onDeleteItem(plant));
  }

  function handlePriceClick() {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "price": price + 1
      })
    })
      .then(r => r.json())
      .then((updatePlantPrice) => updatePrice(updatePlantPrice))
  }


  // function handleStockButtonClick() {
  //   onInStock(plant)
  //   console.log("clicked item:", plant)
  // }

  // function handleStockButtonClick2() {
  //   onOutOfStock(plant)
  //   console.log("clicked item:", plant)
  // }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>

      {/* {plant.inStock == false ? (
        <button className="primary" onClick={handleStockButtonClick}>In Stock</button>
      ) : (
        <button onClick={handleStockButtonClick2}>Out of Stock</button>
      )} */}


      {stock ? (
        <button className="primary"
          onClick={handleStock}
        >In Stock</button>
      ) : (
        <button
          onClick={handleStock}
        >Out of Stock</button>
      )}

      <button onClick={handleDeleteClick}>Delete Plant</button>
      <button onClick={handlePriceClick}>Increase Price</button>
    </li>
  );
}

export default PlantCard;
