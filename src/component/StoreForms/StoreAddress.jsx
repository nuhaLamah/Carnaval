// Store address validation component 
import React, { useState, useEffect } from 'react';
import logo from '../../image/logo.png';
import StoreData from './StoreData';
import { useDispatch, useSelector } from 'react-redux';
import { checkAddress } from '../../redux/Actions/stores';
import ErrorMessage from '../ErrorMessage';
import Footer from '../Footer';
import './style.css';

const StoreAddress = () => {
    // declarition of variabls and states
    const dispatch = useDispatch();
    const isError = useSelector(state => state.stores.isError);
    const isInValid = useSelector(state => state.stores.isInValid);
    const storeDefaultData = useSelector((addressData) => addressData.stores.address);
    const [showButton , setShowButton] = useState(false);
    const [address , setAddress] = useState({code:'', number:''});
    const [validInput,setValidInput] = useState ({status:false ,type:'generalError' , msg:'الرجاء التاكد من صحة البيانات المدخلة'});
    const categoryList = [1,4,12,15,18,22,24];

    // checking building category to be added 
    const checkCategory = (category) => {
        if (categoryList.includes(category)) {
            setValidInput({ status: true, type: 'generalError', msg: 'يجب أن يكون العنوان المدخل من ضمن التصنيفات المتاحة' });
            return true;
        }
        setValidInput({ status: false, type: "", msg: "" })
        return false;
    }
    // showing store data form after address validition process 
    useEffect(() => { 
        if(storeDefaultData.status === 'valid' && !checkCategory(storeDefaultData.CategoryId) )
            {
                setShowButton(true);
            }
          
    },[storeDefaultData ]);
    // handle submit of inserted address
    const handleAdressSubmit = (e) =>{
        e.preventDefault();
        const { code, number } = address
        if (code && number && validInput.status === false)
            dispatch(checkAddress(`${address.code}+${address.number}`));
        else
            setValidInput({ status: true, type: 'generalError', msg: " يجب ادخال الرمز البريدي ورقم المبنى" })
    };
    // handle change of postal code field
    const handleChange = (e) => {
        setAddress({ ...address, [e.target.name]: e.target.value })
    }
    // Handle change of building number field
    const handleChangeOfNumber = (e) => {
        if (isNaN(e.target.value))
            setValidInput({ status: true, type: "NumberError", msg: "يجب إدخال رقم فقط" })
        else {
            setAddress({ ...address, [e.target.name]: e.target.value })
            setValidInput({ status: false, type: "", msg: "" })
        }
    }


    return (
        <div style={{padding:"15px 0px"}}>
            {/* ------ Main container ------- */}
            <div className="main-container">
                <div className="ui container centered grid" >
                    <div className="ui form segment log-form" >
                        {/* -------- Address Form ---------- */}
                        <form className="ui form" >
                            <img className="ui centered medium image" alt="logo" src={logo} />
                            <h2 style={{ textAlign: 'center', fontFamily: 'inherit' }}>نموذج  التسجيل </h2>
                            {/*------  Errror message box  ----------- */}
                            {isError || isInValid || (validInput.status && validInput.type === "generalError") ? (<ErrorMessage head="لقد حدث خطأ " content={validInput.msg ? validInput.msg : " العنوان المدخل غير صحيح الرجاء التأكد"} />) : null}
                            {/* --------- Makani validation ------------ */}
                            <div className="ui form">   
                                <div className={validInput.status && validInput.type === "NumberError" ? 'error field' : 'field'}>
                                {/*------- Building number field -- ------ */}
                                    <label className="text required" >رقم المبنى</label>
                                    <input type="text" name="number" placeholder="رقم المبنى" onChange={handleChangeOfNumber} maxLength="4" required />
                                    <div className="five wide field">
                                        <p>{validInput.status && validInput.type === "NumberError" ? `${validInput.msg}` : ''}</p>
                                    </div>
                                </div>
                                {/* -------- postal code field --------- */}
                                <div className="field ">
                                    <label className="text required">الرمز البريدي</label>
                                    <input type="text" name="code" onChange={handleChange} placeholder="الرمز البريدي" maxLength="5" required />
                                </div>
                                {/* ------- validation button ---------- */}
                                <div className="field">
                                    {!showButton ? (<button className="ui button text" type="submit" onClick={handleAdressSubmit}>تحقق</button>) : <></>}
                                </div>
                            </div>
                        </form>
                        {!showButton ? <div className="address-reg">
                            ليس لديك عنوان،<a href="https://makani.ly/addplace/" target="_blank" rel="noreferrer"> قم بتسجيل نشاطك التجاري الآن</a>
                        </div> : <></>}
                        {/* --------- divider ------------ */}
                        {showButton ? (
                            <div className="ui section divider"></div>
                        ) : <></>}
                        {/* --------- Store Rgisteration Form------------ */}
                        {showButton ? (
                            <StoreData address={address} validInput={validInput} setValidInput={setValidInput} />
                        ) : null}
                         {/* --------- divider ------------ */}
                         <div className="ui section divider"></div>
                          {/* --------- Footer section ------------ */}
                        <Footer />
                    </div>
                    
                </div>
               
            </div>
        </div>
        
    );
}

export default StoreAddress;

