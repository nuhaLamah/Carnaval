import { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';

import {filterStores} from '../../redux/Actions/stores';
import Input from '../login/components/InputField';

const SearchBox = (props) => {
    
    const dispatch = useDispatch();
    const [term, setTerm] = useState('');

    useEffect(() => {
       const timer = setTimeout(() => {
          dispatch(filterStores(term));
          console.log(term)
       }, 5000);

        return () => clearTimeout(timer);
      }, [term, dispatch]);

    const handleInput= (e) =>{
        setTerm(e.target.value);
    } 
    
    return(
            <div className="ui segment">
                <Input onChange={handleInput} placeholder="بحث" />
            </div>);

}


export default SearchBox;
