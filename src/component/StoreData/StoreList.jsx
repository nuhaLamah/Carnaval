import React , {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {filterStores , getStores} from '../../redux/Actions/stores';
import Store from './Store';
import Input from '../login/components/InputField';



const StoreList = ()=> {
  
      
    const dispatch = useDispatch();

    useEffect(() => {
    dispatch(getStores());
    }, [dispatch]);

     
      // const [search,setSearchInput] = useState("");
      const markets = useSelector((markets) => markets.stores)
      const handleInput =(e)=> {   
        // setSearchInput(e.target.value)
        dispatch(filterStores(e.target.value));
      }
      
    return (
      <div>
        <div className="ui segment">
        <div class="ui input focus">
        <Input handleInput={handleInput} placeholder="بحث" />
        </div>
        </div>
        <table className="ui blue table">
          <thead>
            <tr>
              <th className="center aligned">اسم المحل</th>
              <th className="center aligned">العنوان</th>
              <th className="center aligned">نوع النشاط</th>
              <th className="center aligned">رقم الهاتف</th>
              <th className="center aligned">عمليات</th>
            </tr>
          </thead>
          <tbody>
          {
          markets.map((store,index)=>
          <Store store = {store} key={index} />         
          )
        }
          </tbody>
          </table>
      
      
      
   
      </div>
    
    )
}

export default StoreList