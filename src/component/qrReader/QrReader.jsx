import React, { Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import QrReader from 'react-qr-reader';
import { getStoreInfo } from '../../redux/Actions/stores';
import { Redirect } from 'react-router-dom';
 
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
      <div>
        {info?
        <Redirect to= "/RegisterCustomer" />:
          <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
        />
        
    }
      
      
      </div>
    )
  
}

export default QrScanner;