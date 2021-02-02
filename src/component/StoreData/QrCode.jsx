import React, {Component} from 'react';


import { QRCode } from "react-qr-svg";
 

class QrCode extends Component {
  render(){
    const { innerWidth: width, innerHeight: height } = window;
    console.log(width, height)
    const size =  width<500? width*.8: 600;

        return (
          <div className="ui center aligned container">
            <QRCode
                bgColor="#FFFFFF"
                fgColor="#000000"
                level="Q"
                style={{width: size }}
                value="some text"
            />
            </div>
        );
        
    }
}

export default QrCode;
