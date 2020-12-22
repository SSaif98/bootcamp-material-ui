import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, TextField, Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper:{
    width: 400, 
    margin: '0 auto',
    marginTop: 50,
    textAlign: 'center',
    padding: 15
  },
  input:{
    width: '95%',
    marginBottom: 10
  }
}));
export default function Login() {
  const classes = useStyles();
  return (
    <div >
    <Paper elevation={3} className={classes.paper} >
      <h1>Login</h1>
      <form className={classes.root} noValidate autoComplete="off">
      <TextField label="Enter Email" className={classes.input}/>
      <TextField label="Enter Password" className={classes.input} />
      <Button variant="contained" color="primary" className={classes.input}>
      Login 
    </Button>

    </form>
    </Paper>
  </div>
  );
}

