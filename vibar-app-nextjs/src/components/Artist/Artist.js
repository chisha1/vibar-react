import React, { useState } from 'react';
import styled from 'styled-components';
import ArtistImage from '../ArtistImage/ArtistImage';
import ArtistContent from '../ArtistContent/ArtistContent';

const music = [
    {
        albumId: 1,
        artistId: 2,
        albumName: 'Graduation',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/7/70/Graduation_%28album%29.jpg',
        releaseDate: new Date(2007, 9),
        single: false,
        songs: [
            {
                id: 1,
                name: 'I Wonder',
                savedToLibrary: true,
                artists: ['Kanye West']
            },
            {
                id: 2,
                name: 'Flashing Lights',
                savedToLibrary: false,
                artists: ['Kanye West', 'Chisha']
            },
            {
                id: 3,
                name: 'Good Life',
                savedToLibrary: false,
                artists: ['Kanye West', 'T-Pain',]
            },
            {
                id: 4,
                name: 'Stronger',
                savedToLibrary: false,
                artists: ['Kanye West', 'Travis Scott', 'Chris Brown']
            },
        ]
    },
    {
        albumId: 2,
        artistId: 2,
        albumName: '808s & Heartbreak',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51vJ5RR%2BIPL._AC_SL1400_.jpg',
        releaseDate: new Date(2007, 9),
        single: false,
        songs: [
            {
                id: 5,
                name: 'I Wonder',
                savedToLibrary: true,
                artists: ['Kanye West', 'Chisha']
            },
            {
                id: 6,
                name: 'Flashing Lights',
                savedToLibrary: true,
                artists: ['Kanye West', 'Chisha']
            }
        ]
    },
    {
        albumId: 3,
        artistId: 2,
        albumName: 'Gold Digger',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/6/62/Gold_Digger.jpg',
        releaseDate: new Date(2007, 9),
        single: true,
        songs: [
            {
                id: 7,
                name: 'Gold Digger',
                savedToLibrary: true,
                artists: ['Kanye West', 'Chisha']
            }
        ]
    },
]

//#region CSS
const ArtistContentContainer = styled.div`
    width: 80%;
    margin: 20px auto;
    padding: 20px 20px;
    margin-bottom: 15%;
    border-radius: 13px;
    background-color: rgba(30, 224, 224, 0.3);
`;

const ArtistTabDisplayButton = styled.a`
    color: #585858;
    cursor: pointer;
    font-weight: 600;
    margin: 0 20px 0 20px;
    font-family: 'Open Sans', sans-serif;
    :hover, &.active {
        text-decoration: none;
        border-bottom: solid rgba(255, 255, 255, 0.63137255);
        border-bottom-width: 4px;
        padding-bottom: 12px;
    }
`
//#endregion

const Artist = (props) => {
    const [artistTabDisplay, setArtistTabDisplay] = useState('all');

    function ToggleDisplayTab(option) {
        switch (option) {
            case 'all':
                setArtistTabDisplay('all');
                break;
            case 'albums':
                setArtistTabDisplay('albums');
                break;
            case 'singles':
                setArtistTabDisplay('singles');
                break;
            default:
                null;
        }
    }

	return (
        <>
            <div id="header-container">
                <div id="header">
                    <div id="artist-info">
                        <div id="artist-image">
                            <ArtistImage {...props} />
                        </div>
                        <span id="artist-name-header">{props.name}</span>
                        <a href="#">
                            {
                                //TODO: add following/not-following class logic for span
                            }
                            <span id="follow-status" data-artistID="@Model.ArtistID" data-userID="userID" className="following ORnot-following">
                                {
                                    //TODO: add Following/Follow logic here
                                }
                                <text>Follow</text>
                            </span>
                        </a>
                    </div>
                    <div className="links-container">
                        <ul>
                            <li>
                                <ArtistTabDisplayButton className={artistTabDisplay === 'all' && 'active'}
                                    id="all-tab"
                                    onClick={()=>ToggleDisplayTab('all')}
                                >
                                    All
                                </ArtistTabDisplayButton>
                            </li>
                            <li>
                                <ArtistTabDisplayButton className={artistTabDisplay === 'albums' && 'active'}
                                    id="albums-tab"
                                    onClick={() => ToggleDisplayTab('albums')}
                                >
                                    Albums
                                </ArtistTabDisplayButton>
                            </li>
                            <li>
                                <ArtistTabDisplayButton className={artistTabDisplay === 'singles' && 'active'}
                                    id="singles-tab"
                                    onClick={() => ToggleDisplayTab('singles')}
                                >
                                    Singles
                                </ArtistTabDisplayButton>
                            </li>
                        </ul>
                    </div>
                </div>

                <ArtistContentContainer>
                    <div id="artist-content">
                        {(artistTabDisplay === 'all' || artistTabDisplay === 'albums') &&
                            <div id='albums-container'>
                                <ArtistContent albums={music} contentType={'albums'} />
                            </div>
                        }
                        {(artistTabDisplay === 'all' || artistTabDisplay === 'singles') &&
                            <div id='singles-container'>
                                <ArtistContent albums={music} contentType={'singles'} />
                            </div>
                        }
                    </div>
                </ArtistContentContainer>
            </div >

        </>
    )
}

export default Artist;