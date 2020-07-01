import React, { useState } from 'react';
import {Paper, TextField } from '@material-ui/core';


function SearchBar(props) {
  const [searchTerm , setSearchTerm] = useState('');

  const {onSubmit} = props;

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      onSubmit(searchTerm);
    }
  }

  return (
    <Paper elevation={6} style={{ padding: "25px" }}>
      <TextField
        fullWidth
        label="Search..."
        value={searchTerm}
        onChange={handleChange}
        onKeyPress={onKeyPress}
      />
    </Paper>
  );
}

export default SearchBar;
