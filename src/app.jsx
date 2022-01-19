import React, {useRef, useState, useEffect} from 'react';
import List from './components/list/list';
import Nav from './components/nav/nav';
import VideoItems from './components/videoItems/videoItems';
import styles from './app.module.css';



function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const [selectedList, setSelectedList] = useState('');
  const [selectedVideo, setSelectedVideo] = useState('');
  const [selectedItemUrl, setSelectedItemUrl] = useState('');
  const containerRef = useRef();

  const handleList = (target) => {
    setSelectedList(target.innerHTML);  
    containerRef.current.scrollIntoView({behavior : 'smooth'});
  }

  const handleUrl = (url) =>{
    setSelectedItemUrl(url);
  }

  const handleVideo = (video) =>{
    setSelectedVideo(video);
    containerRef.current.scrollIntoView({behavior : 'smooth'});
  }

  const search = query =>{
    youtube
    .search(query)//
    .then(items => setVideos(items))
    .then(setSelectedVideo(''));
  };

  useEffect(() => {
    youtube
    .search('드림코딩')//
    .then(video => setVideos(video));
    setSelectedList('드림코딩');
    setSelectedItemUrl('https://academy.dream-coding.com/');
    
  },[youtube]);

  return (
    <div ref={containerRef} className={styles.container}>
        <Nav 
          onSearch={search} 
          />
      <div className={styles.content}>
        <div className={styles.list}>
          <List
          handleUrl = {handleUrl}
            selectedList={selectedList} 
            onSearch={search} 
            onTarget={handleList} 
          />
        </div>
        <div className={styles.items}>
          <VideoItems 
            videos={videos} 
            selectedItemUrl={selectedItemUrl}
            selectedList={selectedList}
            selectedVideo={selectedVideo}
            onClickVideo={handleVideo}
          />

        </div>
      </div>
    </div>
  );
}

export default App;
