import React from 'react';

const ArtistsAlbum = ({ albums }) => {
    return (
        <>
            <p>Artists Albums here</p>
            {albums.map(item => (

                <div className="album-container">
                    <img className="album-image" src={item.imageUrl} style={{ height: '140px' }} />
                    {
                        //@Html.Action("GetAlbumMusic", "Artist", new { userID = userID, albumID = item.AlbumID })
                    }
                </div>
            ))}
        </>
    )
}

export default ArtistsAlbum;