import { Link } from "react-router-dom";

const PlaylistsItem = ({item}) => {
  const {name, description, videoIds, id, dateCreated} = item;
  return(
    <Link id={id} className="playlist" to={{
      pathname: `/playlists/${id}`,
    }}>
        <h2>{name}</h2>
        <h2>{description}</h2>
        <p>id: {id}</p>
        <p>date created: {dateCreated}</p>
    </Link>
  )
}

export default PlaylistsItem;