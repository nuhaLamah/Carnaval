import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { checkAddress } from '../../redux/Actions/stores';


const AddressForm = () => {
    const dispatch = useDispatch();
    const [address , setAddress] = useState({code:'', number:''});

    const handleChange = (e)=>{
        setAddress({...address,[e.target.name]:e.target.value})
    }
   

    const handleSubmit = (e)=>{
    e.preventDefault();
    const {code , number} = address
    console.log(address);
    if(code && number)
    {
      dispatch(checkAddress('F7P1J+1003'));
      setAddress({code , number})
   
    }
    else
    {
    alert("please check again");
    }
  };
  
    
    return (
        <center>
        <form className="ui form segment log-form">
        <h1 style={{textAlign:'center'}}>عنوان مكاني </h1>
        <input type="text" name="code" placeholder="ABCD" onChange ={handleChange} />
        <input type="text" name="number" placeholder="1234" onChange ={handleChange} />
         <Link to ={`/StoreRegisterForm/${address}`}><button className="fluid ui blue button" type="submit" onClick = {handleSubmit}>تحقق</button></Link>
        </form>
        </center>
    )
}

export default AddressForm;