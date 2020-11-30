import React, { useState } from 'react';
import Song from '../Song/Song';
import styled from 'styled-components';
//import { DataGrid } from '@material-ui/data-grid';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

//#region CSS
const AlbumImage = styled.img`
    border-radius: 13px;
`;

const AlbumContainer = styled.div`
    margin-bottom: 20px;
`;

const StyledTableCell = withStyles((theme) => ({
    head: {
        border: 'none',
    },
    body: {
        fontSize: 14,
        border: 'none',
    },
}))(TableCell);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
    paper: {
        backgroundColor: '#ffffff00',
        marginTop: '20px',
        boxShadow: 'none',
    }
});
//#endregion

function Album(props) {
    const classes = useStyles();
    return (
        <AlbumContainer>
            <AlbumImage className="album-image" src={props.imageUrl} style={{ height: '140px' }} />
            <TableContainer component={Paper} className={classes.paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Song Name</StyledTableCell>
                            <StyledTableCell align="left">{/*artists column*/}</StyledTableCell>
                            <StyledTableCell align="right">{/*add song to library column*/}</StyledTableCell>
                            <StyledTableCell align="right">{/*add song to listen later list*/}</StyledTableCell>
                            <StyledTableCell align="right">{/*add song to playlist*/}</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.songs.map((song) => (
                            <Song {...song} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </AlbumContainer>
    )
};

export default Album;