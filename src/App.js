import React, { useState, useEffect } from 'react';
import './App.css';
import youtube from "./api/youtube";
import { VideoDetail, VideoList, SearchBar } from './components';
import { Grid } from '@material-ui/core';

function App() {
  const [videos , setVideos] = useState([]);
  const [selectedVideo , setSelectedVideo] = useState({});

  const onSubmit = async (searchTerm) => {
    const { data: { items: videos } } = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: 'AIzaSyBdKmBRdGxsjAb5TuFm0-0arQIbHJa479M',
        q: searchTerm,
      }
    });

    setVideos(videos);
    setSelectedVideo(videos[0])
  }

  useEffect(() => {
    const getData = async () =>{
      const { data: { items: videos } } = await youtube.get("search", {
        params: {
          part: "snippet",
          maxResults: 5,
          key: 'AIzaSyBdKmBRdGxsjAb5TuFm0-0arQIbHJa479M',
          q: 'reactjs',
        }
      });
      setVideos(videos);
      setSelectedVideo(videos[0])
    }
    getData()
   
  }, []);

  const handleSelectVideo = (video) => {
    setSelectedVideo(video)
    console.log(video)
  }

  return (  
  <Grid style={{ justifyContent: "center" }} container>
    <Grid item xs={10} >
      <img src="https://cdn.pixabay.com/photo/2015/09/15/22/47/logo-941916_960_720.png"
            style={{width: "250px"}} alt="thumbnail1" />
    </Grid>
    <Grid item xs={10}>
      <Grid container spacing={10} justify="center">
        <Grid item md={7} sl={10} xs={12}>
          <SearchBar onSubmit={onSubmit}/>
        </Grid>
        <Grid item md={7} sm={12}>
          <VideoDetail video={selectedVideo}/>
        </Grid>
        <Grid item md={5} sm={12}>
          <VideoList videos={videos} handleSelectVideo ={handleSelectVideo}/>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
  );
}

export default App;
