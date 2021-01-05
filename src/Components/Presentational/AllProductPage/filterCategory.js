import React, { useState } from 'react'
import styles from './filterCategory.module.css'


const FilterCategory = ({
    choices = [],
    type = '',
    onChange=f=>f
}) => {
    return <div className={`${styles.item} ${styles['is-open']}`}>
        <div className={`${styles.header} d-flex justify-content-between align-items-center`}>
            <h4 className={`${styles.title}`}>{type}</h4>
            <i className="fas fa-caret-up"></i>
        </div>
        <div className={`${styles.body}`}>
            <div className={`d-flex flex-column`} style={{paddingBottom:"12px"}}>
                {choices.map((choice, i) => {
                    return <div className='d-flex align-items-center' key={i}>
                        <input type='checkbox' value={choice} id={choice} onChange={e=> onChange(e.target.value)}/>
                        <label className={styles['custom-checkbox']} htmlFor={choice}>
                            <i className="fas fa-check"></i>
                        </label>
                        <label className={styles['custom-checkbox-label']} htmlFor={choice}>{choice}</label>
                    </div>
                })}
            </div>
        </div>
    </div>
}

export default FilterCategory