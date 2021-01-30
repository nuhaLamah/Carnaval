import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import {Link} from 'react-router-dom';
const Store = ({markets})=> {
  console.log(markets);
    return (
      
        <TableBody>
        {markets.map((store, index) => (
          
          <TableRow key={index}>
            <TableCell align="center"> {store.name} </TableCell>
            <TableCell align="center">{store.market_phone}</TableCell>
            <TableCell align="center">{store.activity_id}</TableCell>
            <TableCell align="center">{store.market_phone}</TableCell>
            <TableCell align="center"><Link to = {`/store-page/${store.name}`}><button>test</button></Link></TableCell>
          </TableRow>
        ))}
      </TableBody>
    )
}

export default Store