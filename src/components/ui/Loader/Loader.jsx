//External deps
import React from "react";
import CircularProgress from '@mui/material/CircularProgress';
import { Typography } from "@mui/material";

//Local deps
import "./Loader.scss";

const Loader = (props) => {
  const {
    text,
  } = props

  return (
    <div className="Loader">
      <CircularProgress color="inherit" size={100} />
      <Typography variant="h4" sx={{ pt: 3 }}>{text}</Typography>
    </div>
  )
}

export default Loader;
