import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function BackToTop(props) {

  let auth = useSelector( data => data.auth.isAuthenticated)

    const NonAuthenticated = (
      <>
        <Toolbar>
            <Link style={{color:'red', marginLeft: '50rem '}} to='/register'><Typography variant="h6">Register</Typography></Link>
        </Toolbar>  
        <Toolbar>
            <Link style={{color:'red'}} to='/login'><Typography variant="h6">Login</Typography></Link>
        </Toolbar>  
      </>
      )
  
    const Authenticated = (
      <>
          <Toolbar>
              <Link style={{color:'red'}} to='/dashboard'><Typography variant="h6">Dashboard</Typography></Link>
          </Toolbar>
          <Toolbar>
              <Link style={{color:'red'}} to='/post'><Typography variant="h6">Post</Typography></Link>
          </Toolbar>
          <Toolbar>
              <Link style={{color:'red',marginLeft: '40rem'}} to='/form'><Typography variant="h6">Sign Out</Typography></Link>
          </Toolbar>
          
      </>
      )

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar style = {{display:'flex', flexDirection:'row', backgroundColor: 'hsl(205, 77%, 27%)', flexWrap: 'wrap'}}>
        <Toolbar>
        <Link style={{color:'#333'}} to='/'><Typography variant="h6">DevMedia</Typography></Link>
        </Toolbar>
        <Toolbar>
        <Link style={{color:'#333'}} to='/developers'><Typography variant="h6">Developers</Typography></Link>
        </Toolbar>
        {
            auth? Authenticated: NonAuthenticated
        }
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <Container>

      </Container>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
