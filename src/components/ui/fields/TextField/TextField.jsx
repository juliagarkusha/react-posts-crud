//External deps
import React from "react";
import MUITextField from "@mui/material/TextField";
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

//Local deps
import "./TextField.scss";

const TextField = (props) => {
  const {
    id,
    name,
    label,
    placeholder,
    value,
    onChangeHandler,
  } = props;

  return (
    <FormControl sx={{ width: '100%' }}>
      <FormLabel htmlFor={id}>
        {label}
      </FormLabel>
      <MUITextField
        autoFocus
        margin="dense"
        id={id}
        name={name}
        placeholder={placeholder}
        type="text"
        fullWidth
        variant="outlined"
        value={value}
        onChange={onChangeHandler}
        sx={{ mb: 2 }}
        classes={{
          root: "input"
        }}
        InputProps={{
          classes: {
            notchedOutline: "input"
          }
        }}
      />
    </FormControl>
  )
}

export default TextField;
