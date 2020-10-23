import { withRouter } from 'next/router';
import Artist from '../src/components/Artist/Artist';
import Layout from '../src/components/Layout/Layout';

const ArtistComponent = withRouter((props) => {
    return (
        <Layout>
            <Artist {...props}/>
        </Layout>
    )
});

export default ArtistComponent;