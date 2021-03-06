import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { addPost } from '../../actions/post';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '55ch',
    },
  },
}));

export default function MultilineTextFields() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [text, setText] = useState('')
  const post = () => {
    dispatch(addPost({text}))
    setText('')
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          value={text}
          onChange = {(e) => setText(e.target.value)}
          id="outlined-multiline-static"
          label="Post"
          multiline
          rows={4}
          variant="outlined"
        /><br></br>
        <Button style = {{backgroundColor: 'khaki'}} onClick = {post}>Post</Button>
      </div>
    </form>
  );
}
