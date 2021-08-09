import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { FaUser, FaEdit, FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';
import { Link, Redirect } from 'react-router-dom';
import Alert from '../layout/Alert';

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

  let { loading, profile } = useSelector( data => data.profile)

  const [ sub, setSub ] = useState(false)

  const dispatch = useDispatch()

  const [ social, toggleSocial ] = useState( false )

  const [ formData, setFormData ] = useState( {
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    githubusername: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: ''
  } )

  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram
  } = formData

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if(!status || !skills){
      alert('profession and skills are required')
    }else{
      dispatch(createProfile(formData));
      setSub(true)
    }
    
  };

  const classes = useStyles();

  useEffect(() => {

    dispatch(getCurrentProfile())

    setFormData( {...formData, company: loading || !profile.company ? '' : profile.company,
    website: loading || !profile.website ? '' : profile.website,
    location: loading || !profile.location ? '' : profile.location,
    status: loading || !profile.status ? '' : profile.status,
    skills: loading || !profile.skills ? '' : profile.skills.join(','),
    githubusername: loading || !profile.githubusername ? '' : profile.githubusername,
    bio: loading || !profile.bio ? '' : profile.bio,
    } )
  },[])
  

  return (
    <>
    {sub ? <Redirect to = '/dashboard' />:
    <div className={classes.root} style = {{marginLeft: '3rem', marginBottom: '3rem', marginTop: '3rem'}}>
      <div>
        <h1 style = {{fontFamily: 'cursive', color: 'cadetblue', fontSize: '50px'}}>Create your Profile</h1>
        <br></br><br></br>
        <h3 style = {{color: 'cadetblue'}}><FaEdit/> Lets get your bios to complete your profile</h3>
        <p>* required fields</p>
      </div>
      <div style = {{marginLeft: '10rem'}}>
        <Alert />
        <TextField
          // id="standard-full-width"
          name="status"
          value= {status}
          onChange={ onChange }
          label="Profession"
          style={{ margin: 8 }}
          placeholder="*"
          helperText=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        /><br></br> <br></br> <br></br>
        <TextField
          // id="standard-full-width"
          name="company"
          value= {company}
          onChange={ onChange }
          label="Company"
          style={{ margin: 8 }}
          placeholder=""
          helperText=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        /><br></br> <br></br> <br></br>
        <TextField
          // id="standard-full-width"
          name="website"
          value= {website}
          onChange={ onChange }
          label="Website"
          style={{ margin: 8 }}
          placeholder=""
          helperText=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        /><br></br> <br></br> <br></br>
        <TextField
          //id="standard-full-width"
          name="location"
          value= {location}
          onChange={ onChange }
          label="Location"
          style={{ margin: 8 }}
          placeholder=""
          helperText=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        /><br></br> <br></br> <br></br>
        <TextField
          //id="standard-full-width"
          name="skills"
          value= {skills}
          onChange={ onChange }
          label="Skills"
          style={{ margin: 8 }}
          placeholder="* separated by comma"
          helperText=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        /><br></br> <br></br> <br></br>
        <TextField
          // id="standard-full-width"
          name= "githubusername"
          value= {githubusername}
          onChange={ onChange }
          label="Github Username"
          style={{ margin: 8 }}
          placeholder=""
          helperText=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        /><br></br> <br></br> <br></br>
        <TextField
          // id="standard-full-width"
          name="bio"
          value= {bio}
          onChange={ onChange }
          label="Tell us something about yourself"
          style={{ margin: 8 }}
          placeholder=""
          helperText=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <br></br>
        <br></br><br></br>
        <p className = 'mark' onClick = {() => toggleSocial(!social)}>Click here to add social links (optional)</p>
        
        
        {social ?
        <><FaFacebook style ={{color: 'blue', fontSize: '2rem'}} />
          <TextField
          id="standard-full-width"
          name="facebook"
          value= {facebook}
          onChange={ onChange }
          label=""
          style={{ margin: 8 }}
          placeholder=""
          helperText=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <br></br><br></br><br></br><br></br>
        <FaInstagram style ={{color: 'red', fontSize: '2rem'}} />
        <TextField
          id="standard-full-width"
          name="instagram"
          value= {instagram}
          onChange={ onChange }
          label=""
          style={{ margin: 8 }}
          placeholder=""
          helperText=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        /><br></br><br></br><br></br><br></br>
        <FaLinkedin style ={{color: 'blue', fontSize: '2rem'}} />
        <TextField
          id="standard-full-width"
          name="linkedin"
          value= {linkedin}
          onChange={ onChange }
          label= ""
          style={{ margin: 8 }}
          placeholder=""
          helperText=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        /><br></br><br></br><br></br><br></br>
        <FaTwitter style ={{color: 'cadetblue', fontSize: '2rem'}} />
        <TextField
          id="standard-full-width"
          name="twitter"
          value= {twitter}
          onChange={ onChange }
          label=""
          style={{ margin: 8 }}
          placeholder=""
          helperText=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        /><br></br><br></br><br></br><br></br>
        <FaYoutube style ={{color: 'red', fontSize: '2rem'}} />
        <TextField
          id="standard-full-width"
          name="youtube"
          value= {youtube}
          onChange={ onChange }
          label=""
          style={{ margin: 8 }}
          placeholder=""
          helperText=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        </> : null}
        <br></br><br></br><br></br><br></br>

        <button className = 'btn' style = {{backgroundColor: 'green'}} onClick ={ onSubmit }>Submit</button>
       
      </div>
    </div>
    }
    </>
  );
}
