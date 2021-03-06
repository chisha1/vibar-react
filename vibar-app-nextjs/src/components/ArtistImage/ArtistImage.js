import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { SimpleImg } from 'react-simple-img';

function ArtistImage(props) {

    const ArtistImageElement = styled.img`
        width: ${props.width};
        border-radius: 50%;
        border: solid rgba(255, 255, 255, 0.6313725490196078);
        transition: border-color 1s ease;
        :hover {
            border: solid #ffffff;
            transition: border-color 1s ease;
        }
    `
    return (
        //TODO: implement artist images with simpleimg
        //<SimpleImg
        //    src={`/artists/artist-${id}.jpg`}
        //    animationDuration="0"
        //    applyAspectRatio="true"
        //    //data-isfollowing= { isFollowing? 'true': 'false' }
        ///>


        <Link href={`/artist?artistId=${props.id}&name=${props.name}`}>
            <a>
                <ArtistImageElement src={`/artists/artist-${props.id}.jpg`} />
            </a>
        </Link>
    )
}

export default ArtistImage;
