import React from 'react'
import { Container, Grow, Grid } from '@material-ui/core';
import StoreRegisterForm from './storeForm/StoreRegisterForm';
import AddressForm from './makaniAddress/AddressForm';


const Main = () =>{
    return (
        <Container maxWidth="lg">
        <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={6}>
              <AddressForm />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StoreRegisterForm />
            </Grid>
          </Grid>
        </Container>
        </Grow>
        </Container>
    )
}

export default Main;