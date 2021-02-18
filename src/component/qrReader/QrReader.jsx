import React , {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import QrReader from 'react-qr-reader';

import { getStoreInfo } from '../../redux/Actions/stores';
import { clearInfo } from '../../redux/Actions/customer';

import CustomerForm from '../customer/CustomerForm';
import './QrReader.css';
import { Redirect } from 'react-router-dom';


const QrScanner = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState();

    useEffect(() => {
        dispatch(clearInfo());
    },[dispatch]);
  const handleScan = code => {
  //  console.log(data);
    if(code) setData(code);
    //
  }
  const handleError = err => {
    console.error(err)
    alert(err)
  }
  
    return (
      <div className="center aligned reader" >
       
      {data?
       <Redirect to={`/${data.split('/')[-1]}`}  />:
        <div className="content" >
          <div className="border"> </div>
          <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%', height: '100%', postion: 'relative',
          borderRadius: '25px'}}
        />
        </div>   
      }
      </div>
    )
}

export default QrScanner;