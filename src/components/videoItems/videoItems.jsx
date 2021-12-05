import React from 'react';
import Detail from '../detail/detail';
import VideoItem from '../videoItem/videoItem';
import styles from './videoItems.module.css';

const VideoItems = ({videos,onClickVideo,selectedVideo}) => {

    return(
    <div className={styles.container}>
        {selectedVideo && <Detail video={selectedVideo} selectedVideo={selectedVideo}/> }
        <ul className={styles.items}>
        {videos.map(video => 
        <VideoItem 
            key={video.id} 
            video={video} 
            onClickVideo ={onClickVideo}
        />)}
        </ul>
    </div>
    )
};

export default VideoItems;