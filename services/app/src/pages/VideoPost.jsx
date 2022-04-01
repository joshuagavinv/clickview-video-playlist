
import { useParams } from "react-router-dom";

const VideoPost = () => {
  const { id } = useParams();
 // const {name, description, videoIds, id, dateCreated} = item;
  return (
    <div>
      {id}
    </div>
  );
};

export default VideoPost;