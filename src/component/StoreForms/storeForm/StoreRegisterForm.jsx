import React, { useState ,useEffect } from 'react';
 import { useDispatch , useSelector} from 'react-redux';
import {addStore} from '../../../redux/Actions/stores';
import { Button, Typography, Paper } from '@material-ui/core';
import './style.js'
import useStyles from './style';
import InputField from '../InputField';
import { useHistory , Link } from "react-router-dom";
import  uniqueRandom from 'unique-random-at-depth';
 // import Terms from './Terms'
function StoreRegisterForm ({storeDefaultData , address}){

// Handle Change Submit Button  - Add Store
const dispatch = useDispatch();
const history = useHistory();
const classes = useStyles();
const data = useSelector((data)=>data.stores.address);
const [storeData, setStoreData] = useState({name:'',owner_name:'',market_phone :0,owner_phone:0,email:'',category:'',postcode:'',building_Number:'',code:''})
const [checkbox,setCheckbox] = useState(true);
const [showForm, setShowForm] = useState(false);
const [storeCode , setStoreCode] = useState(0);
console.log(address);
useEffect(() => {
  setStoreCode(uniqueRandom(100000, 1000000, 50));
  if (data.status === 'valid') 
  {
    storeData.name = storeDefaultData.name;
    storeData.market_phone = storeDefaultData.phoneNumber;
    storeData.category = storeDefaultData.category;
    storeData.postcode = address.code;
    storeData.building_Number = address.number;
    storeData.code = storeCode;
    
    setShowForm(!showForm);
  }
},[data.status]);

const handleChange =(e)=>{
  setStoreData({...storeData,[e.target.name]:e.target.value});
}

const handleSubmit = async (e) => {
  e.preventDefault();
  dispatch(addStore(storeData));
  console.log(storeData);
  history.push(`/StoreData/${storeCode}`);
  setStoreData({name:'',owner_name:'',market_phone :0,owner_phone:0,email:'',category:'',postcode:'',building_Number:''})
};

    return(
      <div className="ui container centered grid ">
      {showForm ? (
      <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">Store Registeration Form</Typography>
        <InputField name="name"  title="اسم المحل" fullWidth defaultValue={`${storeDefaultData.name}`} onChange={handleChange}  />
        <InputField name="owner_name" variant="outlined" title="اسم صاحب الحل" fullWidth onChange={handleChange}  />
        <InputField name="market_phone" variant="outlined" title="رقم هاتف المحل" fullWidth defaultValue ={data.phoneNumber} onChange={handleChange}  />
        <InputField name="owner_phone" variant="outlined" title="رقم هاتف صاحب المحل" fullWidth onChange={handleChange} />
        <InputField name="email" variant="outlined" title="البريد الالكتورني" fullWidth onChange={handleChange} />
        <InputField name="category" variant="outlined" title="نوع النشاط" fullWidth defaultValue ={data.category} onChange={handleChange} />
        <input type="checkbox" name = "isChecked" onClick={()=>setCheckbox(!checkbox)}/> أوافق على <Link to={'./Terms'}>شروط الاشتراك</Link>
        <div className="field button-container">
          <Button  disabled = {checkbox} className={`${classes.buttonSubmit} fluid ui blue button`} variant="contained" color="primary" size="large" type="submit" >حفظ</Button>
        </div>
      </form>
    </Paper>) : <></>}
    {/* <Terms /> */}
    </div>
   
    );
}


export default StoreRegisterForm
