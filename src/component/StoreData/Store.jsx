import React from 'react';
import {Link} from 'react-router-dom';

const Store = ({store})=> {
    return (
          <tr>
            <td className="center aligned"> {store.name} </td>
            <td className="center aligned">{store.market_phone} </td>
            <td className="center aligned">{store.activity_id} </td>
            <td className="center aligned">{store.market_phone} </td>
            <td className="center aligned"><Link to = {`/store-page/${store.name}`}>
            <button className="ui blue button">test</button></Link> </td>
            </tr> 
    )
}

export default Store