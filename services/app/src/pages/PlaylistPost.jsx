import VideoItem from "../components/VideoItem";
import { useParams } from "react-router-dom";

const PlayListPost = ({reqPlaylistsById}) => {
  const { id } = useParams();
 // const {name, description, videoIds, id, dateCreated} = item;
  return (
    <div>
      {id}
    </div>
  );
};

export default PlayListPost;