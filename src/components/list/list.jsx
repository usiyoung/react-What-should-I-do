import React,{memo} from 'react';
import styles from './list.module.css';

const List = memo(({onSearch, onTarget}) => {
    const onClick = (e) => {
        const target = e.target;
        onSearch(target.innerHTML);
        onTarget(target);  
    }   

    return(
            <ul className={`${styles.list} `}>
                <li className={styles.listItem} onClick={onClick}>드림코딩</li>
                <li className={styles.listItem} onClick={onClick}>생활코딩</li>
                <li className={styles.listItem} onClick={onClick}>제로초</li>
                <li className={styles.listItem} onClick={onClick}>코딩애플</li>
                <li className={styles.listItem} onClick={onClick}>노마드코더</li>
                <li className={styles.listItem} onClick={onClick}>조코딩</li>
            </ul>
    )          
});

export default List;