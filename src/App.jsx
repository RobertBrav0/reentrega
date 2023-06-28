import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './Componentes/Navbar/NavBar';
import { ItemListContainer } from './Componentes/ItemListConteiner/ItemListConteiner';
import { ItemDetailContainer } from './Componentes/ItemDetailContainer/ItemDetailCotainer';
import { CartProvider } from './context/CartContext';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <BrowserRouter>
      <CartProvider>
      <Routes>
      <Route path='/' element={<ItemListContainer />} />
      <Route path='/category/:categoryId' element={<ItemListContainer />} />
      <Route path='/item/:itemId' element={ <ItemDetailContainer />} />
      <Route path='*' element={<h1>404 NOT FOUND</h1>} />
      </Routes>
      </CartProvider>
      </BrowserRouter>
    </div>

  )
}

export default App