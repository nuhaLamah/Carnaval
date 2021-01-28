import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper , Table, TableBody,TableCell,TableContainer, TableHead, TablePagination ,TableRow } from '@material-ui/core';
import { useSelector } from 'react-redux'


export default function StoreList() {


const columns = [
  { id: 'name',
    label: 'الاسم', 
    minWidth: 170 ,
    align: 'center',
    format: (value) => value.toLocaleString('ar-LY')
  },
  { id: 'code',
    label: 'اسم صاحب لمحل',
    align: 'center',
    minWidth: 100 ,
    format: (value) => value.toLocaleString('ar-LY')
  },
  {
    id: 'population',
    label: 'رقم الهاتف',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('ar-LY'),
  },
  {
    id: 'size',
    label: 'رقم هاتف صاحب المحل',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('ar-LY'),
  },
  {
    id: 'size',
    label: 'البريد الالكتروني ',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('ar-LY'),
  },
  {
    id: 'density',
    label: 'نوع النشاط التجاري',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'density',
    label: 'العنوان ',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'density',
    label: 'التفاصيل ',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
} 
const stores = useSelector((state) => state.state);
console.log(stores);
// const rows = [
//   createData(stores.name, 'IN', 1324171354, 3287263),
  
// ];

const useStyles = makeStyles({
  root: {
    width: '85%',
    border:"5px solid rgb(31, 143, 207)",
    
  },
  container: {
    maxHeight: 540,
    
  },
  table:{
    fontSize:"30px"
  }
});


  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
       {/* <h2>قائمة المحلات المسجلة</h2>
       <TableContainer className={classes.container}>
         <Table stickyHeader aria-label="sticky table" className={classes.table}>
           <TableHead>
            <TableRow>
               {columns.map((column) => ( 
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {stores.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={stores.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      /> */}
    </Paper>
  );
}
