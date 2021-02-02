import React, { useState,useEffect  } from 'react';
 import { useDispatch , useSelector} from 'react-redux';
import {addStore} from '../../../redux/Actions/stores';
import { Button, Typography, Paper } from '@material-ui/core';
import './style.js'
import useStyles from './style';
import InputField from '../InputField'
    
function StoreRegisterForm ({storeDefaultData}){

// Handle Change Submit Button  - Add Store
const dispatch = useDispatch();

const [makaniData, setMakaniData] = useState({name:'',market_phone :0,category:''})
const [storeData, setStoreData] = useState({name:'', owner_name:'',market_phone :0,owner_phone:0,email:'',activity_id:1})

const classes = useStyles();
const [checkbox,setCheckbox] = useState(true)
const data = useSelector((data)=>data.stores.address);
useEffect(() => {
  if (data) setMakaniData(data);
}, [data]);

const handleChange =(e)=>{
  setStoreData({...storeData,[e.target.name]:e.target.value});
}

const handleSubmit = async (e) => {
  e.preventDefault();
  dispatch(addStore(storeData));
  console.log(storeData);
  setStoreData({name:'', owner_name:'',market_phone :0,owner_phone:0,email:'',activity_id:1})
};



    return(

      <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">Store Registeration Form</Typography>
        <InputField name="name"  title="اسم المحل" fullWidth defaultValue ={data.name} onChange={handleChange}  />
        <InputField name="owner_name" variant="outlined" title="اسم صاحب الحل" fullWidth onChange={handleChange}  />
        <InputField name="market_phone" variant="outlined" title="رقم هاتف المحل" fullWidth defaultValue ={data.phoneNumber} onChange={handleChange}  />
        <InputField name="owner_phone" variant="outlined" title="رقم هاتف صاحب المحل" fullWidth onChange={handleChange} />
        <InputField name="email" variant="outlined" title="البريد الالكتورني" fullWidth onChange={handleChange} />
        <InputField name="activity_id" variant="outlined" title="نوع النشاط" fullWidth defaultValue ={data.category} onChange={handleChange} />
        <input type="checkbox" name = "isChecked" onClick={()=>setCheckbox(!checkbox)}/> أوافق على شروط الاشتراك
        <Button  disabled = {checkbox} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>حفظ</Button>
      
      </form>
    </Paper>
    );
}


export default StoreRegisterForm
