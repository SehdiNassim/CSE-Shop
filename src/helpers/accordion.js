import styles from '../Components/Presentational/AllProductPage/filterCategory.module.css'

const accordionAnimation=()=> {
    const all = document.querySelectorAll(`.${styles.header}`)
    all.forEach(item => {
        let parent =item.parentElement
        let sibling= item.nextElementSibling
        sibling.style.maxHeight=sibling.scrollHeight+"px"
        item.addEventListener('click', () => {
            parent.classList.toggle(styles['is-open'])
            if (parent.classList.contains(styles['is-open'])) {
                sibling.style.maxHeight =sibling.scrollHeight + "px"
            } else sibling.style.maxHeight = 0
        })
    })
}

export default accordionAnimation