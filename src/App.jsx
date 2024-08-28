import NavBar from './components/NavBar/NavBar'
import './App.css'
import ProductContainer from './components/ProductContainer/productContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCounter from './components/itemCounter/ItemCounter'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Formulario from './components/example/Formulario'
import { Route, Routes, BrowserRouter} from 'react-router-dom'
import Footer from './components/Footer/Footer'
import CategoryContainer from './components/Categories/CategoryContainer/CategoryContainer'
import BagContainer from './components/bagMain/BagContainer/BagContainer'
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
          <Route path='/bolsa' element= {<BagContainer/>}/>
        </Routes>
      </main>
      <footer>
        <CategoryContainer/>
        <Footer/>
      </footer>
    </BrowserRouter>

    


  )
}

export default App
