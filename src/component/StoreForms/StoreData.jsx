import React , {useState , useEffect} from 'react';
import { useDispatch , useSelector} from 'react-redux';
import {addStore} from '../../redux/Actions/stores';
import { Redirect } from "react-router-dom";
import  uniqueRandom from 'unique-random-at-depth';
import Modal from 'react-modal';
import './style.css';


const StoreData = ({storeDefaultData , address , showButton}) => {
    const dispatch = useDispatch();
    
    const data = useSelector((data)=>data.stores.address);
    const isDone = useSelector(state => state.stores.isDone);
   
    const [storeCode , setStoreCode] = useState(uniqueRandom(100000, 1000000, 50));
    const [validInput,setValidInput] = useState ({status:false ,type:'' , msg:'الرجاء التاكد من صحة البيانات المدخلة'});
    const [storeData, setStoreData] = useState({name:'',owner_name:'',market_phone :0,owner_phone:0,email:'',category:'',postcode:'',building_number:'',code:storeCode})
    const [checkbox,setCheckbox] = useState(false);
    const [open, setOpen] = useState(false)

    useEffect(() => {
        //setStoreCode(uniqueRandom(100000, 1000000, 50));
        if (data.status === 'valid') 
        {
          storeData.name = storeDefaultData.name;
          storeData.market_phone = storeDefaultData.phoneNumber;
          storeData.category = storeDefaultData.category;
          storeData.postcode = address.code;
          storeData.building_number = address.number;
          //storeData.code =
        }
    },[data.status]);

    const handleChange =(e)=>{
        setStoreData({...storeData,[e.target.name]:e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(validInput.status===false) {
        dispatch(addStore(storeData));  
        setStoreData({name:'',owner_name:'',market_phone :0,owner_phone:0,email:'',category:'',postcode:'',building_number:'',code:0})
        setStoreCode(0);
        }

        else
        setValidInput({status : true ,type:'generalError', msg:"يجب أن لا تكون المدخلات فارغة "})
    };

    const handleChangeOfNumber = (e)=>{
        if(isNaN(e.target.value))
        setValidInput({status : true , type :"NumberError" , msg:"يجب إدخال رقم فقط"})
        else{
            setStoreData({...storeData,[e.target.name]:e.target.value});
            setValidInput({status : false,type:"" , msg:""})
        }
    }
    const handleChangeOfText = (e)=>{
        let format = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
        if(!isNaN(e.target.value)  || format.test(e.target.value))
        setValidInput({status : true , type :"TextError" , msg:"يجب ادخال حروف فقط"})
        else{
            setStoreData({...storeData,[e.target.name]:e.target.value});
            setValidInput({status : false,type:"" , msg:""})
        }
    }
    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
      };
    return (
        showButton?
        <form className="ui form" onSubmit={handleSubmit}>
        <div className="ui form">
        <div className="field">
        <label className="text">اسم المحل</label>
            <input type="text" name="name" placeholder="اسم المحل" defaultValue={storeDefaultData.name} onChange ={handleChange} required  maxLength="40"/>
        </div>
        <div className={validInput.status && validInput.type=== "TextError" ?'error field':'field'}>
            <label className="text" >اسم صاحب المحل</label>
            <input type="text" name="owner_name" placeholder="اسم صاحب المحل"  onChange={handleChangeOfText}/>
            <div className="five wide field">
            <p>{validInput.status && validInput.type=== "TextError" ?`${validInput.msg}`:''}</p>
            </div>  
        </div>
        <div className={validInput.status && validInput.type=== "NumberError" ?'error field':'field'}>
            <label className="text" >رقم هاتف المحل</label>
            <input type="text" name="market_phone"  defaultValue ={storeDefaultData.phoneNumber} placeholder="xxxxxxxx" onChange ={handleChangeOfNumber} maxLength="10"/>
            <p>{validInput.status && validInput.type=== "NumberError" ?`${validInput.msg}`:''}</p>
        </div>

        <div className={validInput.status && validInput.type=== "NumberError" ?'error field':'field'}>
            <label className="text" >رقم هاتف صاحب المحل</label>
            <input type="text" name="owner_phone" placeholder="xxxxxxxx" onChange ={handleChangeOfNumber} maxLength="10"/>
            <p>{validInput.status && validInput.type=== "NumberError" ?`${validInput.msg}`:''}</p>
        </div>
        <div className="field">
            <label className="text" >البريد الالكتروني</label>
            <input type="text" name="email" placeholder="البريد الالكتروني" onChange={handleChange}/>
        </div>
        <div className="field">
            <label className="text">نوع النشاط</label>
            <input type="text" name="category" placeholder="نوع النشاط" defaultValue ={storeDefaultData.category} onChange={handleChange}/>
        </div>
        <div className="field" >   
         <input className="checkbox" type="checkbox" name = "isChecked" onClick={()=>setCheckbox(!checkbox)} /> 
             <span> أوافق على  </span>
            <span className="terms" onClick={(e) => {setOpen(true)}}>شروط الاشتراك</span>
            <div>
        
        <Modal
          isOpen={open}  
          onRequestClose={() => setOpen(false)}
          ariaHideApp={false}
          contentLabel="Terms Modal"
           style={customStyles}
        >
          <div className = "term-header">شروط الاشتراك</div>
          <div className="term-desc">
            فيما يلي القوانين اللازم اتباعها للمشاركة في مهرجان مصراتة للتسوق
          </div>
          <ol className="term-list">
                <li>الالتزام بالإجراءات الوقائية من فيروس كورونا حسب الخطة الموضوعة اللجنة العليا .</li>
                <li>إلزام الموظفين والزوار بارتداء الكمامات داخل الجناح او المحل.</li>
                <li>توفير المعقمات الطبية داخل المحل .</li>
                <li>التقيد بإجراءات التباعد الإجتماعي مسافة واحد متر على الأقل.</li>
                <li>التقيد بعدم الإزدحام وذلك بتحديد العدد الكافي للتباعد الإجتماعي.</li>
                <li>توزيع كوبونات المهرجان مجانا بدون فرض قيمة على الزبون او اجباره على الشراء .</li>
            </ol>
            <button className="button primary" onClick={() => setOpen(false)} >
            إغلاق
            </button>
        </Modal>
      </div>
        {isDone ? <Redirect to={`/Success/${storeCode}` }/> : <Redirect to={`/Store` }/>}         
        </div>          
        <div className="field"> 
        <button className="ui button text" disabled = {!checkbox} type="submit">تـسـجـيـل</button>
        </div>
        </div>
        </form>  :<></>
         
      
    );}


export default StoreData;