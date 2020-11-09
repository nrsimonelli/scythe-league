import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

class ConfirmSearch extends Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleAgree = () => {
    console.log("Yes");
    this.handleClose();
  };
  handleDisagree = () => {
    console.log("No");
    this.handleClose();
  };
  render() {
    return (
      <div>
        {/* Button to trigger the opening of the dialog */}
        <Button onClick={this.handleClickOpen}>Open alert dialog</Button>
        {/* Dialog that is displayed if the state open is true */}
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Successful Alert"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              This game has already been recorded, are you sure you wish to proceed?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleDisagree} color="primary">
              Back
            </Button>
            <Button onClick={this.handleAgree} color="primary" autoFocus>
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default ConfirmSearch;