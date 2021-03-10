// Qr Reader component for Scan qr 
import React , {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import QrReader from 'react-qr-reader';
import { clearInfo } from '../../redux/Actions/customer';
import './QrReader.css';
import { Redirect } from 'react-router-dom';


const QrScanner = () => {
  // Declaration of variabls and states
  const dispatch = useDispatch();
  const [data, setData] = useState(null);

  // Clearing Store info after scannig process
    useEffect(() => {
        dispatch(clearInfo());
    },[dispatch]);
  
  //Scan  and handle Qr code
  const handleScan = code => {
    if(code) { 
      setData(code);
    }
  }
  // Qr Reader Error Handling 
  const handleError = err => {
    alert(err)
  }
  
    return (
      <div className="center aligned reader" >
       {/* after Scanning the Qr if there is data in it  redirect the user to the customer form otherwise show camera scan*/}
      {data != null?
       <Redirect to={`/Customer/${data.split('/').slice(-1)}`}  />:
        <div className="content" >
          <div className="border"> </div>
          <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%', height: '100%', postion: 'relative',
          borderRadius: '25px'}}/>
        </div>   
      }
      </div>
    )
}

export default QrScanner;