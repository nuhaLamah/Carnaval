import React, {Component} from 'react';


import { QRCode } from "react-qr-svg";
 

class QrCode extends Component {

  render(){
    const { innerWidth: width, innerHeight: height } = window;
    console.log(width, height)
    const size =  width<500? width*.8: 600;
    console.log(this.props)
    const text = this.props.code;
    console.log(text)
        return (
          <div className="ui center aligned container" style={{paddingTop:100}}>
            <QRCode
                bgColor="#FFFFFF"
                fgColor="#000000"
                level="Q"
                style={{width: size }}
                value= {this.props.code}
            />
            </div>
        );
        
    }
}

export default QrCode;
