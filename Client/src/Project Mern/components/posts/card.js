import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {FaThumbsUp, FaThumbsDown, FaComment} from 'react-icons/fa'

const useStyles = makeStyles({
  root: {
    minWidth: 275, backgroundColor: 'khaki'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard({post: { _id, text, name, avatar, user, likes, comments, date }}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {name}
        </Typography><br></br>
        <Typography className={classes.pos} color="textSecondary">
          {text}
        </Typography>
        <Typography variant="body2" component="p">
          {date}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><FaThumbsUp /></Button><Button size="small"><FaThumbsDown /></Button><Button size="small"><FaComment /></Button>
      </CardActions>
    </Card>
  );
}
