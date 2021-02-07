import React , {useState , useEffect} from 'react';
import './style.css';
import { useDispatch , useSelector} from 'react-redux';
import {addStore} from '../../redux/Actions/stores';
import { useHistory } from "react-router-dom";
import  uniqueRandom from 'unique-random-at-depth';

const StoreData = ({storeDefaultData , address}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const data = useSelector((data)=>data.stores.address);

    const [storeData, setStoreData] = useState({name:'',owner_name:'',market_phone :0,owner_phone:0,email:'',category:'',postcode:'',building_number:'',code:''})
    const [checkbox,setCheckbox] = useState(true);
    const [storeCode , setStoreCode] = useState(0);
    
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
        <form className="ui form" onSubmit={handleSubmit}>
        <div className="ui form">
        <div className="field">
            <label className="text">Store Name</label>
            <input type="text" name="name" placeholder="Store Name" defaultValue={storeDefaultData.name} onChange={handleChange}/>
        </div>
        <div className="field">
            <label className="text" >Owner Name</label>
            <input type="text" name="owner_name" placeholder="Owner Name"  onChange={handleChange}/>
        </div>
        <div className="field">
            <label className="text" >Store Phone</label>
            <input type="text" name="market_phone" placeholder="Store Phone" defaultValue ={storeDefaultData.phoneNumber} onChange={handleChange}/>
        </div>
        <div className="field">
            <label className="text" >Owner Phone</label>
            <input type="text" name="owner_phone" placeholder="Owner Phone" onChange={handleChange}/>
        </div>
        <div className="field">
            <label className="text" >Email</label>
            <input type="text" name="email" placeholder="Email" onChange={handleChange}/>
        </div>
        <div className="field">
            <label className="text">Activity Type</label>
            <input type="text" name="category" placeholder="Activity Type" defaultValue ={storeDefaultData.category} onChange={handleChange}/>
        </div>
        <div className="field">   
            <input type="checkbox" name = "isChecked" className="hidden" onClick={()=>setCheckbox(!checkbox)}/>
            <label>أوافق على شروط الاشتراك</label>
            </div>
        <div className="field"> 
        <button className="ui button text" disabled = {checkbox} type="submit">Register</button>
        </div>
        </div>
        </form>  
    );
}

export default StoreData;