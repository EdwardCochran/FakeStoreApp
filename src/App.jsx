import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import { useState } from 'react'
import ProductList from './components/ProductList'
import ProductDetails from './components/ProductDetails'
import Home from './components/Home'
import AddProduct from './components/AddProduct'
import EditProduct from './components/EditProduct'
import NavigationBar from './components/NavigationBar'


function App() {

  return (
    <>
    <NavigationBar />
    <Router>
      <Routes>
        <Route path="/homepage" element={Home} />
        <Route path ="/products" element={<ProductList /> } />
        <Route path ="/products/:id" element={<ProductDetails /> } />
        <Route path ="/addproduct" element={<AddProduct/> } />
        <Route path ="/editproduct" element={<EditProduct/> } />
      </Routes>
    </Router>
    </>
    
  )
}

export default App
