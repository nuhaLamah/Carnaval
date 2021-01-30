import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import {addStore} from '../../redux/Actions/stores';
import { createMuiTheme  } from '@material-ui/core/styles';
import { Button,CssBaseline,TextField,FormControlLabel,Checkbox,NativeSelect,Grid,Box,Container,InputLabel,Typography} from '@material-ui/core';
import './style.css'
import Footer from '../footer/Footer'

    
function StoreRegisterForm (){
  //RTL Configuration
    const theme = createMuiTheme({
        direction: 'rtl',
      });
  // Handle Change Submit Button  - Add Store
  const dispatch = useDispatch();
  const [storeData, setStoreData] = useState({name:'', owner_name:'',market_phone :0,owner_phone:0,email:'',activity_id:1})

  const handleChange =(e)=>{
    setStoreData({...storeData,[e.target.name]:e.target.value})
}
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name,owner_name,phone,activity_id} = storeData
    if(name&& owner_name &&  phone &&  activity_id)
    {
      dispatch(addStore(storeData));
      setStoreData({name:'', owner_name:'',market_phone :0,owner_phone:0,email:'',activity_id:1})
      console.log(storeData);
    }
    else
    {
    alert("please check again");
    }
  };
   

    //Handle checkbox
    const [checkbox,setCheckbox] = useState(true)

    return (   
    <Container component="main" maxWidth="xs" theme={theme} className="container">
      <CssBaseline />
      <div dir="rtl">
        
        <Typography className="title" component="h1" variant="h5">
        نموذج الاشتراك 
        </Typography>
        <form  noValidate>
        <Grid container item xs={12} >
            <Grid item xs={12} >
              <TextField
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="الاسم"
                autoFocus 
                onChange ={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                name="owner_name"
                variant="outlined"
                required
                fullWidth
                id="owner_name"
                label="اسم المحل"
                onChange ={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="address"
                variant="outlined"
                required
                fullWidth
                id="address"
                label="العنوان"
                onChange ={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="phone"
                variant="outlined"
                required
                fullWidth
                id="phone"
                label="رقم الهاتف"
                onChange ={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                
                name="market_phone"
                variant="outlined"
                required
                fullWidth
                id="phone"
                label="رقم هاتف المحل"
                onChange ={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="email"
                label="البريد الالكتروني"
                name="email"
                autoComplete="email"
                onChange ={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
            <InputLabel htmlFor="demo-customized-select-native">اختر نشاط </InputLabel>
            <NativeSelect
                variant="outlined"
                required
                fullWidth
                name="activity_id"
                label="نوع النشاط"
                onChange ={handleChange}
                id="activityType"
              >
            <option aria-label="None" value="اختر نشاط" />
            <option value={1}>Ten</option>
            <option value={1}>Twenty</option>
            <option value={1}>Thirty</option>
            </NativeSelect>
            </Grid>
           
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="Agree" color="primary" />}
                label="   أوافق على شروط الاشتراك ."
                name = "isChecked"
                onClick={()=>{
                  setCheckbox(!checkbox)
                  console.log(checkbox);
                 }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
           
            color="primary"
            onClick = {handleSubmit}
            disabled = {checkbox}
          >
            اشتراك
          </Button>
          {/* <button type="submit"  disabled = {checkbox}  color="primary">اشتراك </button> */}
          
        </form>
      </div>
      <Box mt={5}>
        <Footer />
      </Box>


    </Container>

    );
}


export default StoreRegisterForm
