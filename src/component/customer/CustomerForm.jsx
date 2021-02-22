import React , {useEffect, useState } from 'react'
import logo from '../../image/logo.png';
import { useDispatch, useSelector} from 'react-redux';
import { addCustomer } from '../../redux/Actions/customer';
import { getStoreInfo } from '../../redux/Actions/stores';
import ErrorMessage from '../ErrorMessage';
import ReCaptcha from './ReCaptcha';
import Footer from '../Footer';

const CustomerForm = (props) => {

    const dispatch = useDispatch();
    const isError = useSelector(state => state.customer.isError);
    const isDone = useSelector(state => state.customer.isDone);
    const storeInfo = useSelector(state => state.stores.storeInfo);
   
    const [verfied,setVerified] = useState(false)
    const [validInput,setValidInput] = useState ({status:false ,type:'' , msg:'الرجاء التاكد من صحة البيانات المدخلة'});
    const [customerData, setCustomerData] = useState({fullname:'', phonenumber:'',buildingnumber:'',postcode:'',shopname:'', city:''});
    
    const cityList = ['مصراتة','طرابلس','بنغازي','غريان','الخمس','زليتن','سرت','الزاوية'];
        if (storeInfo) 
        {
           customerData.buildingnumber = storeInfo.building_number;
           customerData.postcode = storeInfo.postcode;
           customerData.shopname = storeInfo.name;
        }   
    useEffect(()=>{
        dispatch(getStoreInfo(props.match.params.storeCode));
    });
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const {fullname,phonenumber,city} = customerData      
        if(fullname && phonenumber&&city && !validInput.status)
        {
          dispatch(addCustomer(customerData));
        }
        else
        {
          setValidInput({status : true ,type:'generalError', msg:" يجب أن تكون المدخلات غير فارغة وصحيحة "})
        }
    };
    
    const handleChangeOfNumber = (e)=>{
        if(isNaN(e.target.value))
        setValidInput({status : true , type :"NumberError" , msg:"يجب إدخال رقم فقط"})
        else{
            const number = `09${e.target.value}`
            setCustomerData({...customerData,[e.target.name]:number})
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
        <div>
            <div className="ui container centered grid reg-container" >
            <div className="ui form segment log-form" >
            <form className="ui form " >
            <img className="ui centered medium image" alt="logo" src={logo}/>
            <h2 style={{textAlign:'center', fontFamily: 'inherit'}}>نموذج  المشاركة </h2>
            <h3 style={{fontFamily: 'inherit'}}>اسم المحل: {storeInfo.name} </h3>
            {isError || (validInput.status && validInput.type=== "generalError") ? (<ErrorMessage head="لقد حدث خطأ" content={validInput.msg?validInput.msg:"لا يمكنك التسجيل الآن"} /> ): null}
            <div className="ui form" >
            <div className={validInput.status && validInput.type=== "TextError" ?'error field':'field'}>
                <label className="text required">الاسم</label>
                <input type="text" name="fullname" onChange ={handleChangeOfText} placeholder="الاسم" required  maxLength="40"/>
                <div className="five wide field">
                <p>{validInput.status && validInput.type=== "TextError" ?`${validInput.msg}`:''}</p>
                </div>  
            </div>

            <div className={validInput.status && validInput.type=== "NumberError" ?'error field':'field'}>
                <label className="text required" >رقم الهاتف</label>
                <div className="ui labeled input ">
                <input type="tel" name="phonenumber" placeholder="xxxxxxxx" onChange ={handleChangeOfNumber}  maxLength="8" required/>
                <div className="ui label five wide field">09</div>
                <p>{validInput.status && validInput.type=== "NumberError" ?`${validInput.msg}`:''}</p>
                </div>
            </div>
        
            <div className="field ">
                <label className="text required" >المدينة</label>
                <select name="city" className="ui search dropdown drop-text" onChange={handleChangeOfText}>
                <option value="">اختر مدينة</option>
                {
                    cityList.map((city,index)=>
                    <option value={city} key={index}>{city}</option>)
                }
                </select>
            </div>
            <div className="ui centered medium image" style={{marginTop:"30px"}}>
            <ReCaptcha setVerified={setVerified}/>
            </div>
            <div className="field">
            <button className="ui button text" type="submit" onClick={handleSubmit} disabled ={!verfied} >تسجيل</button>
            </div>
            </div>
            </form>
            </div>
            </div>
            <Footer />
        </div>
    )
    return ( 
        isDone ? (()=>{
            setCustomerData({fullname:'', phonenumber:'',buildingnumber:'',postcode:'',shopname:'', city:''});
            
        }): storeInfo? form() : <></>
    )
}

export default CustomerForm;

