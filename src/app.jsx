import React, { useState, useEffect } from "react";
import "./app.css";
import Navbar from "./components/navbar";
import VideoList from "./components/video_list/video_list";

function App() {
  const [videos, setVideos] = useState([]);
  const [name, setName] = useState('');
  
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDyq__QSQktK4TqBUxybuPDLYC9fa1GA90", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);
  return (
    <>
      <Navbar />
      <VideoList videos={videos} />
    </>
  );
}

export default App;
