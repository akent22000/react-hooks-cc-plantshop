import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onInStock, onOutOfStock, onAddPlant }) {

  //map here to define plant and pass plant to PlantCard
  const plantsDisplay = plants.map((plant) => (
    <PlantCard
      key={plant.id}
      plant={plant}
      onInStock={onInStock}
      onOutOfStock={onOutOfStock}
      onAddPlant={onAddPlant}

    />
  ));

  return (
    <ul className="cards">{plantsDisplay}</ul>
  );
}

export default PlantList;
