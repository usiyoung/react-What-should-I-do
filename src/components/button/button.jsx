import React from 'react';
import styles from './button.module.css';
const PageButton = ({selectedList,selectedItemUrl}) => {
    return(
            <a 
            href={selectedItemUrl} 
            target="_blank" 
            rel="noopener noreferrer">
                <button className={styles.pageGo}>
                    {selectedList} HOMEPAGE
                </button>
            </a>
    )
};

export default PageButton;