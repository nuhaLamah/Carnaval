//Recaptch component , take setVerified function as proprety from customer component to manage the submit button status
import React from 'react'
import Recaptcha from 'react-recaptcha';

const ReCaptcha = ({setVerified})=> {
  // fuction to check if the recaptch has been successfully passed
    const verifyCallback = (response) => {
      if(response) setVerified(true)
    }
  //fuction to disable the submit button when the recaptch expired 
   const expiredCallback = ()=>{
    setVerified(false)
   }
     
    return (
      <>
        <Recaptcha
          sitekey="6LfxN10aAAAAAIJjjf87ZLgpO2mpP1T-Rzp_6mab"
          render="explicit"
          expiredCallback={expiredCallback}
          verifyCallback={verifyCallback}
          hl="ar"
        />
        </>
    );
}

export default ReCaptcha;



