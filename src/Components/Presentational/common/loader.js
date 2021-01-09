import React from 'react'
import styles from './loader.module.css'

const Loader=()=>{
    return <div className={styles["loader-container"]}>
        <div className={styles["load-circle"]}></div>
    </div>
}

export default Loader