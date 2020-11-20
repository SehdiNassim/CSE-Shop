import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import AllProducts from './Pages/allProductsPage';
import LandingPage from './Pages/landingPage';
import ShoppingBagPage from './Pages/shopBagPage';


const App= ()=>{
  return <BrowserRouter>
    <Switch>
      <Route exact path='/' component={LandingPage}></Route>
      <Route exact path='/products' component={AllProducts}></Route>
      <Route exact path='/cart' component={ShoppingBagPage}></Route>
      <Route component={()=><Redirect to='/'></Redirect>}></Route>
    </Switch>
  </BrowserRouter>
}

export default App