import './App.css';
import foods from './foods.json';
import React, { useState, useEffect } from 'react';
import Foodbox from './components/Foodbox';
import { Row, Col } from 'antd';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [food, setFoods] = useState(foods);
  const [foodData, setFoodData] = useState(foods);
  const [show, setShow] = useState(true);

  const addnewFood = (newFood) => {
    const updatedFoods = [...food, newFood];
    const updatedFoodsData = [...foodData, newFood];

    setFoods(updatedFoods);
    setFoodData(updatedFoodsData);
  };

  const searchFoods = (str) => {
    let searchedFoods = foodData.filter((food) => {
      return food.name.toLowerCase().includes(str.toLowerCase());
    });
    setFoods(searchedFoods);
  };

  const deleteFood = (foodName) => {
    const filteredFood = foodData.filter((food) => {
      return food.name !== foodName;
    });
    setFoods(filteredFood);
    setFoodData(filteredFood);
  };

  return (
    <div className="App">
      <Search searchFoods={searchFoods} />

      <button onClick={() => setShow(!show)}>
        {show ? 'Hide Form' : 'Add New Food'}
      </button>
      {show && <AddFoodForm addFood={addnewFood} />}

      <Row >
        {food.length === 0
          ? 'No more content to show'
          : food.map((element) => {
              return <Foodbox food={element} deleteFood={deleteFood} />;
            })}
      </Row>
    </div>
  );
}

export default App;
