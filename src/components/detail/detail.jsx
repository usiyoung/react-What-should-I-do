import React,{memo} from 'react';
import styles from './detail.module.css';

const Detail = memo(({video}) => {    
    return(
    <section className={styles.container}>
        <h2 className={styles.title}>{video.snippet.title}</h2>
        <iframe 
        className={styles.frame}
        title="iframe"
        type="text/html"
        width="90%" 
        height="500px"
        src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
        frameBorder="0" 
        allowFullScreen>
        </iframe>
        <div className={styles.line}></div>
    </section>
    )
    })

export default Detail;