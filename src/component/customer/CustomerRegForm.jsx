import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import { addCustomer } from '../../redux/Actions/customer'
import InputField from '../login/components/InputField'
const  CustomerRegForm = () => {
    // Handle Change Submit Button  - Add Store
  const dispatch = useDispatch();
  const [customerData, setCustomerData] = useState({fullname:'', phone_number:'',building_number:'123',postcode:'FDE125',market_code:'111111', city:'test'});

  const onChange =(e)=>{
    setCustomerData({...customerData,[e.target.name]:e.target.value})
   
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {fullname,phone_number} = customerData
    console.log(customerData);
    if(fullname && phone_number )
    {
      console.log(customerData);
      dispatch(addCustomer(customerData));
      //setCustomerData({name:'',phone_number:'',building_number:'',postcode:''})
    }
    else
    {
    alert("please check again");
    }
  };
 
    return (
        <center>
        <form className="ui form segment log-form" onSubmit = {handleSubmit}>
        <h1 style={{textAlign:'center'}}>نموذج  المشاركة </h1>
        <InputField name="fullname" placeholder="الاسم بالكامل" onChange ={onChange} />
        <InputField name="phone_number" placeholder="رقم الهاتف " onChange ={onChange} />
         <button className="fluid ui blue button" type="submit" >حفظ</button>
        </form>
        </center>
    )
}

export default CustomerRegForm;