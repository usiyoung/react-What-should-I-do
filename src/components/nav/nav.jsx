import React,{memo, useRef} from 'react';
import styles from './nav.module.css';
import '@fortawesome/fontawesome-free/js/all.js';
import PageButton from '../button/button';


const Nav = memo(({onSearch,selectedList,selectedItemUrl}) => {
    const inputRef = useRef();

    const handleSearch = () =>{
        const value = inputRef.current.value;
        onSearch(value);
    }
    const onKeyPress = (e) =>{
        if(e.key === 'Enter'){
            handleSearch();
        }
    }
    const onClick = () =>{
        handleSearch();
    }
    return(
    <nav >
        <div className={styles.logo}>
            <img className={styles.logoImg} src={process.env.PUBLIC_URL + '/usi_logo.png'} alt="logo" />
            <span className={styles.logoName}>WHAT SHOULD I DO?</span>
        </div>

        <div className={styles.form}>
            <input ref={inputRef} onKeyPress={onKeyPress} className={styles.input} type = "search" placeholder="#HTML  #CSS  #JAVASCRIPT  #REACT" />
            <button className={styles.inputBtn} onClick={onClick} type="submit">🔍</button>
        </div>
        
        <div className={styles.right}>
            <PageButton 
            selectedList={selectedList}
            selectedItemUrl={selectedItemUrl}
            className={styles.pageButton}
            />
            <a href="https://github.com/usiyoung" target="_blank" rel="noopener noreferrer"><button className={styles.button}><i className="fab fa-github"></i></button>
            </a>
        </div>
    </nav>
    )
});

export default Nav;