import React , {useState , useEffect } from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { addStore , clearInfo } from '../../redux/Actions/stores';
//import { Redirect } from "react-router-dom";
import  uniqueRandom from 'unique-random-at-depth';
import { Checkbox,Button, Modal } from 'semantic-ui-react';
import './style.css';


const StoreData = ({address }) => {
    const dispatch = useDispatch();
    
    const data = useSelector((data)=>data.stores.address);
    const [validInput,setValidInput] = useState ({status:false ,type:'' , msg:'الرجاء التاكد من صحة البيانات المدخلة'});
    const [storeData, setStoreData] = useState({name:'',owner_name:'',market_phone :0,owner_phone:0,email:'',category:'',postcode:'',building_number:'',code:0})
    const [checkbox,setCheckbox] = useState(true);
    const [open, setOpen] = useState(false);
    const [storeCode , setStoreCode] = useState(uniqueRandom(100000, 1000000, 50));
   
    useEffect(() => {
        if(data.status === 'valid'){
            storeData.name = data.name;
            storeData.market_phone = data.phoneNumber;
            storeData.category = data.category;
            storeData.postcode = address.code;
            storeData.building_number = address.number;
            storeData.code =storeCode;
          }
          dispatch(clearInfo());

     },[data,address,storeCode]);

    const handleChange =(e)=>{
        setStoreData({...storeData,[e.target.name]:e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(data);
        console.log(storeData);
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
   
    return (
        data?(
        <form className="ui form" onSubmit={handleSubmit}>
        <div className="ui form">
        <div className="field">
        <label className="text">اسم المحل</label>
            <input type="text" name="name" placeholder="اسم المحل" defaultValue={data.name} onChange ={handleChange} required  maxLength="40"/>
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
            <input type="text" name="market_phone"  defaultValue ={data.phoneNumber} placeholder="xxxxxxxx" onChange ={handleChangeOfNumber} maxLength="10"/>
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
            <input type="text" name="category" placeholder="نوع النشاط" defaultValue ={data.category} onChange={handleChange}/>
        </div>
        <div className="field" >   
            <Checkbox name = "isChecked" onClick={()=>setCheckbox(!checkbox)} className="checkbox" />
             <span> اوافق على  </span>
            <Modal
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            trigger={<b className="terms" >شروط الاشتراك</b>  }
            >
            <Modal.Header className="term-header">شروط الاشترك </Modal.Header>
            <Modal.Content   scrolling>
        
            <Modal.Description>
            <p className="term-desc">
            فيما يلي القوانين اللازم اتباعها للمشاركة في مهرجان مصراتة للتسوق
            </p>

            <ol className="term-list">
                <li>الالتزام بالإجراءات الوقائية من فيروس كورونا حسب الخطة الموضوعة اللجنة العليا .</li>
                <li>إلزام الموظفين والزوار بارتداء الكمامات داخل الجناح او المحل.</li>
                <li>توفير المعقمات الطبية داخل المحل .</li>
                <li>التقيد بإجراءات التباعد الإجتماعي مسافة واحد متر على الأقل.</li>
                <li>التقيد بعدم الإزدحام وذلك بتحديد العدد الكافي للتباعد الإجتماعي.</li>
                <li>توزيع كوبونات المهرجان مجانا بدون فرض قيمة على الزبون او اجباره على الشراء .</li>
            </ol>
            </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
            <Button onClick={() => setOpen(false)} primary>
            إغلاق
            </Button>
            </Modal.Actions>
            </Modal>
        
            
        </div>
            
        <div className="field"> 
        <button className="ui button text" disabled = {checkbox} type="submit">تـسـجـيـل</button>
        </div>
        </div>
     
        </form> ) :<></>
       
         
      
    );

}

export default StoreData;