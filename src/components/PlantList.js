import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onInStock, onOutOfStock, onAddPlant, onDeleteItem, updatePrice }) {

  //map here to define plant and pass plant to PlantCard
  const plantsDisplay = plants.map((plant) => (
    <PlantCard
      key={plant.id}
      id={plant.id}
      plant={plant}
      onInStock={onInStock}
      onOutOfStock={onOutOfStock}
      onAddPlant={onAddPlant}
      onDeleteItem={onDeleteItem}
      updatePrice={updatePrice}
    />
  ));

  return (
    <ul className="cards">{plantsDisplay}</ul>
  );
}

export default PlantList;
