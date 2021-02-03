import React, { useState  } from 'react';
import { useDispatch} from 'react-redux';
import { Container, Grow, Grid } from '@material-ui/core';
import StoreRegisterForm from '../storeForm/StoreRegisterForm'
import { checkAddress } from '../../../redux/Actions/stores';


const AddressForm = () => {
    const dispatch = useDispatch();
    const [address , setAddress] = useState({code:'', number:''});
    
    const handleChange = (e)=>{
        setAddress({...address,[e.target.name]:e.target.value})
    }
    //const storeDefaultData = useSelector((addressData) => addressData.stores.address);
 
    const handleSubmit = (e)=>{
    e.preventDefault();

    const {code , number} = address
    if(code && number)
    {
        dispatch(checkAddress(`${address.code}+${address.number}`));
        setAddress({code:'' , number:''});
    }
    else
    {
        alert("please check again");
    }
  };

    return (
        <Container maxWidth="lg">
        <Grow in>
        <Container>
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
        <Grid item xs={12} sm={6}>
        <form className="ui form segment log-form">
        <h1 style={{textAlign:'center'}}>عنوان مكاني </h1>
        <input type="text" name="code" placeholder="ABCD" onChange ={handleChange} />
        <input type="text" name="number" placeholder="1234" onChange ={handleChange} />
             <button className="fluid ui blue button" type="submit"  onClick = {handleSubmit}>تحقق</button>
        </form>
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

export default AddressForm;