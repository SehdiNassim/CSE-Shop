import axios from 'axios';
import React, { useEffect, useState } from 'react'
import recproducts from '../../../data/products.json'
import filterItemAnimation from '../../../helpers/accordion';
import Product from '../common/Product';
import FilterCategory from './filterCategory';
import styles from './products.module.css'
import { connect } from 'react-redux';



const Products = ({
    crud
}) => {
    useEffect(() => {
        filterItemAnimation()
    }, [crud])
    const { loading, categories, bundles,items } = crud
    const products = [...bundles,...items].sort((a,b)=>a.date>b.date)
    const [filtres, setFiltres] = useState([])
    const toggleFiltre = filtre => !filtres.includes(filtre) ? setFiltres([...filtres, filtre]) : setFiltres(filtres.filter(flt => flt !== filtre))
    return <section>
        <div className={`container-fluid ${styles['all-product-section']}`}>
            <div className='row m-0'>
                <div className='col-12 d-flex justify-content-center mt-5 mb-1 mb-sm-5 mx-0'>
                    <h1 className='title'>Shop All product</h1>
                </div>
                <div className='col-12 d-flex flex-wrap' style={{ minHeight: '60px' }}>
                    {filtres.map(flt => <p className={styles.haya} key={flt}>{flt}</p>)}
                </div>
                {
                    !loading && <>
                        <div className="col-4 d-none d-lg-block">
                            <div style={{ position: 'sticky', top: '100px' }}>
                                <FilterCategory type='Item Type' choices={categories} onChange={toggleFiltre} />
                                {/* <FilterCategory type='Item Type' choices={["Sweat", "Backpack", "Stickers", "Shirt", "Cap", "Pins", "Bottles"]} onChange={toggleFiltre} /> */}
                                {/* <FilterCategory type='Events' choices={["Hack !T 3", "UniCode", "MLH", "Hack !N"]} onChange={toggleFiltre} />
                    <FilterCategory type='Shop By Category' choices={["General Stuff", "Full Stuff", "Events Items"]} onChange={toggleFiltre} /> */}
                            </div>
                        </div>
                        <div className="col-12 col-lg-8">
                            <div className='container-fluid p-0'>
                                <div className='row m-0 align-items-end'>

                                    {products.filter(prd=> filtres.length ? filtres.includes(prd.category): true).map((product, i) => (
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