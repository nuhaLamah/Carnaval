import React, { useState  } from 'react';
import { useDispatch,useSelector } from 'react-redux';

import StoreRegisterForm from '../storeForm/StoreRegisterForm'
import { checkAddress } from '../../../redux/Actions/stores';


const AddressForm = () => {
    const dispatch = useDispatch();
    const [address , setAddress] = useState({code:'', number:''});
    const [showForm, setShowForm] = useState(false);
    
    const storeDefaultData = useSelector((addressData) => addressData.stores);
    

    const handleChange = (e)=>{
        setAddress({...address,[e.target.name]:e.target.value})
    }
    const showFormClick = () =>{
        if(storeDefaultData.status === "valid" )
            setShowForm(!showForm);
        }
    
    const handleSubmit = (e)=>{
    e.preventDefault();
   
    const {code , number} = address
    if(code && number)
    {
        dispatch(checkAddress(`${address.code}+${address.number}`));
        showFormClick();
        setAddress({code:'' , number:''});
        
    }
    else
    {
        alert("please check again");
    }
  };

    //console.log(storeData);
   
    
    
    return (
        <center>
        <form className="ui form segment log-form">
        <h1 style={{textAlign:'center'}}>عنوان مكاني </h1>
        <input type="text" name="code" placeholder="ABCD" onChange ={handleChange} />
        <input type="text" name="number" placeholder="1234" onChange ={handleChange} />
        {/* <Link to ={`/AddressForm/${address}`}> */}
             <button className="fluid ui blue button" type="submit"  onClick = {handleSubmit}>تحقق</button>
        {/* </Link> */}
        </form>
        

        
          
               <StoreRegisterForm storeDefaultData={storeDefaultData}/>
        
        </center>
    )
}

export default AddressForm;