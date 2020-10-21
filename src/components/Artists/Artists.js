import React from 'react';
import Link from 'next/link';
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ArtistImage from '../ArtistImage/ArtistImage';

const LogoSrc = `/artists/artist-1.jpg`;
const Logo = styled.img`
    width: 30px;
    height: 30px;
    margin: 15px;
`;

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

    return (
        <div>

            <div className={classes.root}>
                <Grid container spacing={3}
                    direction="row"
                    justify="space-evenly"
                    alignItems="center"
                >

                    {artists.map(({ id, name, isFollowing }) => (
                        <Grid item xs={6} sm={3} key={`${id}`}>
                            <div className="item">
                                <Artist artistId={`${id}`} name={`${name}`} isFollowing={`${isFollowing}`}/>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
};

function Artist(props) {
    return <div>
        <Link href={`/artist?artistId=${props.artistId}&name=${props.name}`}><a><ArtistImage id={`${props.artistId}`} /></a></Link>
    </div>
}
export default Artists;
