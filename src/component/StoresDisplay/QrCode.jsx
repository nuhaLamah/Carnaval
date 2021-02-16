import React, {Component} from 'react';


import { QRCode } from "react-qr-svg";
 

class QrCode extends Component {

  render(){
    const size =  600;
  
        return (
          <div className="center-all" >
            <QRCode
                bgColor="#FFFFFF"
                fgColor="#000000"
                level="Q"
                style={{marginTop:0, width: size }}
                value= {this.props.code}
            />
            </div>
        );
        
    }
}

export default QrCode;
