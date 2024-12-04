import React from 'react'
import {Routes, Route} from 'react-router-dom'

// import pages
import Home from '../pages/Home'
import About from '../pages/About'
import Cart from '../pages/Cart'
import Contact from '../pages/Contact'
import Donation from '../pages/Donation'
import Store from '../pages/Store'

// import components
// import Articles from './Articles'
import SingleArticle from './SingleArticle'

const Links = () => {
  return (
    <Routes>
      {/* pages */}
      <Route exact path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/donation' element={<Donation/>}/>
      <Route path='/store' element={<Store/>}/>

      {/* components */}
      <Route path='/article/:id' element={<SingleArticle/>}/>
    </Routes>
  )
}

export default Links
