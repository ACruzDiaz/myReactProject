import NavBar from './components/NavBar/NavBar'
import './App.css'
import ProductContainer from './components/ProductContainer/productContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCounter from './components/itemCounter/ItemCounter'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
function App() {
  return (
    <>
    <header>
      <NavBar></NavBar>
    </header>
    <main>
      <ItemListContainer greeting={"Los más leidos"}/>
      <ItemCounter stockValue={3}></ItemCounter>
      <ProductContainer/>
      <ItemDetailContainer/>
    </main>
    </>
  )
}

export default App
