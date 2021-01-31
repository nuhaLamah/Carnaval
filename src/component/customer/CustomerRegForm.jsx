import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import { addCustomer } from '../../redux/Actions/customer'
import InputField from '../login/components/InputField'
const  CustomerRegForm = () => {
    // Handle Change Submit Button  - Add Store
  const dispatch = useDispatch();
  const [customerData, setCustomerData] = useState({name:'', phone:''});

  const handleChange =(e)=>{
    setCustomerData({...customerData,[e.target.name]:e.target.value})
}
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name,owner_name,phone,activity_id} = customerData
    if(name&& owner_name &&  phone &&  activity_id)
    {
      dispatch(addCustomer(customerData));
      setCustomerData({name:'',phone:''})
      console.log(customerData);
    }
    else
    {
    alert("please check again");
    }
  };
 
    return (
        <center>
        <form className="ui form segment log-form">
        <h1 style={{textAlign:'center'}}>نموذج  المشاركة </h1>
        <InputField name="name" placeholder="الاسم بالكامل" onChange ={handleChange} />
        <InputField name="phoneNumber" placeholder="رقم الهاتف " onChange ={handleChange} />
         <button className="fluid ui blue button" type="submit" onClick = {handleSubmit}>حفظ</button>
        </form>
        </center>
    )
}

export default CustomerRegForm;