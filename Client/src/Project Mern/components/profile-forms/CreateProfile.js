import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { FaUser, FaEdit } from 'react-icons/fa';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

export default function LayoutTextFields() {
  const classes = useStyles();

  return (
    <div className={classes.root} style = {{marginLeft: '3rem', marginBottom: '3rem', marginTop: '3rem'}}>
      <div>
        <h1 style = {{fontFamily: 'cursive', color: 'cadetblue', fontSize: '50px'}}>Create your Profile</h1>
        <br></br><br></br>
        <h3 style = {{color: 'cadetblue'}}><FaEdit/> Lets get your bios to complete your profile</h3>
        <p>* required fields</p>
      </div>
      <div>
        <TextField
          id="standard-full-width"
          label="Profession"
          style={{ margin: 8 }}
          placeholder="*"
          helperText=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="standard-full-width"
          label="Company"
          style={{ margin: 8 }}
          placeholder=""
          helperText=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="standard-full-width"
          label="Website"
          style={{ margin: 8 }}
          placeholder=""
          helperText=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="standard-full-width"
          label="Location"
          style={{ margin: 8 }}
          placeholder=""
          helperText=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="standard-full-width"
          label="Skills"
          style={{ margin: 8 }}
          placeholder="*"
          helperText=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="standard-full-width"
          label="Github Username"
          style={{ margin: 8 }}
          placeholder=""
          helperText=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        
       
      </div>
    </div>
  );
}
