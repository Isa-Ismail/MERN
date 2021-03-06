import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { FaGraduationCap, FaTrash } from 'react-icons/fa';
import { Button } from '@material-ui/core';
import { deleteExperience } from '../../actions/profile';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 400,
  },
});

export default function CustomizedTables() {

  const dispatch = useDispatch()

  const rows = useSelector( data => data.profile.profile.experience )

  console.log(rows)

  const classes = useStyles();

  return (<>
    <TableContainer component={Paper} style={{width: '34rem', marginLeft: '5rem'}}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Company</StyledTableCell>
            <StyledTableCell align="right">Title</StyledTableCell>
            <StyledTableCell align="right">Duration (years)</StyledTableCell>
            <StyledTableCell align="right">Description</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell component="th" scope="row">
                {row.company}
              </StyledTableCell>
              <StyledTableCell align="right">{row.title}</StyledTableCell>
              <StyledTableCell align="right">{row.from} - {row.current === false ? row.to: 'Current'}</StyledTableCell>
              <StyledTableCell align="right">{row.description ? row.description : 'NaN'}</StyledTableCell>
              <Button onClick ={() => dispatch(deleteExperience(row._id))} style ={{backgroundColor: 'wheat', padding: '.8rem', marginTop:'1.3rem'}}><FaTrash style ={{color: 'darkred'}}/></Button>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer></>
  );
}
