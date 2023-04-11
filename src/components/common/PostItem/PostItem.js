//External deps
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader } from "@mui/material";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';

//Internal deps
import Dialog from "../../ui/Dialog";
import useDialog from "../../../hooks/useDialog";
import useDeletePost from "../../../hooks/useDeletePost";
import useUpdatePost from "../../../hooks/useUpdatePost";
import PostItemSmall from "../PostItemSmall";
import PostDataDialog from "../PostDataDialog";

//Local deps
import "./index.scss";

const PostItem = (props) => {
  const {
    id,
    title,
    body
  } = props;

  const [ postBody, setPostBody ] = useState(String(body));
  const [ postTitle, setPostTitle ] = useState(String(title));

  const {
    open: openEditDialog,
    openDialog: openActionEditDialog,
    closeDialog: closeActionEditDialog,
  } = useDialog();

  const {
    open: openDeleteDialog,
    openDialog: openActionDeleteDialog,
    closeDialog: closeActionDeleteDialog,
  } = useDialog();

  const {
    deletePost,
  } = useDeletePost();

  const {
    updatePost,
  } = useUpdatePost();

  const navigate = useNavigate();

  const onDeletePostClickHandler = () => {
    deletePost(id);
    closeActionDeleteDialog();
  }

  const onUpdatePostClickHandler = (title, body) => {
    updatePost({ id, title, body })
  }

  const onReadMoreClickHandler = () => {
    navigate(`posts/${id}`)
  }

  const onEditFormSubmitHandler = (event) => {
    event.preventDefault();
    onUpdatePostClickHandler(postTitle, postBody);
    closeActionEditDialog();
  }

  return (
    <Grid item xs={12} md={6} lg={4} xl={3}>
      <Card>
        <CardHeader
          sx={{ pb: 0 }}
          title={title}
          action={
            <>
              <IconButton aria-label="edit" color="#ffffff" onClick={() => {openActionEditDialog()}}>
                <EditIcon />
              </IconButton>
              <IconButton aria-label="delete" color="#ffffff" onClick={() => {openActionDeleteDialog()}}>
                <CloseIcon />
              </IconButton>
            </>
          }
          classes={{ root: "post__headerRoot", content: "post__headerContent", title: "post__title" }}
        />
        <CardContent>
          <Typography variant="body2" className="post__body">{body}</Typography>
          <Button variant="outlined" sx={{ mt: 2 }} onClick={onReadMoreClickHandler} classes={{root: "post__btn-outlined"}}>
            Read more
          </Button>
        </CardContent>
      </Card>
      <Dialog
        open={openDeleteDialog}
        onClose={closeActionDeleteDialog}
        title="Warning"
        children={(
          <>
            Are you sure you want to remove post?
            <PostItemSmall title={title} body={body} />
          </>
        )}
        saveButton={<Button variant="contained" onClick={onDeletePostClickHandler}>Yes</Button>}
      />
      <PostDataDialog
        open={openEditDialog}
        onClose={closeActionEditDialog}
        onSubmit={onEditFormSubmitHandler}
        onChangeTitle={e => setPostTitle(e.target.value)}
        onChangeBody={e => setPostBody(e.target.value)}
        postTitle={postTitle}
        postBody={postBody}
      />
    </Grid>
  )
}

export default PostItem;
