import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import Search from './Search.js';
import searchYouTube from '../lib/searchYouTube.js';

const {useState} = React;
const {useEffect} = React;


var App = () => {

  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);

  useEffect(() => {
    updatedFromSearch('Rick Astley');
  }, []);

  const updatedFromSearch = (query) => {
    searchYouTube(query, (data) => {
      setVideos(data);
      setCurrentVideo(data[0]);
    });
  };

  const updateVideo = (video) => {
    setCurrentVideo(video);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><Search updatedFromSearch={updatedFromSearch}/></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div><VideoPlayer video={currentVideo}/></div>
        </div>
        <div className="col-md-5">
          <VideoList videos={videos} handleVideoClick={updateVideo}/>
        </div>
      </div>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
