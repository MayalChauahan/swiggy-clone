import React from 'react';
import './App.css';
import Header from './components/Header';
import Category from './components/Category';
import TopRest from './components/TopRest';
import OnlineFoodDelivery from './components/OnlineFoodDelivery';
import BestPlaces from './components/BestPlaces';
import NearMe from './components/NearMe';
import ExploreRestaurants from './components/ExploreRestaurants';


const App = () => {
  return (
    <>
      <Header />
      <Category />
      <TopRest />
      <OnlineFoodDelivery />
      <BestPlaces />
      <NearMe />
      <ExploreRestaurants />
    </>
  )
}

export default App