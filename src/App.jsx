import NavBar from './components/NavBar/NavBar'
import './App.css'
import ProductContainer from './components/ProductContainer/productContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCounter from './components/itemCounter/ItemCounter'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Formulario from './components/example/Formulario'
import { Route, Routes, BrowserRouter} from 'react-router-dom'
import Footer from './components/Footer/Footer'
function App() {
  return (

    <BrowserRouter>
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <Routes>
          <Route path='/' element = {<ProductContainer/>}/>
          <Route path='/detail/:itemID' element = {<ItemDetailContainer/>}/>
          <Route path='/categories/:categorySlug' element = {<ProductContainer/>}/>
        </Routes>
      </main>
      <footer>
        <Footer/>
      </footer>
    </BrowserRouter>

    


  )
}

export default App
