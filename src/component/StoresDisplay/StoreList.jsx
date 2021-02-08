import React , {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {filterStores} from '../../redux/Actions/stores';
import Store from './Store';
import NavBar from './NavBar';
import SearchBox from './SearchBox';
import PageButtons from './PageButtons';
import './StoreList.css';

const StoreList = ()=> {
  
      
    const dispatch = useDispatch();

    useEffect(() => {
    dispatch(filterStores("", 1, 5));
    }, [dispatch]);

     
      // const [search,setSearchInput] = useState("");
      const markets = useSelector((markets) => markets.stores.storeList)

      
    return (
      <div className="ui container main-div ">
        <NavBar>
        <SearchBox />
        </NavBar> 
        <div className="ui container stores-table ">
        {markets.length==0? <div className="ui container center aligned">لا يوجد نتائج</div>:
        <table className="ui table ">
          <thead>
            <tr>
              <th className="center aligned">اسم المحل</th>
              <th className="center aligned"> العنوان البريدي</th>
              <th className="center aligned"> رقم المبنى</th>

              <th className="center aligned"> اسم المالك</th>
              <th className="center aligned"> رقم هاتف المالك</th>
              <th className="center aligned">رقم هاتف المحل</th>

              <th className="center aligned">إيميل</th>
              <th className="center aligned">نوع النشاط</th>  
              <th className="center aligned">الكود</th>
              
              <th className="center aligned">الحالة</th>
              <th className="center aligned">التاريخ</th>
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
          </table> }
          </div>
          <p></p>
          <p></p>
          <p></p>
          <PageButtons />
      </div>
    
    )
}

export default StoreList