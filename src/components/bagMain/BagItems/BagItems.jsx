import './BagItems.css'
const BagItems = ({product, deleteFromBag}) => {

  return (<article className='bagItems'>
    <div className='imgContainer'>
      <img src={product.producto.image} alt="" />
    </div>
    <div className='infoContainer'>
      <p className=''>{product.producto.author}</p>
      <h2 className=''>{product.producto.title}</h2>
      <p className=''>Cantidad: {product.quantity}</p>
      <p className=''>${Number.parseFloat(product.producto.price).toFixed(2)}</p>
    </div>
    <div className='deleteContainer'>
      <button className="vaciarCarrito" type="button" onClick={()=>deleteFromBag(product)}>X</button>
    </div>
  </article>);
}

export default BagItems;