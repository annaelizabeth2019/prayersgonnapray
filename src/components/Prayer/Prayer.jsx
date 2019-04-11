import React from 'react'
import styles from './Prayer.module.css'

const Prayer = (props) => (
    <div className={styles.Prayer}>
    <div className="card black-text">
       <p>{props.text}</p>
    </div>
    </div>
);

export default Prayer;