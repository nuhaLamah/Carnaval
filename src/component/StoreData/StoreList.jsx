import React , {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getStores} from '../../redux/Actions/stores';
import Store from './Store';
import SearchBox from './SearchBox';
import PageButtons from './PageButtons';


const StoreList = ()=> {
  
      
    const dispatch = useDispatch();

    useEffect(() => {
    dispatch(getStores());
    }, [dispatch]);

     
      // const [search,setSearchInput] = useState("");
      const markets = useSelector((markets) => markets.stores.storeList)

      
    return (
      <div>
       <SearchBox />
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
      
      
      
          <PageButtons />
      </div>
    
    )
}

export default StoreList