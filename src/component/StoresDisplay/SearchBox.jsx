import { useState, useEffect } from 'react';

import {filterStores} from '../../redux/Actions/stores';
import Input from '../login/components/InputField';

const SearchBox = (props) => {

    const dispatch = props.dispatch;
    const [term, setTerm] = useState('');

    useEffect(() => {
      console.log('search')
      
       const timer = setTimeout(() => {
        if(term) (filterStores(term, 1, 5));
       }, 1000);

        return () => clearTimeout(timer);
      }, [term]);

    const handleInput= (e) =>{
        setTerm(e.target.value);
    } 
    
    return( 
                <Input onChange={handleInput} placeholder="بحث"  icon="search icon" color="#fef9e7" borderColor="#e5e7e9" width='500px'/>
            );

}


export default SearchBox;
