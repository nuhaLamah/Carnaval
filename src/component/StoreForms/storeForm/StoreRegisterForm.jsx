import React, { useState , useEffect } from 'react';
 import { useDispatch , useSelector} from 'react-redux';
import {addStore} from '../../../redux/Actions/stores';
//import { createMuiTheme  } from '@material-ui/core/styles';
//import { Button,CssBaseline,TextField,FormControlLabel,Checkbox,NativeSelect,Grid,Box,Container,InputLabel,Typography} from '@material-ui/core';
import './style.js'
//import Footer from '../../footer/Footer'

    
function StoreRegisterForm (storeDefaultData={storeDefaultData}){
 
// Handle Change Submit Button  - Add Store
const dispatch = useDispatch();
const [storeData, setStoreData] = useState({name:'', owner_name:'',market_phone :0,owner_phone:0,email:'',activity_id:1})
const data = useSelector((data)=>storeDefaultData?data.address:'');
console.log(data);

const handleChange =(e)=>{
//setStoreData({...storeData,[e.target.name]:e.target.defaultValue})
}


const handleSubmit = async (e) => {
// e.preventDefault();
// const {name,owner_name,phone,activity_id} = storeData
// if(name&& owner_name &&  phone &&  activity_id)
// {
// dispatch(addStore(storeData));
// setStoreData({name:'', owner_name:'',market_phone :0,owner_phone:0,email:'',activity_id:1})
// console.log(storeData);
// }
// else
// {
// alert("please check again");
// }
};

  
   
    return(
      <>
      </>
    );
}


export default StoreRegisterForm
