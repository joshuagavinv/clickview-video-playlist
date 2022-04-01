import List from '../components/List'

const Videos = ({videos}) => {
  return (
    <div>
      <h3>Welcome to Clickview videos</h3>
      <List lists={videos} type="video"/>
    </div>
  );
};

export default Videos;