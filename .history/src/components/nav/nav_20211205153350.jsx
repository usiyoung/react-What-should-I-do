import React,{memo} from 'react';
import styles from './nav.module.css';
import '@fortawesome/fontawesome-free/js/all.js';

const Nav = memo(({selectedList}) => {

    const url = () =>{
        switch(selectedList){
            case '드림코딩':
                window.open('https://academy.dream-coding.com/','_blank');
            break;
            case '생활코딩':
                window.open('https://opentutorials.org/course/1','_blank');
            break;
            case '제로초':
                window.open('https://www.zerocho.com/','_blank');
            break;
            case '코딩애플':
                window.open('https://codingapple.com/','_blank');
            break;
            case '노마드코더':
                window.open('https://nomadcoders.co/','_blank');
            break;
            case '조코딩':
                window.open('https://developerdk.tistory.com/','_blank');
            break;
            default:
            return Error('error');
        }
    }
    
    return(
    <nav >
        <div className={styles.logo}>
            <img className={styles.logoImg} src="/image/usi_logo.png" alt="logo" />
            <span className={styles.logoName}>UsISTUDY</span>
        </div>
        <div className={styles.right}>
            {selectedList && <button onClick={url}className={styles.pageGo}>{selectedList} HOMEPAGE</button>}

            <a href="https://github.com/usiyoung" target="_blank" rel="noopener noreferrer"><button className={styles.button}><i class="fab fa-github"></i></button></a>
        </div>
    </nav>
    )
});

export default Nav;