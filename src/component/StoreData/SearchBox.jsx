import { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';

import {filterStores} from '../../redux/Actions/stores';
import Input from '../login/components/InputField';

const SearchBox = (props) => {

    const dispatch = useDispatch();
    const [term, setTerm] = useState('');

    useEffect(() => {
       const timer = setTimeout(() => {
          dispatch(filterStores(term, 1, 5));
          console.log(term)
       }, 1000);

        return () => clearTimeout(timer);
      }, [term, dispatch]);

    const handleInput= (e) =>{
        setTerm(e.target.value);
    } 
    
    return( 
                <Input onChange={handleInput} placeholder="بحث"  icon="search icon" color="#fef9e7" borderColor="#e5e7e9"/>
            );

}


export default SearchBox;
