// Store data  component 
import React , {useState , useEffect } from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { addStore , clearInfo} from '../../redux/Actions/stores';
import  uniqueRandom from 'unique-random-at-depth';
import Modal from 'react-modal';
import './style.css';

const StoreData = ({address ,validInput ,setValidInput }) => {
    const dispatch = useDispatch();
    // declarion of variabls and statets 
    const data = useSelector((data)=>data.stores.address);
    const [storeData, setStoreData] = useState({name:'',owner_name:'',market_phone :'',owner_phone:'',email:'',category:'',postcode:'',building_number:'',code:0 , details:''})
    const [checkbox,setCheckbox] = useState(true);
    const [open, setOpen] = useState(false);
    const [storeCode , setStoreCode] = useState(uniqueRandom(100000, 1000000, 50));
    // assigning store information fetched from API Makani  to Store data to be used in store registration process 
    useEffect(() => {
        if(data.status === 'valid'){
            storeData.name = data.name;
            storeData.market_phone = data.phoneNumber;
            storeData.category = data.category;
            storeData.details = data.details;
            storeData.postcode = address.code;
            storeData.building_number = address.number;
            storeData.code =storeCode;
            dispatch(clearInfo()); 
          }
     },[data,address,storeCode,dispatch]);
      // handle submit button 
    const handleSubmit = async (e) => {
        e.preventDefault();
        const {owner_name ,owner_phone} = storeData
        if(isNaN(owner_name) && !isNaN(owner_phone) && owner_phone.length === 10 && validInput.status===false) {
           dispatch(addStore(storeData));  
           setStoreCode(0);
        }
        else
        {
            setValidInput({status : true ,type:'generalError', msg:"يجب أن  تكون المدخلات غير فارغة وصحيحة "})
        }
    };
    // handle change of Email field
    const handleChange =(e)=>{
        setStoreData({...storeData,[e.target.name]:e.target.value});
    }
    //handle input field which contain only number
    const handleChangeOfNumber = (e)=>{
        if(isNaN(e.target.value) && e.target.name === 'market_phone')
        setValidInput({status : true , type :"NumberErrorMarket" , msg:"يجب إدخال رقم فقط"})
        else if (isNaN(e.target.value) && e.target.name === 'owner_phone')
        setValidInput({status : true , type :"NumberErrorOwner" , msg:"يجب إدخال رقم فقط"})
        else{
            setStoreData({...storeData,[e.target.name]:e.target.value});
            setValidInput({status : false,type:"" , msg:""})
        }
    }
    //handle input fields which contain only text
    const handleChangeOfText = (e)=>{
        let format = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
        if(!isNaN(e.target.value)  || format.test(e.target.value))
        setValidInput({status : true , type :"TextError" , msg:"يجب ادخال حروف فقط"})
        else{
            setStoreData({...storeData,[e.target.name]:e.target.value});
            setValidInput({status : false,type:"" , msg:""})
        }
    }
    // styling of modal
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
        data?(
        // Form of store data 
        <form className="ui form" onSubmit={handleSubmit}>
        <div className="ui form">
        <div className="field">
        {/* store name field */}
        <label className="text ">اسم المحل</label>
            <input disabled type="text" name="name" placeholder="اسم المحل" defaultValue={data.name}  required  />
        </div>
        {/* details field */}
        <div className="field">
        <label className="text ">تفاصيل</label>
            <input disabled type="text" name="name" placeholder="تفاصيل" defaultValue={data.details}  required  />
        </div>
        {/* store owner name */}
        <div className={validInput.status && validInput.type=== "TextError" ?'error field':'field'}>
            <label className="text required" >اسم صاحب المحل</label>
            <input type="text" name="owner_name" placeholder="اسم صاحب المحل"  onChange={handleChangeOfText} maxLength="40"/>
            <div className="five wide field">
            <p>{validInput.status && validInput.type=== "TextError" ?`${validInput.msg}`:''}</p>
            </div>  
        </div>
        {/* store phone number field */}
        <div className={validInput.status && validInput.type=== "NumberErrorMarket" ?'error field':'field'}>
            <label className="text" >رقم هاتف المحل</label>
            <input type="text" name="market_phone"  defaultValue ={data.phoneNumber} placeholder="xxxxxxxx" onChange ={handleChangeOfNumber} maxLength="10"/>
            <p>{validInput.status && validInput.type=== "NumberErrorMarket" ?`${validInput.msg}`:''}</p>
        </div>
        {/* Owner phone number field */}
        <div className={validInput.status && validInput.type=== "NumberErrorOwner" ?'error field':'field'}>
            <label className="text required" >رقم هاتف صاحب المحل</label>
            <input type="text" name="owner_phone" placeholder="xxxxxxxx" onChange ={handleChangeOfNumber} maxLength="10"/>
            <p>{validInput.status && validInput.type=== "NumberErrorOwner" ?`${validInput.msg}`:''}</p>
        </div>
        {/* Email field */}
        <div className="field">
            <label className="text" >البريد الالكتروني</label>
            <input type="email" name="email" placeholder="البريد الالكتروني" onChange={handleChange}/>
        </div>
        {/* category field */}
        <div className="field ">
            <label  className="text">نوع النشاط</label>
            <input disabled type="text" name="category" placeholder="نوع النشاط" defaultValue ={data.category} />
        </div>
        {/* terms & conditions checkbox */}
        <div className="field" >   
         <input className="checkbox" type="checkbox" name = "isChecked" onClick={()=>setCheckbox(!checkbox)} /> 
             <span> أوافق على  </span>
            <span className="terms" onClick={(e) => {setOpen(true)}}>شروط الاشتراك</span><span className="required"></span>
            <div>
        {/* Modal of term and conditions */}
        <Modal
          isOpen={open}  
          onRequestClose={() => setOpen(false)}
          ariaHideApp={false}
          contentLabel="Terms Modal"
          style={customStyles}
        >
            {/* Modal Headeer */}
          <div className = "term-header">شروط الاشتراك</div>
          <div className="term-desc">
            فيما يلي القوانين اللازم اتباعها للمشاركة في مهرجان مصراتة للتسوق
          </div>
          {/* List of Terms */}
            <ol className="term-list">
                <li>الالتزام بالإجراءات الوقائية من فيروس كورونا حسب الخطة الموضوعة اللجنة العليا .</li>
                <li>إلزام الموظفين والزوار بارتداء الكمامات داخل الجناح او المحل.</li>
                <li>توفير المعقمات الطبية داخل المحل .</li>
                <li>التقيد بإجراءات التباعد الإجتماعي مسافة واحد متر على الأقل.</li>
                <li>التقيد بعدم الإزدحام وذلك بتحديد العدد الكافي للتباعد الإجتماعي.</li>
                <li>توزيع كوبونات المهرجان مجانا بدون فرض قيمة على الزبون او اجباره على الشراء .</li>
            </ol>
            {/* Close modal button */}
            <button className="button btn-terms primary" onClick={() => setOpen(false)} >
            إغلاق
            </button>
        </Modal>
        {/* End of modal of term and conditions */}
        </div>
        </div>    
        {/* Registeration - Submit button  */}
        <div className="field"> 
        <button className="ui button text" disabled = {checkbox} type="submit">تـسـجـيـل</button>
        </div>
        </div>
        </form> ) :<></>
    );
}

export default StoreData;