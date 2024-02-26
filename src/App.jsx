import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import FormList from './views/FormList';
import ProductDetail from './views/ProductDetail';
import UpdateProduct from './views/UpdateProduct';

function App() {

  return (
    <>
      <Routes>
        <Route element={ <FormList /> } path='/products' />
        <Route element={ <ProductDetail /> } path='/products/:id' />
        <Route element={ <UpdateProduct /> } path='/products/:id/edit' />
      </Routes>
    </>
  )
}

export default App
