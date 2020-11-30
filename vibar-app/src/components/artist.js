import { useParams } from 'react-router-dom';
import Artist from './Artist/Artist';
import Layout from './Layout/Layout';

const ArtistComponent = (props) => {
    const { artistId } = useParams();

    return (
        <Layout>
            <Artist id={artistId}/>
        </Layout>
    )
};

export default ArtistComponent;