import { Link } from "react-router-dom";

const VideoItem = ({item}) => {
  const {name, duration, description, dateCreated, id, thumbnail} = item;

  return(
    <Link className="video" id={id} to={{pathname: `/videos/${id}`}}>
      <img className="video__thumbnail" alt={description} src={thumbnail}></img>
      <div>
        <h2 className="video__heading">{name}</h2>
        <p>id: {id}</p>
        <p>duration: {duration}</p>
        <p>date created: {dateCreated}</p>
      </div>
    </Link>
  )
}

export default VideoItem;