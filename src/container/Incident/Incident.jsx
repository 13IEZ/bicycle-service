import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import SimpleModal from '../../components/UI/Modal/Modal';
// import {fetchProducts} from '../../store/actions/productsActions';
// import ProductItem from '../../components/ProductItem/ProductItem';

const Incident = () => {
  const dispatch = useDispatch();

  return (
    <Grid container direction='column' spacing={2}>
      {/*<SimpleModal/>*/}
      <Grid
        item
        container
        direction='row'
        justify='space-between'
        alignItems='center'>
        <Grid item>
          <Typography variant='h3'>All incidents</Typography>
        </Grid>
      </Grid>
      <Grid item container direction='row' spacing={2}>
        {/*{products.map(product => {*/}
        {/*	return <ProductItem*/}
        {/*		id={product._id}*/}
        {/*		title={product.title}*/}
        {/*		category={product.category}*/}
        {/*		price={product.price.$numberDecimal}*/}
        {/*		image={product.image}*/}
        {/*		key={product._id}*/}
        {/*	/>*/}
        {/*})}*/}
      </Grid>
    </Grid>
  );
};

export default Incident;
