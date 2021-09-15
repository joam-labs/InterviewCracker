import React, { useState, useEffect } from "react";
import FeedCard from '../components/FeedCard.jsx'
import NavBar from "../components/NavBar.jsx";
import axios from 'axios';

const FeedContainer = () => {
  const [feedItems, setFeedItems] = useState('')
  let feedArray = [];

  useEffect(() => {
    axios.get('/api/cards') // to this endpoint, we need modified query to include company name, team, role
      .then(data => setFeedItems(data))
      .catch(error => console.log('Error in FeedContainer useEffect: ', error))
    }, [])
  
  const data = feedItems.data
  if(data) feedArray = data.map((item, i) => <FeedCard key = {i} everything = {item}/>)
        // const render = feedItems.map(el => {
  //   return <FeedCard />
  // })
  // iterate by date through database, render a feed card for each of entries
  return (
    <>
      <NavBar />
      <div className="wrapper__feed">
        {feedArray}
      </div>
    </>
  )
}

export default FeedContainer;
