import VideoItem  from './VideoItem';
import PlaylistsItem  from './PlaylistsItem';

const List = ({lists, type}) => {
  const itemMap = {
    'video' : VideoItem,
    'playlist' : PlaylistsItem
  }
  const ItemType = itemMap[type]
  return(
    <div className='list'>
      { lists.map((item)=> {
        return <ItemType key={item.id} item={item} />;
      })}
    </div>
  )
}

export default List;