import {useEffect, useState} from "react";
import axios from "axios";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./userStyle.css";

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
const Users=()=>{

    const [users, setUsers]=useState([]);

    useEffect(()=>
    {
        axios.get("https://jsonplaceholder.typicode.com/users").then(resp=>{
            setUsers(resp.data);
            console.log(resp.data);
        })
    },[]);

    return(
        <>
<div className="container">
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
                <TableRow>
                    <StyledTableCell>Id</StyledTableCell>
                    <StyledTableCell align="right">Name</StyledTableCell>
                    <StyledTableCell align="right">Email</StyledTableCell>
                    <StyledTableCell align="right">City</StyledTableCell>
                    <StyledTableCell align="right">Company</StyledTableCell>
                    <StyledTableCell align="right">Phone</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {users.map((user) => (
                    <StyledTableRow key={user.id}>
                        <StyledTableCell component="th" scope="row">
                            {user.id}
                        </StyledTableCell>
                        <StyledTableCell align="right">{user.name}</StyledTableCell>
                        <StyledTableCell align="right">{user.email}</StyledTableCell>
                        <StyledTableCell align="right">{user.address.city}</StyledTableCell>
                        <StyledTableCell align="right">{user.company.name}</StyledTableCell>
                        <StyledTableCell align="right">{user.phone}</StyledTableCell>
                    </StyledTableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
</div>
        </>
    )
}

export default Users;