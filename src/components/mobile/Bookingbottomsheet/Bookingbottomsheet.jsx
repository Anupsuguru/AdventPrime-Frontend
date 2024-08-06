import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

const BookingBottomSheet = ({ open, handleClose, handleConfirm, workshopId }) => {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth
            maxWidth="sm"
            sx={{
                '& .MuiPaper-root': {
                    backgroundColor: '#000000', // Set background color to black
                    color: '#ffffff', // Set text color to white
                },
            }}
        >
            <DialogTitle id="alert-dialog-title">Book Workshop</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description" sx={{color:"#ffffff"}}>
                    Are you sure you want to book this workshop?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    No
                </Button>
                <Button onClick={() => handleConfirm(workshopId)} color="primary" autoFocus>
                    Yes
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default BookingBottomSheet;
