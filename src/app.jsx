import React, {useState, useEffect} from 'react';
import List from './components/list/list';
import Nav from './components/nav/nav';
import VideoItems from './components/videoItems/videoItems';
import styles from './app.module.css';
import { useRef } from 'react/cjs/react.development';


function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const [selectedList, setSelectedList] = useState('');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const containerRef = useRef();

  const handleList = (target) => {
    setSelectedList(target.innerHTML);  
    containerRef.current.scrollIntoView({behavior : 'smooth'});
  }

  const handleVideo = (video) =>{
    setSelectedVideo(video);
    containerRef.current.scrollIntoView({behavior : 'smooth'});
  }

  const search = query =>{
    youtube
    .search(query)//
    .then(items => setVideos(items));
  };

  useEffect(() => {
    youtube
    .search('드림코딩')//
    .then(video => setVideos(video));
  },[youtube,containerRef]);

  return (
    <div ref={containerRef} className={styles.container}>
        <Nav 
          selectedList={selectedList} 
          selectedVideo={selectedVideo}
          />
      <div className={styles.content}>
        <div className={styles.list}>
          <List
            selectedList={selectedList} 
            onSearch={search} 
            onTarget={handleList} 
          />
        </div>
        <div className={styles.items}>
          <VideoItems 
            videos={videos} 
            selectedVideo={selectedVideo}
            onClickVideo={handleVideo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
