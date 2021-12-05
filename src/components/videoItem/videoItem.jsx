import React from 'react';
import styles from './videoItem.module.css';

const VideoItem = ({video, onClickVideo}) => {

    return(
        <li className={styles.container} onClick={() => onClickVideo(video)}>
            <div className={styles.wrap}>
                <img className={styles.img} src={video.snippet.thumbnails.medium.url } alt="thumbnails"></img>
                <div>
                    <p className={styles.title}>{video.snippet.title}</p>
                    <p className={styles.des}>{video.snippet.channelTitle}</p>
                </div>
            </div>
        </li>
    )
};

export default VideoItem;