import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
const API = 'http://localhost:6001/plants'


//pass plants data to PlantList
function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState('')

  // useEffect(() => {}, []);
  useEffect(() => {
    fetch(`${API}`)
      .then((r) => r.json())
      .then(data => {
        const allPlants = data.map(plants => {
          //copied/created new array data and added key value pair 
          return { ...plants, inStock: false }
        })
        //redefined plants to new array
        setPlants(allPlants)
      })
  }, [])

  //when i click submit on form, need to pass a callback function as a prop
  //pass this back to NewPlantForm
  function handleAddNewPlant(newPlant) {
    //create/copy plants array, 
    //name new/copy of plants data, define new array (newPlant)
    //set plants data to new array newPlant
    //new array newPlant incudles the submitted newPlant
    setPlants([...plants, newPlant])
  }

  function handleInStock(button) {
    //when i click in stock button, change inStock state to false
    //render "Out of Stock" text
    const inStockPlant = plants.map(plant => plant.id == button.id ? { ...plant, inStock: true } : plant)
    setPlants(inStockPlant)
  }

  function handleOutOfStock(button) {
    const inStockPlant = plants.map(plant => plant.id == button.id ? { ...plant, inStock: false } : plant)
    setPlants(inStockPlant)
  }

  const filteredPlants = plants
    .filter(plant => plant.name.toLowerCase().includes(search.toLowerCase()));


  function handleDeleteItem(deletedItem) {
    const updatedItems = plants.filter((plant) => plant.id !== deletedItem.id);
    setPlants(updatedItems);
  }


  function updatePrice(updatedPlantPrice) {
    const updatedPlantPrices = plants.map((plant) => {
      if (plant.id === updatedPlantPrice.id) {
        return updatedPlantPrice
      } else {
        return plant
      }
    })
    setPlants(updatedPlantPrices)
  }


  return (
    <main>
      <NewPlantForm
        onAddPlant={handleAddNewPlant}
      />
      <Search
        onSearchChange={setSearch}
        search={search}
      />
      <PlantList
        plants={filteredPlants}
        onInStock={handleInStock}
        onOutOfStock={handleOutOfStock}
        onDeleteItem={handleDeleteItem}
        updatePrice={updatePrice} />
    </main>
  );
}

export default PlantPage;
