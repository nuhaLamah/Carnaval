import React, { useState , useEffect} from 'react';
import logo from '../../image/logo.png';
import StoreData from './StoreData';
import { useDispatch , useSelector} from 'react-redux';
import { checkAddress  } from '../../redux/Actions/stores';
import ErrorMessage from '../ErrorMessage';
import './style.css';

const StoreAddress = () =>{
    const dispatch = useDispatch();
    const isError = useSelector(state => state.stores.isError);
    const isInValid = useSelector(state => state.stores.isInValid);
    const storeDefaultData = useSelector((addressData) => addressData.stores.address);
    const [showButton , setShowButton] = useState(false);
    const [address , setAddress] = useState({code:'', number:''});
    const [validInput,setValidInput] = useState ({status:false ,type:'' , msg:'الرجاء التاكد من صحة البيانات المدخلة'});
    
    useEffect(() => {
        if(storeDefaultData.status === 'valid')
            setShowButton(true); 
        
         
                   
    },[storeDefaultData]);
   
    const handleAdressSubmit = (e) =>{
        e.preventDefault();
        const {code , number} = address
        if(code && number && validInput.status===false) 
            dispatch(checkAddress(`${address.code}+${address.number}`));
        else
            setValidInput({status : true ,type:'generalError', msg:"يجب أن لا تكون المدخلات فارغة "})
    };
    const handleChange = (e)=>{
        setAddress({...address,[e.target.name]:e.target.value})
    }
    const handleChangeOfNumber = (e)=>{
        if(isNaN(e.target.value))
        setValidInput({status : true , type :"NumberError" , msg:"يجب إدخال رقم فقط"})
        else{
        setAddress({...address,[e.target.name]:e.target.value})
        setValidInput({status : false,type:"" , msg:""})
    }
    }
   
    return (
        <div className="ui container centered grid log-container" > 
        <div className="ui form segment log-form" >
        
        <form className="ui form" >
        <img className="ui centered medium image" alt="logo" src={logo}/>
        <h2 style={{textAlign:'center', fontFamily: 'inherit'}}>نموذج  التسجيل </h2>
        {isError ||isInValid || (validInput.status && validInput.type=== "generalError")? (<ErrorMessage head="لقد حدث خطأ " content="لا يمكن التحقق من العنوان الرجاء التأكد من البيانات المدخلة " /> ): null}
        {/* --------- Makani validation ------------ */}
        <div className="ui form">
        <div className="field">
            <label className="text">الرمز البريدي</label>
            <input type="text" name="code" onChange ={handleChange} placeholder="الرمز البريدي" maxLength="5" required/>
        </div>
        <div className={validInput.status && validInput.type=== "NumberError" ?'error field':'field'}>
            <label className="text" >رقم المبنى</label>
            <input type="text" name="number" placeholder="رقم المبنى" onChange ={handleChangeOfNumber} maxLength="4" required/>
            <div className="five wide field">
            <p>{validInput.status && validInput.type=== "NumberError" ?`${validInput.msg}`:''}</p>
            </div>
        </div>
        <div className="field">
        {!showButton ? (<button className="ui button text" type="submit" onClick={handleAdressSubmit}>تحقق</button>):<></>}
        </div>
        </div>
        </form>
    
        {/* --------- divider ------------ */}
        {showButton ? (
            <div className="ui section divider"></div>
        ):<></>}
        {/* --------- Store Rgisteration ------------ */}
        {showButton ? (
            <StoreData  address={address} />
        ):null}
        </div>

       
        </div>
    );
}

export default StoreAddress ;   

