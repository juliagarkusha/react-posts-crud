//External deps
import * as React from 'react';
import Button from '@mui/material/Button';
import MUIDialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

//Local deps
import "./Dialog.scss";

const Dialog = (props) => {
  const {
    open,
    onClose,
    title = '',
    children,
    saveButton,
  } = props;

  return (
    <div>
      <MUIDialog
        open={open}
        onClose={onClose}
        aria-labelledby="dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="dialog-title" className="dialog-title">
          {title}
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'relative',
              right: -12,
              color: (theme) => theme.palette.white,
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {children}
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }} className="dialog-actions">
          <Button autoFocus onClick={onClose} color="text">
            Cancel
          </Button>
          {saveButton}
        </DialogActions>
      </MUIDialog>
    </div>
  );
}

export default Dialog;
