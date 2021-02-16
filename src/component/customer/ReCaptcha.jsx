import React from 'react'
import ReCAPTCHA from "react-google-recaptcha";

const ReCaptcha = ()=> {
 
    function onChange(value) {
        console.log("Captcha value:", value);
      }
       
    return (
       
            <ReCAPTCHA
              sitekey="6LdSdloaAAAAAB4IKUMPB1fS9oWNkV_kAF0HSlIZ"
              onChange={onChange}
            />
        
    );
}

export default ReCaptcha;



