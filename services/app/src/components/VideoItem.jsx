import { Link } from "react-router-dom";

const VideoItem = ({item, preview}) => {
  const {name, duration, description, dateCreated, id, thumbnail} = item;

  if(preview) {
    return(
      <Link className="video video--preview" id={`${id}-preview-list`} to={{
        pathname: `/videos/${id}`,
      }}>
        <span className="video__heading">{name}</span>
      </Link>
    )
  }

  return(
    <div className="video" id={id}>
      <img className="video__thumbnail" alt={description} src={thumbnail}></img>
      <div>
        <h2 className="video__heading">{name}</h2>
        <p>id: {id}</p>
        <p>duration: {duration}</p>
        <p>date created: {dateCreated}</p>
      </div>
    </div>
  )
}

export default VideoItem;