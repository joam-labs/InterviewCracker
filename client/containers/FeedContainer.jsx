import React, { useState, useEffect } from "react";
import FeedCard from '../components/FeedCard.jsx'
import NavBar from "../components/NavBar.jsx";
import axios from 'axios';

const FeedContainer = () => {
  
  // hello my internet is slwo again :'(

  useEffect(async () => {
    await axios.get('/api/cards')
      .then(data => console.log('Cards from FeedContainer: ', data) )
      .catch(error => console.log('Error in FeedContainer useEffect: ', error))
  }, [])

  // const render = boo.map(el => {
  //   return <FeedCard />
  // })
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