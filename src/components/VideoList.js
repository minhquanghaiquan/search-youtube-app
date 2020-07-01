import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';


function VideoList(props) {
  const {videos, handleSelectVideo} = props;

  return (
    <Grid container spacing={8}>
      {videos.map(video => (
          <Grid item xs={12}>
            <Paper style={{ display: "flex", alignItems: "center", cursor: "pointer", width: "100%"}} onClick={() => handleSelectVideo(video)}>
              <Grid container alignItems="center">
                <Grid item xs={8}><img style={{ marginRight: "20px" , width: "100%", height: "100%"}} alt="thumbnail" src={video.snippet.thumbnails.medium.url} /></Grid>
                <Grid item xs={4}>
                  <Typography variant="subtitle1">
                  <b>{video.snippet.title}</b>
                </Typography>
                </Grid>
              </Grid>
            </Paper>
        </Grid>
        ))
      }
    </Grid>
  );
}

export default VideoList;
