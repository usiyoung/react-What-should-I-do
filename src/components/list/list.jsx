import React,{memo,useRef} from 'react';
import styles from './list.module.css';

const List = memo(({onSearch, onTarget, handleUrl}) => {
    const lists = [
        {
            id: 1,
            username: '드림코딩',
            url: 'https://academy.dream-coding.com/'
        },
        {
            id: 2,
            username: '생활코딩',
            url: 'https://opentutorials.org/course/1'
        },
        {
            id: 3,
            username: '제로초',
            url: 'https://www.zerocho.com/'
        },
        {
            id: 4,
            username: '코딩애플',
            url: 'https://codingapple.com/'
        },
        {
            id: 5,
            username: '노마드코더',
            url: 'https://nomadcoders.co/'
        },
        {
            id: 6,
            username: '조코딩',
            url: 'https://developerdk.tistory.com/'
        }
    ]
    const onClick = (e) => {
        const target = e.target;
        const url = e.target.dataset.url;
        handleUrl(url);
        onSearch(target.innerHTML);
        onTarget(target);  
        navFocus(target);
    }  
    const navRef = useRef([]);
    let selected = navRef.current[0];
    const navFocus = (target) =>{
        navRef.current.forEach(list => list.classList.remove(styles.paint));
        selected = target;
        selected.classList.add(styles.paint);
    }

    return(
        <ul className={`${styles.list} `}>
            <li className={styles.roadMap}>
                <a 
                href="https://roadmap.sh"
                target="_blank"
                rel="noreferrer"
                >
                프론트엔드 로드맵
            </a>
            </li>
            {lists.map(
                list => 
                <li 
                ref={el => (navRef.current[list.id -1] = el)} key={list.id} 
                onClick={onClick} 
                data-url={list.url} 
                className={styles.listItem}>
                    {list.username}
                </li>
                )}
        </ul>
    )          
});

export default List;