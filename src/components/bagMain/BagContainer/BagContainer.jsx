import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import BagItems from "../BagItems/BagItems"
import './BagContainer.css'

const BagContainer = ({bagItems, deleteFromBag, dumbBag, totalPrice}) => {
  // const [totalPrice, setTotalPrice] = useState(0);

  // const getTotal = (arrayItems) => {
  //   if(arrayItems && arrayItems.length >= 0){
  //     return arrayItems.reduce((acc, item)=> {
  //       acc = acc + item.quantity*item.producto.price;
  //       return acc;
  //     }, 0)
  //   }else{
  //     return 0;
  //   }

  // }

  // useEffect(() => {
  //   setTotalPrice(getTotal(bagItems));
  // }, [bagItems]);

  return<>
    <h1>Bolsa de compras</h1>
    {bagItems && bagItems.length > 0 ? bagItems.map((product)=>
    <BagItems
      key={product.id}
      product = {product}
      deleteFromBag = {deleteFromBag}
    />
    ) : <h1>Tu bolsa esta vacia</h1>
  }
  {bagItems && bagItems.length > 0 && <section className="bagContainerBottom">
    <div className="bagContainerCostos">
      <p className="subtotal">Subtotal: <span>${Number.parseFloat(totalPrice).toFixed(2)}</span></p>
      <p className="costosEnvio">Procede con la comprar para determinar el costo total con envio.</p>
    </div>
    <div className="bagContainerBotones">
      <button onClick={()=> {dumbBag()}} className="vaciarCarrito">Vaciar carrito</button>
      <Link  to={'/shipping_information'} className="comprarCarrito">Comprar</Link>
    </div>
    </section>}
  </>
}

export default BagContainer