//External deps
import React, {useState} from "react";
import Dialog from '@mui/material/Dialog';
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import InputLabel from "@mui/material/InputLabel";
import {TextareaAutosize} from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

//Internal deps
import TextField from "../../ui/fields/TextField";
import useCreatePost from "../../../hooks/useCreatePost";

const PostDataDialog = (props) => {
  const {
    open,
    onClose,
    onSubmit,
    onChangeTitle,
    onChangeBody,
    postTitle,
    postBody,
  } = props;

  const { createPost } = useCreatePost();
  
  const isEditDialog = !!postTitle || !!postBody;
  const [ body, setBody ] = useState('');
  const [ title, setTitle ] = useState('');

  const onChangeTitleHandler = (e) => {
    setTitle(e.target.value);
  }

  const onChangeBodyHandler = (e) => {
    setBody(e.target.value);
  }

  const onCreatePostHandler = (e) => {
    e.preventDefault();
    createPost({ title, body });
    onClose();
  }

  return (
    <Dialog open={open} onClose={onClose} fullWidth >
      <DialogTitle>{isEditDialog ? 'Edit post' : 'Create post'}</DialogTitle>
      <form onSubmit={isEditDialog ? onSubmit : onCreatePostHandler}>
        <DialogContent>
          <TextField
            id="text"
            label="Title"
            placeholder="Enter post title"
            value={postTitle ?? title}
            onChangeHandler={onChangeTitle ?? onChangeTitleHandler}
            name="title"
          />
          <InputLabel htmlFor="Post body" sx={{ mb: 1 }}>Body</InputLabel>
          <TextareaAutosize
            minRows={3}
            id="body"
            name="body"
            placeholder="Enter post body"
            style={{ width: '100%', backgroundColor: 'transparent' }}
            className="textarea"
            value={postBody ?? body}
            onChange={onChangeBody ?? onChangeBodyHandler}
          />
        </DialogContent>
        <DialogActions sx={{ mb: 2, mx: 2}}>
          <Button onClick={onClose}>Cancel</Button>
          <Button variant="contained" type="submit">{isEditDialog ? 'Save' : 'Create'}</Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default PostDataDialog;
