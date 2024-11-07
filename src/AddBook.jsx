import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

function AddBook(props) {
  const [open, setOpen] = useState(false);
  const [book, setBook] = useState({title: '', author: '', year: '', isbn: '', price: ''});
  
  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleSave = () => {
    props.addTodo(book);
    handleClose();
  }

  const inputChanged = (event) => {
    setBook({...book, [event.target.name]: event.target.value});
  }

  return(
    <>
      <Button variant="outlined" onClick={handleOpen}>
        Add book
      </Button>
     <Dialog open={open}>
       <DialogTitle>New book</DialogTitle>
       <DialogContent> 
         <TextField
            name="title"
            value={book.title}
            onChange={inputChanged}
            margin="dense"
            label="title"
            fullWidth
          /> 
         <TextField
           name="author"
           value={book.author}
           onChange={inputChanged}
           margin="dense"
           label="author"
           fullWidth
         /> 
         <TextField
           name="year"
           value={book.year}
           onChange={inputChanged}
           margin="dense"
           label="year"
           fullWidth
         />
         <TextField
           name="isbn"
           value={book.isbn}
           onChange={inputChanged}
           margin="dense"
           label="isbn"
           fullWidth
         /> 
         <TextField
           name="price"
           value={book.price}
           onChange={inputChanged}
           margin="dense"
           label="price"
           fullWidth
         />
      </DialogContent>
      <DialogActions>
         <Button color="primary" onClick={handleClose}>Cancel</Button>
         <Button color="primary" onClick={handleSave}>Save</Button>
      </DialogActions>
     </Dialog> 
    </>
  );
}

export default AddBook;