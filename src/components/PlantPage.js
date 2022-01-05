import React, { useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [filterBy, setFilterBy] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((response) => setPlants(response))
  }, [])

  function handleAddPlant(newPlant){
    setPlants([...plants, newPlant])
  }

  function handleSeach(search){
    setFilterBy(search)
  }

  
  const filteredPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(filterBy.toLowerCase())
  })

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant}/>
      <Search onSearch={handleSeach} filterBy={filterBy}/>
      <PlantList plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
