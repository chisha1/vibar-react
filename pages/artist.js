import { withRouter } from 'next/router';

const Artist = withRouter((props) => {
    return <div>
        <h1>{props.router.query.artistId}</h1>
    </div>
});

export default Artist;