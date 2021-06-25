import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderColor: '2px solid black ',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button className="btn" onClick={handleOpen}>
        Open Covid Info
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
              <div style={{display:'flex',flexWrap:'wrap',margin:'3rem'}}>

                <div style={{border:'1em solid', width:'250px',margin:'3rem', borderRadius:'2rem' ,borderColor:'red' , cursor:'pointer' ,padding:'2rem'}}>
                  <h3 >101</h3>
                    <p>
                        Death in last 24hrs
                    </p>
                </div>
                <div style={{border:'1em solid', width:'250px',margin:'3rem', borderRadius:'2rem' ,borderColor:'orange' , cursor:'pointer' ,padding:'2rem'}}>
                  <h3 >4226</h3>
                    <p>
                        Affected in 24 hr
                    </p>
                </div>
                <div style={{border:'1em solid', width:'250px',margin:'3rem', borderRadius:'2rem' ,borderColor:'green' , cursor:'pointer' ,padding:'2rem'}}>
                  <h3 >5642</h3>
                    <p>
                        Recovered in last 24hrs
                    </p>
                </div>
              </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
