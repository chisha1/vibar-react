import React from 'react';
import Album from '../Album/Album';

const ArtistContent = ({ albums, contentType }) => {
    console.log('content type is ', contentType);
    return (
        <>
            {albums.map(album => (
                <>
                    {/*condition to only render albums when this component is called for albums.
                    vice versa for singles*/}
                    {(!album.single && contentType === 'albums' ||
                    album.single && contentType === 'singles') &&
                        <Album {...album} contentType={contentType} />
                    }
                </>

            ))}
        </>
    )
}

export default ArtistContent;
{
    //TODO: figure out how to name this component dynamically, e.g.if content type is album, content should
    //be named ArtistAlbums
}