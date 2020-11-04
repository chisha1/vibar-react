import React, { useState } from 'react';
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
    const artistsArray = [
        {
            name: 'Travis Scott',
            id: 1,
            following: false,
            bio:
                'Artist bio',
        },
        {
            name: 'Kanye West',
            id: 2,
            following: true,
            bio:
                'Artist bio',
        },
        {
            name: 'Drake',
            id: 3,
            following: true,
            bio:
                'Artist bio',
        },
        {
            name: 'Ariana Grande',
            id: 4,
            following: true,
            bio:
                'Artist bio',
        },
        {
            name: 'Taylor Swift',
            id: 5,
            following: true,
            bio:
                'Artist bio',
        },
        {
            name: 'Post Malone',
            id: 6,
            following: true,
            bio:
                'Artist bio',
        },
        {
            name: 'DaBaby',
            id: 7,
            following: true,
            bio:
                'Artist bio',
        },
        {
            name: 'Eminem',
            id: 8,
            following: true,
            bio:
                'Artist bio',
        },
        {
            name: 'Billie Eilish',
            id: 9,
            following: true,
            bio:
                'Artist bio',
        },
    ];

    function toggleArtistFollow(artistRec) {
        return {
            ...artistRec,
            following: !artistRec.following,
        }
    }

    function followingToggleHandler(artistRec) {
        const toggledArtistRec = toggleArtistFollow(artistRec); //store following toggled artist
        const artistIndex = artists.map((artist) => artist.id).indexOf(artistRec.id); //get index of artist from artists list
        setArtists //create new arra of artists, setting the state
            ([...artists.slice(0, artistIndex), toggledArtistRec, ...artists.slice(artistIndex + 1)]);
    }

    const classes = useStyles();
    const [searchQuery, setSearchQuery] = useState('');
    const [artists, setArtists] = useState(artistsArray);

    return (
        <div>
            <ArtistSearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <div className={classes.root} style={{ marginTop: '10px' }}>
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
                                        className={ artist.following && 'active' }
                                        onClick={() => followingToggleHandler(artist)}
                                    />
                                    <ArtistImage {...artist} width={'100%'} />
                            </ArtistContainer>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
};

export default Artists;
