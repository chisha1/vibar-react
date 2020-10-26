import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ArtistImage from '../ArtistImage/ArtistImage';
import { makeStyles } from '@material-ui/core/styles';
import ArtistSearchBar from '../ArtistSearchBar/ArtistSearchBar';

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

const Artists = () => {
    const artists = [
        {
            name: 'Travis Scott',
            id: 1,
            isFollowing: false,
            bio:
                'Artist bio',
        },
        {
            name: 'Kanye West',
            id: 2,
            isFollowing: true,
            bio:
                'Artist bio',
        },
        {
            name: 'Drake',
            id: 3,
            isFollowing: true,
            bio:
                'Artist bio',
        },
        {
            name: 'Ariana Grande',
            id: 4,
            isFollowing: true,
            bio:
                'Artist bio',
        },
        {
            name: 'Taylor Swift',
            id: 5,
            isFollowing: true,
            bio:
                'Artist bio',
        },
        {
            name: 'Post Malone',
            id: 6,
            isFollowing: true,
            bio:
                'Artist bio',
        },
        {
            name: 'DaBaby',
            id: 7,
            isFollowing: true,
            bio:
                'Artist bio',
        },
        {
            name: 'Eminem',
            id: 8,
            isFollowing: true,
            bio:
                'Artist bio',
        },
        {
            name: 'Billie Eilish',
            id: 9,
            isFollowing: true,
            bio:
                'Artist bio',
        },
    ];
    const classes = useStyles();
    const [searchQuery, setSearchQuery] = useState('');

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
                            <div className="item">
                                    <ArtistImage {...artist} width={'100%'}/>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
};

export default Artists;
