import React from 'react'
import styles from './filterCategory.module.css'


const FilterCategory = ({
    choices = [],
    selectedChoices = [],
    type = '',
    onChange = f => f
}) => {
    const accordionAnimation = e => {
        var parent = e.target.parentNode;
        var sibling = e.target.nextElementSibling
        parent.classList.toggle(styles['is-open'])
        if (sibling.style.maxHeight) {
            sibling.style.maxHeight = null
        } else {
            sibling.style.maxHeight = sibling.scrollHeight + "px"
        }
    }
    return <div className={`${styles.item}`}>
        <div className={`${styles.header} d-flex justify-content-between align-items-center`} onClick={accordionAnimation}>
            <h4 className={`${styles.title}`}>{type}</h4>
            <i className="fas fa-caret-up"></i>
        </div>
        <div className={`${styles.body}`}>
            <div className={`d-flex flex-column`} style={{ paddingBottom: "12px" }}>
                {choices.map((choice, i) => {
                    return <div className='d-flex align-items-center' key={i}>
                        <input type='checkbox' checked={selectedChoices.includes(choice)} value={choice} id={choice} onChange={e => onChange(e.target.value)} />
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