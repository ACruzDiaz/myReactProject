import NavBar from './components/NavBar/NavBar'
import './App.css'
import ProductContainer from './components/ProductContainer/productContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <>
    <header>
      <NavBar></NavBar>
    </header>
    <main>
      <ItemListContainer greeting={"Bienvenidos a mi sitio"}/>
      <ProductContainer/>
    </main>
    </>
  )
}

export default App
