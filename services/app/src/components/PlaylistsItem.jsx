import VideoItem from "./VideoItem";

const PlaylistsItem = ({item}) => {
  const {name, description, videoIds, id, dateCreated} = item;
  return(
    <div id={id} className="playlist">
      <h2>{name}</h2>
      <h2>{description}</h2>
      <p>id: {id}</p>
      <p>date created: {dateCreated}</p>
      <h3>LIST OF VIDEO</h3>
      { videoIds.map((video)=> {
        return <VideoItem key={`${video.id}-preview`} item={item} preview={true} />;
      })}
    </div>
  )
}

export default PlaylistsItem;