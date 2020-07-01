import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import './style.css'



function VideoDetail(props) {

  const {video} = props;
  if (video.id=== undefined) return <div>Loading...</div>;
  console.log(video)
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  
  return (
    <div>
      <div className="videodetail" >
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
        />
      </div>
      <div style={{ padding: "15px" }}>
        <Typography variant="h4">
          {video.snippet.title} - {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle1">
          {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2">{video.snippet.description}</Typography>
      </div>
    </div>
  );
}

export default VideoDetail;
