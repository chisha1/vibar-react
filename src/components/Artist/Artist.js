import React from 'react';
import styled from 'styled-components';
import ArtistImage from '../ArtistImage/ArtistImage';
import ArtistsAlbums from '../ArtistsAlbums/ArtistsAlbums';
import ArtistsSingles from '../ArtistsSingles/ArtistsSingles';

const music = [
    {
        albumId: 1,
        artistId: 2,
        albumName: 'Graduation',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/7/70/Graduation_%28album%29.jpg',
        releaseDate: new Date(2007, 9),
        songs: [
            {
                songId: 1,
                name: 'I Wonder',
            },
            {
                songId: 2,
                name: 'Flashing Lights'
            }
        ]
    },
    {
        albumId: 1,
        artistId: 2,
        albumName: 'Graduation',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/7/70/Graduation_%28album%29.jpg',
        releaseDate: new Date(2007, 9),
        songs: [
            {
                songId: 1,
                name: 'I Wonder',
            },
            {
                songId: 2,
                name: 'Flashing Lights'
            }
        ]
    },
]

const ArtistContentContainer = styled.div`
    width: 80%;
    margin: 20px auto;
    padding: 20px 20px;
    margin-bottom: 15%;
    border-radius: 13px;
    background-color: rgba(30, 224, 224, 0.3);
`

const Artist = (props) => {
	return (
        <>
            <div id="header-container">
                <div id="header">
                    <div id="artist-info">
                        <div id="artist-image">
                            {
                                //TODO: change code to use artistImage component here
                            //<img src={`/artists/artist-${props.id}.jpg`} />
                            }
                            <ArtistImage {...props} />

                        </div>
                        <span id="artist-name-header">{props.name}</span>
                        <a href="#">
                            {
                                //add following/not-following class logic for span
                            }
                            <span id="follow-status" data-artistID="@Model.ArtistID" data-userID="userID" className="following ORnot-following">
                                {
                                    //add Following/Follow logic here
                                }
                                <text>Follow</text>
                            </span>
                        </a>
                    </div>
                    <div className="links-container">
                        <ul>
                            <li><a className="artist-header-link all" id="all-header-link">All</a></li>
                            <li><a className="artist-header-link albums" id="albums-header-link">Albums</a></li>
                            <li><a className="artist-header-link singles" id="singles-header-link">Singles</a></li>
                        </ul>
                    </div>
                </div>

                <ArtistContentContainer>
                    <ArtistsAlbums albums={music} />
                    <div id="artist-content">
                        {
                        //@Html.Action("GetArtistsAlbums", "Artist", new {artistID = Model.ArtistID})
                        //@Html.Action("GetArtistsSingles", "Artist", new {userID = userID, artistID = Model.ArtistID})
                        }
                        {
                            //<ArtistsSingles />
                        }
                    </div>
                </ArtistContentContainer>
            </div >

        </>
    )
}

export default Artist;