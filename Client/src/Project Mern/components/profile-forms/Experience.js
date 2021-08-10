import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { FaUser, FaEdit, FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';
import { Link, Redirect } from 'react-router-dom';
import Alert from '../layout/Alert';
import Checkbox from '@material-ui/core/Checkbox';

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

  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const [ sub, setSub ] = useState(false)

  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    company: '',
    title: '',
    location: '',
    from: '',
    to: '',
    current: false,
    description: ''
  })

  const { company, title, location, from, to, current, description } = formData

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if(!title || !company){
      alert('Job title and company info are required')
    }else{
      dispatch(createProfile(formData));
      setSub(true)
    }
    
  };

  const classes = useStyles();

  useEffect(() => {
    console.log(formData)
  })
  

  return (
    <>
    {sub ? <Redirect to = '/dashboard' />:
    <div>
    <div style = {{marginTop: '2rem'}}>
      <h1 style = {{fontFamily: 'cursive', color: 'cadetblue', fontSize: '50px'}}>Add experience to Profile-dashboard</h1>
      <br></br><br></br>
      <h3 style = {{color: 'cadetblue'}}><FaEdit/> Lets get your bios to complete your profile</h3>
      <p>* required fields</p>
    </div><br></br><br></br>
    <Alert />
    <form style ={{marginLeft: '4rem', display:'flex', justifyContent: 'center',flexDirection: 'column', width: '40rem'}}>
      <TextField required ={true} name='company' value={company} fullWidth={false} onChange = {onChange} id="standard-basic" label="Company" /><br></br>
      <TextField required ={true} name='title' value={title} fullWidth={false} onChange = {onChange} id="standard-basic" label="Title" /><br></br>
      <TextField name='location' value={location} fullWidth={false} onChange = {onChange} id="standard-basic" label="Location" /><br></br>
      
      <div>
        <TextField
        name = 'from'
        value = {from}
        onChange = {onChange}
        id="date"
        label="From"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        style = {{marginLeft: '1rem'}}
        name = 'to'
        value = {to}
        onChange = {onChange}
        disabled={current}
        id="date"
        label="To"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
       />
        <label style ={{ marginLeft: '1rem'}}>Current</label>
        <Checkbox style ={{color: 'green'}}
        checked={checked}
        onChange={handleChange}
        onClick = {() => {setFormData({...formData, current: !current})}}
        inputProps={{ 'aria-label': 'primary checkbox' }}
        />
        </div>
        <br></br><br></br><br></br>

      <TextField name='description' value={description} onChange = {onChange} fullWidth={false} id="standard-basic" label="Description" /><br></br>

      <button className = 'btn' style = {{backgroundColor: 'cadetblue', marginBottom: '5rem', width: '9rem'}} onClick ={ onSubmit }>Submit</button>
    </form>
  </div>
    }
    </>
  );
}
