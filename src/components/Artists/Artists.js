import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import Link from 'next/link';
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ArtistImage from '../ArtistImage/ArtistImage';
import { makeStyles } from '@material-ui/core/styles';
import ArtistSearchBar from '../ArtistSearchBar/ArtistSearchBar';

//#region CSS
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const FollowIndicator = styled.div`
    height: 20px;
    width: 20px;
    bottom: 0;
    position: absolute;
    right: 0;
    border-radius: 50%;
    background-color: white;
    &.active {
        background-color: green;
    }
`;

const ArtistContainer = styled.div`
    position: relative;
`
//#endregion

const Artists = () => {
    

    //#region Functions
    function toggleArtistFollow(artistRec) {
        return {
            ...artistRec,
            following: !artistRec.following,
        }
    }

    async function followingToggleHandler(artistRec) {
        const toggledArtistRec = toggleArtistFollow(artistRec); //store following toggled artist
        const artistIndex = artists.map((artist) => artist.id).indexOf(artistRec.id); //get index of artist from artists list
        try {
            await axios.put(`http://localhost:4000/artists/$${artistRec.id}`, toggledArtistRec)
            setArtists //create new arra of artists, setting the state
                ([...artists.slice(0, artistIndex), toggledArtistRec, ...artists.slice(artistIndex + 1)]);
        } catch (e) {
            setStatus(REQUEST_STATUS.ERROR);
            setError(e);
        }
    }
    //#endregion

    const classes = useStyles();
    const [searchQuery, setSearchQuery] = useState('');
    //const [artists, setArtists] = useState([]);

    const REQUEST_STATUS = {
        LOADING: "loading",
        SUCCESS: "success",
        ERROR: "error"
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'GET_ALL_SUCCESS':
                return {
                    ...state,
                    status: REQUEST_STATUS.SUCCESS,
                    artists: action.artists,
                };
            case 'UPDATE_STATUS':
                return {
                    ...state,
                    status: action.status,
                };
        }
        
    };

    const [{ artists, status }, dispatch] = useReducer(reducer, {
        //initial settings for these states
        //TODO: add in error state into this reducer
        status: REQUEST_STATUS.LOADING,
        artists: [],
    });

    //const [status, setStatus] = useState(REQUEST_STATUS.LOADING);
    const [error, setError] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:4000/artists");
                dispatch({
                    artists: response.data,
                    type: "GET_ALL_SUCCESS"
                });
            } catch (e) {
                console.log('Loading data error::', e)
                dispatch({
                    status: REQUEST_STATUS.ERROR,
                    type: "UPDATE_STATUS"
                });
                setError(e);
            }
        }
        fetchData();
    }, [])

    const success = status === REQUEST_STATUS.SUCCESS;
    const isLoading = status === REQUEST_STATUS.LOADING;
    const hasErrored = status === REQUEST_STATUS.ERROR;

    return (
        <div>
            <ArtistSearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <div className={classes.root} style={{ marginTop: '10px' }}>
                {isLoading && <div>Loading...</div>}
                {hasErrored && (
                    <div>
                        Loading error...
                        <br />
                        <b>ERROR: {error.message}</b>
                    </div>
                )}
                {success && (
                    <Grid container spacing={3}
                        direction="row"
                        justify="space-evenly"
                        alignItems="center"
                    >

                        {artists
                            .filter((artist) => {
                                const targetString = `${artist.name}`.toLowerCase();
                                return searchQuery.length === 0
                                    ? true
                                    : targetString.includes(searchQuery.toLowerCase());
                            })
                            .map((artist) => (
                                <Grid item xs={6} sm={3} key={artist.id}>
                                    <ArtistContainer>
                                        <FollowIndicator
                                            className={artist.following && 'active'}
                                            onClick={() => followingToggleHandler(artist)}
                                        />
                                        <ArtistImage {...artist} width={'100%'} />
                                    </ArtistContainer>
                                </Grid>
                            ))}
                    </Grid>
                )}
            </div>
        </div>
    );
};

export default Artists;
