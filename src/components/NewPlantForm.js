import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {

  //set key value states as empty
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");

  //submit click event handler
  function handleSubmit(e) {
    //prevent default
    e.preventDefault();

    //fetch plants
    fetch('http://localhost:6001/plants', {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },

      //return form values from json
      body: JSON.stringify({
        name: name,
        image: image,
        price: price,
      }),
    })
      .then((r) => r.json())
      .then((newPlant) => onAddPlant(newPlant));
  }



  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder={"Plant name"} />
        <input type="text"
          name="image"
          onChange={(e) => setImage(e.target.value)}
          value={image}
          placeholder="Image URL" />
        <input type="number"
          name="price"
          onChange={(e) => setPrice(parseInt(e.target.value))}
          value={price}
          placeholder="Price" />
        <button type="submit" >Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
