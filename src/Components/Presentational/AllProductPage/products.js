import React, { useState } from 'react'
import Product from '../common/Product';
import FilterCategory from './filterCategory';
import styles from './products.module.css'
import { connect } from 'react-redux';
import Loader from './../common/loader';



const Products = ({
    crud
}) => {
    const { loading, categories, bundles, items } = crud
    const products = [...bundles, ...items].sort((a, b) => a.date > b.date)
    const [filtres, setFiltres] = useState([])
    const [openFilter, setOpenFilter] = useState(false)
    const toggleFiltre = filtre => !filtres.includes(filtre) ? setFiltres([...filtres, filtre]) : setFiltres(filtres.filter(flt => flt !== filtre))
    return <section>
        {!loading &&
            <div className={`${styles['filters-mobile-container']} ${openFilter ? styles['is-open'] : ''} d-lg-none`}>
                <div className={`${styles['filters-mobile']} ${openFilter ? styles['is-open'] : ''}`}>
                    <div className={`${styles['filters-mobile-header']}`}>
                        <h4>Filter item by</h4>
                        <div className={styles['close-btn']}>
                            <img src='/img/close.png' alt='close' onClick={e => setOpenFilter(false)} />
                        </div>
                    </div>
                    <div className='no-scrollbar' style={{ flex: 1, overflowY:"scroll" }}>
                        <FilterCategory type='Item Type' choices={categories} selectedChoices={filtres} onChange={toggleFiltre} />
                    </div>
                </div>
            </div>}
        <div className={`container-fluid ${styles['all-product-section']}`}>
            <div className='row m-0 justify-content-center'>
                <div className='col-12 d-flex justify-content-center mt-5 mb-2 mb-sm-5 mx-0'>
                    <h1 className='title'>Shop All product</h1>
                </div>

                {
                    loading ? <Loader /> : <>
                        <div className='col-12 d-flex justify-content-center d-lg-none py-3 mb-2 bg-white' style={{ cursor: 'pointer' }}
                            onClick={e => setOpenFilter(true)}>
                            <p style={{ margin: 0, color: '#606580', fontFamily: 'GilroyExtraBold' }}>Show Filter</p>
                        </div>
                        <div className='col-12 d-flex flex-wrap mb-4 mb-lg-0' style={{ minHeight: '60px' }}>
                            {filtres.map(flt => <p className={styles['selected-filter']} key={flt}>{flt} <i className='fa fa-close' onClick={e => setFiltres(filtres.filter(f => f !== flt))}></i></p>)}
                            {filtres.length > 0 && <p className={styles['clear-all-text']} onClick={e => setFiltres([])}> Clear All</p>}
                        </div>
                        <div className="col-4 d-none d-lg-block">
                            <div style={{ position: 'sticky', top: '100px' }}>
                                <FilterCategory type='Item Type' choices={categories} selectedChoices={filtres} onChange={toggleFiltre} />
                            </div>
                        </div>
                        <div className="col-10 col-lg-8">
                            <div className='container-fluid p-0'>
                                <div className='row m-0 align-items-end'>

                                    {products.filter(prd => filtres.length ? filtres.includes(prd.category) : true).map((product, i) => (
                                        <Product
                                            key={i}
                                            product={product}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    </section>
}
const mapStateToProps = (state) => ({
    crud: state.crud
})
export default connect(mapStateToProps, null)(Products)