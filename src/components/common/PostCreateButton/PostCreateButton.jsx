//External deps
import React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

//Internal deps
import useDialog from "../../../hooks/useDialog";
import PostDataDialog from "../PostDataDialog";

//Local deps
import "./PostCreateButton.scss";

const PostCreateButton = () => {
 const { open, openDialog, closeDialog } = useDialog();

  return (
    <>
      <Fab aria-label="Add" color="warning" onClick={openDialog}>
        <AddIcon />
      </Fab>
      <PostDataDialog
        open={open}
        onClose={closeDialog}
      />
    </>
  )
}

export default PostCreateButton;
