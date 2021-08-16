import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { FaUser, FaEdit, FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addExperience, createProfile, getCurrentProfile } from '../../actions/profile';
import { Link, Redirect } from 'react-router-dom';
import Alert from '../layout/Alert';
import Checkbox from '@material-ui/core/Checkbox';
import { addEducation } from '../../actions/profile';

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
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    to: '',
    current: false,
    description: ''
  })

  const {
    school,
    degree,
    fieldofstudy,
    from,
    to,
    description,
    current
  } = formData

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if(!school || !degree){
      alert('School and Degree info are required')
    }else{
      dispatch(addEducation(formData))
      setTimeout(() => {
        setSub(true)
      }, 1000)
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
        <h1 style = {{fontFamily: 'cursive', color: 'cadetblue', fontSize: '50px'}}>Add education to Profile-dashboard</h1>
        <br></br><br></br>
        <h3 style = {{color: 'cadetblue'}}><FaEdit/> Lets get your bios to complete your profile</h3>
        <p>* required fields</p>
      </div><br></br><br></br>
      <Alert />
      <form style ={{marginLeft: '4rem', display:'flex', justifyContent: 'center',flexDirection: 'column', width: '40rem'}}>
        <TextField required ={true} name='school' value={school} fullWidth={false} onChange = {onChange} id="standard-basic" label="School / College / Varsity" /><br></br>
        <TextField required ={true} name='degree' value={degree} fullWidth={false} onChange = {onChange} id="standard-basic" label="Degree" /><br></br>
        <TextField name='fieldofstudy' value={fieldofstudy} fullWidth={false} onChange = {onChange} id="standard-basic" label="Field of study" /><br></br>
        <br></br><br></br>
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
        
        <TextField name='description' value={description} fullWidth={false} id="standard-basic" onChange = {onChange} label="Description" /><br></br>

        <button className = 'btn' style = {{backgroundColor: 'cadetblue', marginBottom: '5rem', width: '9rem'}} onClick ={ onSubmit }>Submit</button>
      </form>
    </div>
    }
    </>
  );
}
