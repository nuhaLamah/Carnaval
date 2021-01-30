import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Store from './Store'
import {  useSelector } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const StoreList = ()=> {
    const useStyles = makeStyles({
        table: {
         maxWidth: "80%",
        },
      });
      const classes = useStyles();
      const markets = useSelector((markets) => markets)
      //console.log(markets);   
      
   
    return (

    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">اسم المحل</TableCell>
            <TableCell align="center">العنوان</TableCell>
            <TableCell align="center">نوع النشاط</TableCell>
            <TableCell align="center">رقم الهاتف</TableCell>
            <TableCell align="center">عمليات</TableCell>
          </TableRow>
        </TableHead>
        <Store markets = {markets} />
        </Table>
    </TableContainer>
    )
}

export default StoreList