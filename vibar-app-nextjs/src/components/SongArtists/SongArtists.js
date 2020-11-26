import React from 'react';

const SongArtists = ({ artists }) => (
    <> {/*iterate through the artists for a song and create a span for each*/}
        {artists.map((item, index) => (
            <span>{(index ? ', ' : '') + item}</span>
        ))}
    </>
)

export default SongArtists;