import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import AllProducts from './Pages/allProductsPage';
import LandingPage from './Pages/landingPage';
import Page from './Pages/pageTemplate';
import ShoppingBagPage from './Pages/shopBagPage';
import ProductPage from './Pages/productsPage';
import qs from 'query-string'

const App = () => {
  return <BrowserRouter>
    <Page>
      <Switch>
        <Route exact path='/' component={LandingPage}></Route>
        <Route exact path="/products/:id" component={({ location }) => {
          return qs.parse(location.search).type ? <ProductPage /> : <Redirect to='/' />
        }}></Route>
        <Route exact path='/products' component={AllProducts}></Route>
        <Route exact path='/cart' component={ShoppingBagPage}></Route>
        <Route component={() => <Redirect to='/'></Redirect>}></Route>
      </Switch>
    </Page>
  </BrowserRouter>
}

export default App