import React, { useState ,useEffect } from 'react';
 import { useDispatch , useSelector} from 'react-redux';
import {addStore} from '../../../redux/Actions/stores';
import { Button, Typography, Paper } from '@material-ui/core';
import './style.js'
import useStyles from './style';
import InputField from '../InputField';
import { useHistory } from "react-router-dom";
import  uniqueRandom from 'unique-random-at-depth';
    
function StoreRegisterForm (){

// Handle Change Submit Button  - Add Store
const dispatch = useDispatch();
const history = useHistory();
const [makaniData, setMakaniData] = useState({name:'',phoneNumber :null,category:''})
const [storeData, setStoreData] = useState({name:makaniData.name, owner_name:'',market_phone :makaniData.phoneNumber,owner_phone:0,email:'',activity_id:1})

const classes = useStyles();
const data = useSelector((data)=>data.stores.address);
const [checkbox,setCheckbox] = useState(true);
const [showForm, setShowForm] = useState(false);
const [storeCode , setStoreCode] = useState(0);

 useEffect(() => {
  setStoreCode(uniqueRandom(100000, 1000000, 50));
  if (data.status === 'valid') 
  {
    setMakaniData({name:data.name , phoneNumber:data.phoneNumber, catgory:data.category})
    setShowForm(!showForm);
  }
},[data.status]);

const handleChange =(e)=>{
  setStoreData({...storeData,[e.target.name]:e.target.value});
}

const handleSubmit = async (e) => {
  e.preventDefault();
  dispatch(addStore(storeData));
  history.push(`/Store/${storeCode}`);
  setStoreData({name:'', owner_name:'',market_phone :0,owner_phone:0,email:'',activity_id:1})
};

    return(
      <div className="ui container centered grid ">
      {showForm ? (
      <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">Store Registeration Form</Typography>
        <InputField name="name"  title="اسم المحل" fullWidth defaultValue ={makaniData.name} onChange={handleChange}  />
        <InputField name="owner_name" variant="outlined" title="اسم صاحب الحل" fullWidth onChange={handleChange}  />
        <InputField name="market_phone" variant="outlined" title="رقم هاتف المحل" fullWidth defaultValue ={data.phoneNumber} onChange={handleChange}  />
        <InputField name="owner_phone" variant="outlined" title="رقم هاتف صاحب المحل" fullWidth onChange={handleChange} />
        <InputField name="email" variant="outlined" title="البريد الالكتورني" fullWidth onChange={handleChange} />
        <InputField name="activity_id" variant="outlined" title="نوع النشاط" fullWidth defaultValue ={data.category} onChange={handleChange} />
        <input type="checkbox" name = "isChecked" onClick={()=>setCheckbox(!checkbox)}/> أوافق على شروط الاشتراك
        <div className="field button-container">
          <Button  disabled = {checkbox} className={`${classes.buttonSubmit} fluid ui blue button`} variant="contained" color="primary" size="large" type="submit" >حفظ</Button>
        </div>
      </form>
    </Paper>) : <></>}
    </div>
    );
}


export default StoreRegisterForm
