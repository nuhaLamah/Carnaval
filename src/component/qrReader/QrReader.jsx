import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import QrReader from 'react-qr-reader';
import { getStoreInfo } from '../../redux/Actions/stores';
import './QrReader.css';
import CustomerForm from '../customer/CustomerForm';
 
const QrScanner = () => {
  const dispatch = useDispatch();
  const info = useSelector(state => state.stores.storeInfo);
  const handleScan = data => {
    console.log(data);
    if(data)dispatch(getStoreInfo(data));
  }
  const handleError = err => {
    console.error(err)
  }
  
    return (
      <div className="center aligned reader" >
       
      {info?
        <CustomerForm />:
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