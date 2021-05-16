import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Sdata from './Sdata';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Products() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        {Sdata.map((val, id)=>{
            return(
                <Grid item xs={4}>
                <Paper className={classes.paper}>
                    <img className="Product" src={val.img} alt=""/>
                    <div>Price ${val.price}</div>
                    <Button variant="contained" color="secondary">Add to cart</Button>
                </Paper>
                </Grid>
            )
        })}
        
 
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}
