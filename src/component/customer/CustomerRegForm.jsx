import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { addCustomer } from '../../redux/Actions/customer';
import InputField from '../login/components/InputField';
import ErrorMessage from '../ErrorMessage';
import {Redirect} from 'react-router-dom';

const  CustomerRegForm = () => {
  const isError = useSelector(state => state.customer.isError);
  const isDone = useSelector(state => state.customer.isDone);
  const storeInfo = useSelector(state => state.stores.storeInfo);
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

 const form = () => (
  <center>
    <form className="ui form segment log-form" onSubmit = {handleSubmit}>
    <h2 style={{textAlign:'center', fontFamily: 'inherit'}}>نموذج  المشاركة </h2>
    <h3 style={{fontFamily: 'inherit'}}>اسم المحل: {storeInfo.name}</h3>
    {isError? <ErrorMessage head="Can't be added" content="sdhks dsdh asdh" />: null}
    <InputField name="fullname" placeholder="الاسم بالكامل" type="text" onChange ={onChange} />
    <InputField name="phone_number" placeholder="رقم الهاتف "  type="tel" onChange ={onChange}  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
    <InputField name="city" placeholder="المدينة" type="text" onChange ={onChange} />
    <button className="fluid ui blue button" type="submit" >حفظ</button>
    </form>
  </center>
 );
    return (
    isDone?  <Redirect to="/Success/" />:
       form()
    )
}

export default CustomerRegForm;