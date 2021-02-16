import React from 'react'
import ReCAPTCHA from "react-google-recaptcha";

const ReCaptcha = ()=> {
 
    function onChange(value) {
        console.log("Captcha value:", value);
      }
       
    return (
       
            <ReCAPTCHA
              sitekey="6LcNhVoaAAAAAHAmxGVPfxtU_FeyIP3WfOtUNcdP"
              onChange={onChange}
            />
        
    );
}

export default ReCaptcha;



