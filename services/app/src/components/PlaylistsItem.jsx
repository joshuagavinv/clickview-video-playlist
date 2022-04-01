import VideoItem from "./VideoItem";

const PlaylistsItem = ({item}) => {
  const {name, description, videoIds, id, dateCreated} = item;
  return(
    <div id={id}>
      <div>
        <h2>{name}</h2>
        <h2>{description}</h2>
        <p>id: {id}</p>
        <p>date created: {dateCreated}</p>
        { videoIds.map((video)=> {
          return <VideoItem key={`${video.id}-preview`} item={item} preview={true} />;
        })}
      </div>
    </div>
  )
}

export default PlaylistsItem;