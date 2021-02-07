import React , {useState , useEffect} from 'react';
import { useDispatch , useSelector} from 'react-redux';
import {addStore} from '../../redux/Actions/stores';
import { useHistory } from "react-router-dom";
import  uniqueRandom from 'unique-random-at-depth';
import { Checkbox,Button, Modal } from 'semantic-ui-react';
import './style.css';


const StoreData = ({storeDefaultData , address}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const data = useSelector((data)=>data.stores.address);

    const [storeData, setStoreData] = useState({name:'',owner_name:'',market_phone :0,owner_phone:0,email:'',category:'',postcode:'',building_number:'',code:''})
    const [checkbox,setCheckbox] = useState(true);
    const [storeCode , setStoreCode] = useState(0);
    const [open, setOpen] = useState(false)

    useEffect(() => {
        setStoreCode(uniqueRandom(100000, 1000000, 50));
        if (data.status === 'valid') 
        {
          storeData.name = storeDefaultData.name;
          storeData.market_phone = storeDefaultData.phoneNumber;
          storeData.category = storeDefaultData.category;
          storeData.postcode = address.code;
          storeData.building_Number = address.number;
          storeData.code = storeCode;
        }
    },[data.status]);

    const handleChange =(e)=>{
        setStoreData({...storeData,[e.target.name]:e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(addStore(storeData));
        //console.log(storeData);
        history.push(`/Success/${storeCode}`);
        setStoreData({name:'',owner_name:'',market_phone :0,owner_phone:0,email:'',category:'',postcode:'',building_number:'',code:''})
    };

    return (
        <>
        <form className="ui form" onSubmit={handleSubmit}>
        <div className="ui form">
        <div className="field">
            <label className="text">اسم المحل</label>
            <input type="text" name="name" placeholder="اسم المحل" defaultValue={storeDefaultData.name} onChange={handleChange}/>
        </div>
        <div className="field">
            <label className="text" >اسم صاحب المحل</label>
            <input type="text" name="owner_name" placeholder="اسم صاحب المحل"  onChange={handleChange}/>
        </div>
        <div className="field">
            <label className="text" >رقم هاتف المحل</label>
            <input type="text" name="market_phone" placeholder="رقم هاتف المحل" defaultValue ={storeDefaultData.phoneNumber} onChange={handleChange}/>
        </div>
        <div className="field">
            <label className="text" >رقم هاتف صاحب المحل</label>
            <input type="text" name="owner_phone" placeholder="رقم هاتف صاحب المحل" onChange={handleChange}/>
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
            <Checkbox name = "isChecked" onClick={()=>setCheckbox(!checkbox)} className="checkbox" />
             <span> اوافق على  </span>
            <Modal
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            trigger={<b className="terms" >شروط الاشتراك</b>  }
            >
            <Modal.Header className="term-header">شروط الاشترك </Modal.Header>
            <Modal.Content image scrolling>
        
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
        </form>  
         
       </>
    );
}

export default StoreData;