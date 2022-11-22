import { IconButton, Stack, TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from 'react';


function Searcher({ setInputUser }) {
  const [valueInput, setValueInput] = useState("");
  const onSearchValueChange = (e) => {
    setValueInput(e.target.value);
  };
  const handelSubmit = () => {
    setInputUser(valueInput)
  };
  return (
    <Stack
      direction="row"
      sx={{
        marginTop: "30px",
        width: "80%",
      }}
    >
      <TextField
        id="outlined-basic"
        label="GitHub User "
        variant="outlined"
        placeholder="Buscar usuario.."
        size="small"
        value={valueInput}
        onChange={onSearchValueChange}
        sx={{
          width: "90%",
        }}
      />
      <IconButton
        onClick={handelSubmit}
        sx={{
          left: "-45px",
        }}
      >
        <SearchIcon />
      </IconButton>
    </Stack>
  );
}

export default Searcher;
