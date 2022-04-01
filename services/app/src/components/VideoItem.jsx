const VideoItem = ({item, preview}) => {
  const {name, duration, description, dateCreated, id, thumbnail} = item;

  if(preview) {
    return(
      <div id={`${id}-preview-list`}>
        <h2>{name}</h2>
      </div>
    )
  }

  return(
    <div id={id}>
      <img alt={description} src={thumbnail}></img>
      <div>
        <h2>{name}</h2>
        <p>id: {id}</p>
        <p>duration: {duration}</p>
        <p>date created: {dateCreated}</p>
      </div>
    </div>
  )
}

export default VideoItem;