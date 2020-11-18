import React from 'react';
import styled from 'styled-components';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import SongArtists from '../SongArtists/SongArtists';
import { withStyles } from '@material-ui/core/styles';

var IsAuthenticated = true;

//#region CSS
const StyledTableCell = withStyles((theme) => ({
    head: {
        border: 'none',
    },
    body: {
        fontSize: 14,
        border: 'none',
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: "rgb(50 138 158 / 5%)",
        },
        "&:hover": {
            backgroundColor: "rgba(50, 138, 158, 0.07843137)"
        }
    },
}))(TableRow);

const SongButton = styled.img`
    height: 17px;
`;
//#endregion

//#region functions
function AddSongToLibrary(songId, songName = '', artist = '') {
    alert(`add song to library: ${songName} - ${artist}. Song ID: ${songId} `);
}

function AddSongToListenLater(songId, songName = '', artist = '') {
    alert(`add song to listen later list: ${songName} - ${artist}. Song ID: ${songId} `);
}

function AddSongToPlaylist(songId, songName = '', artist = '') {
    alert(`add song to playlist: ${songName} - ${artist}. Song ID: ${songId} `);
}
//#endregion

const Song = (props) => (
    <>
        <StyledTableRow key={props.name}>
            <StyledTableCell align='left' component="th" scope="row">
                {props.name}
            </StyledTableCell>
            <StyledTableCell align="left">
                <SongArtists artists={props.artists} />
            </StyledTableCell>
            <StyledTableCell align="right"> {/*Add to Library*/}
                <SongButton
                    src="/Assets/Images/Other/plus-symbol.png"
                    onClick={() => AddSongToLibrary(props.id, props.name, props.artists)}
                />
            </StyledTableCell>
            <StyledTableCell align="right"> {/*Listen Later*/}
                <SongButton
                    src="/Assets/Images/Other/listen-later-icon.png"
                    onClick={() => AddSongToListenLater(props.id, props.name, props.artists)}
                />
            </StyledTableCell>
            <StyledTableCell align="right"> {/*Add to Playlist*/}
                <SongButton
                    src="/Assets/Images/Other/add-to-playlist-icon.png"
                    onClick={() => AddSongToPlaylist(props.id, props.name, props.artists)}
                />
            </StyledTableCell>
        </StyledTableRow>
    </>
);

export default Song;