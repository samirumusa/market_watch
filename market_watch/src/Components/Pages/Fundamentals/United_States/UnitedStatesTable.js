import React, {useEffect, useState} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(title,lastday, Previous,Current,Remark) {
  return {title, lastday, Previous, Current, Remark };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function UnitedStatesTable() {
  const [usaData, setusaData] = useState([]);
  const [retailSales, setretailSales] = useState([]);
  
  
  useEffect(() => {
   
    axios.get('http://localhost:5000/united_states/')
      .then(response => {
        setusaData(response.data)
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
      setretailSales(usaData,'USA_retail_sales')
      //console.log(retailSales)    
  }, [usaData]);
  
  /* function makeRow(data){

    return JSON.parse(data])
  
  } */
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Title</StyledTableCell>
            <StyledTableCell align="right">last Date</StyledTableCell>
            <StyledTableCell align="right">Previous</StyledTableCell>
            <StyledTableCell align="right">Current</StyledTableCell>
            <StyledTableCell align="right">Remark</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
      
          {usaData.map((row) => (
            
            <StyledTableRow key={row[0][0]}>
              <StyledTableCell component="th" scope="row">
                {row[0][0]}
              </StyledTableCell>
              
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right">{row[0][0]}</StyledTableCell>
              <StyledTableCell align="right">{row[0][0]}</StyledTableCell>
              <StyledTableCell align="right">{row[0][0]}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}