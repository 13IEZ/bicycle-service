import {
  Button,
  Typography,
  CardActionArea,
  CardMedia,
  CardContent,
  Card,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import BG from '../../assets/img/bg-main.jpg';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    margin: 4,
    textDecoration: 'none',
  },
  media: {
    height: 170,
  },
});

const IncidentItem = ({ report, deleteHandler }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea component={Link} to={`/incident/${report._id}`}>
        <CardMedia className={classes.media} image={BG} />
        <CardContent>
          <Typography gutterBottom variant='h6'>
            Status: {report.status}
          </Typography>
          <Typography gutterBottom variant='h6'>
            Author: {report.ownerFullName}
          </Typography>
          <Typography gutterBottom variant='h6'>
            Created at: {new Date(report.createdAt).toLocaleDateString()}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Button onClick={(e) => deleteHandler(report._id)} color='secondary'>
        Delete
      </Button>
    </Card>
  );
};

export default IncidentItem;
