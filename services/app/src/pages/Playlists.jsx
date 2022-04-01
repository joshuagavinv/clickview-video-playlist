import List from '../components/List'

const Playlists = ({playlists}) => {
  return (
    <div>
      <h3>Welcome to Clickview playlists</h3>
      <List lists={playlists} type="playlist"/>
    </div>
  );
};

export default Playlists;