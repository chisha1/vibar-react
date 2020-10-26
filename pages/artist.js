import { withRouter } from 'next/router';
import Artist from '../src/components/Artist/Artist';
import Layout from '../src/components/Layout/Layout';

const ArtistComponent = withRouter((props) => {
    const ArtistProps = {
        name: props.router.query.name,
        id: props.router.query.artistId
    }
    return (
        <Layout>
            <Artist {...ArtistProps}/>
        </Layout>
    )
});

export default ArtistComponent;