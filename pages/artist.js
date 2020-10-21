import { withRouter } from 'next/router';

const Artist = withRouter((props) => {
    return <div>
        <h1>Artist ID:{props.router.query.artistId}</h1>
        <h1>Artist Name:{props.router.query.name}</h1>
    </div>
});

export default Artist;