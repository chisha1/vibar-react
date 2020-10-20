import React from 'react';
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

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

const ArtistImage = styled.img`
    width: 100%;
    border-radius: 50%;
    border: solid rgba(255, 255, 255, 0.6313725490196078);
    transition: border-color 1s ease;
    :hover {
        border: solid #ffffff;
        transition: border-color 1s ease;
    }
`

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
                                    <ArtistImage
                                        data-id={`${id}`}
                                        src={`/artists/artist-${id}.jpg`}
                                        data-isfollowing={isFollowing ? 'true' : 'false'}
                                    />
                                        {
                                            //TODO: image onclick to artist page
                                        }
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </div>

            <div className="container">
                <div className="row">
                    <div className="MultiCarousel" data-items="1,3,5,6" data-slide="1" id="MultiCarousel" data-interval="1000">
                        <div className="MultiCarousel-inner">
                            {artists.map(({ id, name, isFollowing }) => (
                                <div key={ `${id}`} className="item">
                                    <div className="pad15">
                                        <img
                                            data-id={`${id}`}
                                            src={`/artists/artist-${id}.jpg`}
                                            style={{ height: 147 }}
                                            data-isfollowing={isFollowing ? 'true' : 'false'}
                                        />
                                        {
                                            //TODO: image onclick to artist page
                                        }
                                    </div>
                                </div>
                            ))}
                        </div>
                        {
                            //<button className="btn btn-primary leftLst"></button>
                            //<button className="btn btn-primary rightLst"></button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Artists;
