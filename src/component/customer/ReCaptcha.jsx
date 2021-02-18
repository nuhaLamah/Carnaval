import React from 'react'
import Recaptcha  from 'react-recaptcha';

const ReCaptcha = ({setVerified})=> {

    
    const verifyCallback = (response) => {
      console.log(response);
      if(response)setVerified(true)
    }
     
    return (
        <Recaptcha
          sitekey="6LfxN10aAAAAAIJjjf87ZLgpO2mpP1T-Rzp_6mab"
          render="explicit"
          verifyCallback={verifyCallback}
        />
    );
}

export default ReCaptcha;



