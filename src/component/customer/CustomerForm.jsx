import React , {useState } from 'react'
import logo from '../../image/logo.png';
import { useDispatch, useSelector} from 'react-redux';
import { addCustomer } from '../../redux/Actions/customer';
import ErrorMessage from '../ErrorMessage';
import {Redirect} from 'react-router-dom';

const CustomerForm = () => {

    const isError = useSelector(state => state.customer.isError);
    const isDone = useSelector(state => state.customer.isDone);
    const storeInfo = useSelector(state => state.stores.storeInfo);
    const dispatch = useDispatch();
    const [validInput,setValidInput] = useState ({status:false ,type:'' , msg:'الرجاء التاكد من صحة البيانات المدخلة'});
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
          console.log(customerData);
          dispatch(addCustomer(customerData));
          setCustomerData({fullname:'', phone_number:'',building_number:'',postcode:'',market_code:'', city:'مصراتة'})
        }
        else
        {
          setValidInput({status : true ,type:'generalError', msg:"يجب أن لا تكون المدخلات فارغة "})
        }
    };
    
    const handleChangeOfNumber = (e)=>{
        if(isNaN(e.target.value))
        setValidInput({status : true , type :"NumberError" , msg:"يجب إدخال رقم فقط"})
        else{
            setCustomerData({...customerData,[e.target.name]:e.target.value})
            setValidInput({status : false,type:"" , msg:""})
        }
    }
    const handleChangeOfText = (e)=>{
        let format = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
        if(!isNaN(e.target.value)  || format.test(e.target.value))
        setValidInput({status : true , type :"TextError" , msg:"يجب ادخال حروف فقط"})
        else{
            setCustomerData({...customerData,[e.target.name]:e.target.value})
            setValidInput({status : false,type:"" , msg:""})
        }
    }

    const form = () => (
        <div className="ui container centered grid log-container" > 
        <div className="ui form segment log-form" >
        <form className="ui form " >
        <img className="ui centered medium image" alt="logo" src={logo}/>
        <h2 style={{textAlign:'center', fontFamily: 'inherit'}}>نموذج  المشاركة </h2>
        <h3 style={{fontFamily: 'inherit'}}>اسم المحل: {storeInfo.name} </h3>
        {isError || (validInput.status && validInput.type=== "generalError") ? (<ErrorMessage head="لقد حدث خطأ" content={validInput.msg} /> ): null}
        <div className="ui form" >
        <div className={validInput.status && validInput.type=== "TextError" ?'error field':'field'}>
            <label className="text">الاسم</label>
            <input type="text" name="fullname" onChange ={handleChangeOfText} placeholder="الاسم" required  maxLength="40"/>
            <div className="five wide field">
            <p>{validInput.status && validInput.type=== "TextError" ?`${validInput.msg}`:''}</p>
            </div>
            
        </div>

        <div className={validInput.status && validInput.type=== "NumberError" ?'error field':'field'}>
            <label className="text " >رقم الهاتف</label>
            <div className="ui labeled input ">
            <input type="tel" name="phone_number" placeholder="xxxxxxxx" onChange ={handleChangeOfNumber} minLength="8" maxLength="8" required/>
            <div className="ui label five wide field">09</div>
            <p>{validInput.status && validInput.type=== "NumberError" ?`${validInput.msg}`:''}</p>
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
        
        isDone ?  <Redirect to="/Success" />: storeInfo? form() : <></>
    )
}

export default CustomerForm;

