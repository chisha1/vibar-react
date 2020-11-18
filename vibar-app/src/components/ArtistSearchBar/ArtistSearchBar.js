import React from 'react';
import styled from 'styled-components';

const SearchBarElement = styled.input`
    border-radius: 13px;
    border: none;
    padding: 0 10px 2px 10px;
    height: 25px;
    :focus {
        outline: none;
    }
`

const ArtistSearchBar = ({ searchQuery, setSearchQuery }) => (
    <div>
        <SearchBarElement
            id="search-field"
            placeholder="Search Artist"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
        />
    </div>
)

export default ArtistSearchBar;