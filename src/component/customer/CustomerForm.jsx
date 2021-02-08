import React , {useState } from 'react'
import logo from '../../image/logo.png';
import { useDispatch, useSelector} from 'react-redux';
import { addCustomer } from '../../redux/Actions/customer';
import ErrorMessage from '../ErrorMessage';
import {Redirect} from 'react-router-dom';

const CustomerForm = () => {

    //const [error,setError] = useState(false);
    const isError = useSelector(state => state.customer.isError);
    const isDone = useSelector(state => state.customer.isDone);
    const storeInfo = useSelector(state => state.stores.storeInfo);
    const dispatch = useDispatch();
    const [customerData, setCustomerData] = useState({fullname:'', phone_number:'',building_number:'',postcode:'',market_code:'', city:'مصراتة'});
    
    const cityList = ['مصراتة','طرابلس','بنغازي','غريان','الخمس','زليتن','سرت','الزاوية'];
        if (storeInfo) 
        {
           customerData.building_number = storeInfo.building_number;
           customerData.postcode = storeInfo.postcode;
           customerData.market_code = storeInfo.code;
        }
    //console.log(storeInfo)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const {fullname,phone_number} = customerData
            
        if(fullname && phone_number )
        {
          //console.log(customerData);
         // dispatch(addCustomer(customerData));
          //setCustomerData({name:'',phone_number:'',building_number:'',postcode:''})
        }
        else
        {
            alert("error")
        }
    };
    
    const handleChange = (e)=> {
        setCustomerData({...customerData,[e.target.name]:e.target.value})
    }

    const form = () => (
        <div className="ui container centered grid log-container" > 
        <div className="ui form segment log-form" >
        <form className="ui form " >
        <img className="ui  medium image" alt="logo" src={logo}/>
        <h2 style={{textAlign:'center', fontFamily: 'inherit'}}>نموذج  المشاركة </h2>
        <h3 style={{fontFamily: 'inherit'}}>اسم المحل: {storeInfo.name} </h3>
        {isError? (<ErrorMessage head="Can't be added" content="you have to check your inputs" /> ): null}
        <div className="ui form" >
        <div className="field ">
            <label className="text">الاسم</label>
            <input type="text" name="fullname" onChange ={handleChange} placeholder="الاسم" required/>
        </div>

        <div className="field ">
            <label className="text  " >رقم الهاتف</label>
            <div className="ui labeled input ">
            <input type="tel" name="phone_number" placeholder="xxxxxxxx" onChange ={handleChange} maxLength="8" required/>
            <div className="ui label five wide field">09</div>
            </div>
        </div>
       
        <div className="field ">
            <label className="text" >المدينة</label>
            <select name="city" className="ui search dropdown drop-text" >
            <option value="">اختر مدينة</option>
            {
                cityList.map((city,index)=>
                <option value={city} key={index}>{city}</option>)
            }
            </select>
        </div>

        <div className="field">
        <button className="ui button text" type="submit" onClick={handleSubmit}>تسجيل</button>
        </div>
        </div>
        </form>
        </div>
        </div>
    )
    return (
        
        isDone?  <Redirect to="/Success" />:form()
    )
}

export default CustomerForm;

