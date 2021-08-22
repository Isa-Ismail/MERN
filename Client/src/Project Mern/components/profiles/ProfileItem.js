import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills
  }
}) => {
    const classes = useStyles();

    const handleClick = () => {
      console.info('You clicked the Chip.');
    };
  
  return (
    <div style = {{display: 'flex', marginTop: '3rem', marginLeft: '4rem',marginBottom:'2rem', backgroundColor: 'hsl(212, 33%, 89%)', width: '40rem', borderRadius: '.9rem'}}>
      <img src={avatar} alt='' style ={{borderRadius: '50%', margin: '2rem'}} />
      <div style = {{textAlign: 'right'}}>
        <h2 style ={{color: 'darkslateblue', marginTop: '2rem'}}>{name}</h2>
        <p>
          {status} {company && <span> at {company}</span>}
        </p>
        <p className='my-1'>{location && <span>{location}</span>}</p>
        <Link style={{backgroundColor: 'cadetblue'}} to={`/profile/${_id}`} className='btn'>
          View Profile
        </Link>
        <ul style ={{marginTop: '2rem'}}>
        {skills.slice(0, 4).map((skill, index) => (
          <Chip key = {index} label = {skill} variant="outlined" color="secondary" size="small" deleteIcon={<DoneIcon />} avatar={<Avatar>{skill[0]}</Avatar>} />
        ))}
      </ul>
      </div>
      
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;