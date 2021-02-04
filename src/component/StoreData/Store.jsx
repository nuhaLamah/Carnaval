import React from 'react';
import {Link} from 'react-router-dom';


const Store = ({store})=> {
    return (
          <tr>
            <td className="center aligned"> {store.name} </td>
            <td className="center aligned">{store.postcode} </td>
            <td className="center aligned">{store.building_number} </td>

            <td className="center aligned">{store.owner_name} </td>
            <td className="center aligned"> {store.owner_phone} </td>
            <td className="center aligned">{store.market_phone} </td>

            <td className="center aligned">{store.email} </td>
            <td className="center aligned">{store.category} </td>
            <td className="center aligned">{store.code} </td> 

            <td className="center aligned">{store.state} </td>
            <td className="center aligned">{store.datetime} </td>
            

            <td className="center aligned"><Link to = {`/QRCode/${store.code}`}>
                <button className="ui basic grey large icon button">
                    <i className="qrcode icon"></i> 
                </button></Link> 
            
            </td>
            </tr> 

    )
}

export default Store