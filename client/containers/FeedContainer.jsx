import React from "react";
import FeedCard from '../components/FeedCard.jsx'
import NavBar from "../components/NavBar.jsx";


const FeedContainer = () => {
  
  // iterate by date through database, render a feed card for each of entries
  return (
    <>
      <p>Scrolling feed</p>
      <NavBar />
      <FeedCard />
    </>
  )
}

export default FeedContainer;