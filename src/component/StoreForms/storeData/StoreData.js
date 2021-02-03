import React from 'react'
import { Link } from 'react-router-dom';

const StoreData = ({match})=>{

    console.log(match.params.code);
    return (
        <center>
        
       <h1>Hello Store Owner </h1>
       <h2>you have registerd successfully</h2>
       <h3>And Your code is :{`${match.params.code}`}</h3>
       <Link to ={'/'}><button>Back to home</button></Link>
        </center>
    )

}

export default StoreData;