import React , {useEffect} from 'react';
import {useDispatch} from 'react-redux'
import {filterStores , getStores} from '../../redux/Actions/stores'
import Store from './Store'
import Input from '../login/components/InputField'
import { useSelector } from 'react-redux';
import { TableBody,Paper,Table, TableCell ,TableContainer , TableHead , TableRow }from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

const StoreList = ()=> {
    const useStyles = makeStyles({
        table: {
         maxWidth: "80%",
        },
      });
      
    const dispatch = useDispatch();

    useEffect(() => {
    dispatch(getStores());
    }, [dispatch]);

      const classes = useStyles();
     
      // const [search,setSearchInput] = useState("");
      const markets = useSelector((markets) => markets)
      const handleInput =(e)=> {   
        // setSearchInput(e.target.value)
        dispatch(filterStores(e.target.value));
      }
      
    return (
    <TableContainer component={Paper}>
      <Input handleInput={handleInput}/>
      
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
        <TableBody>
        {
          markets.map((store,index)=>
          <Store store = {store} key={index} />         
          )
        }

        </TableBody>
        </Table>
    </TableContainer>
    )
}

export default StoreList