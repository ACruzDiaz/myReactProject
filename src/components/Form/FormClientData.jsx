import React, { useState } from 'react';
import './FormClientData.css'
import { useEffect } from 'react';
const FormClientData = ({buyBag, totalPrice}) => {
  const initialState = {
    nombreIn:"",
    telefonoIn:"",
    direccionIn:"",
    tipoEnvioIn:"Estandar"
  }
  const [clientData, setClientData] = useState(initialState)
  const [validationMessage, setValidationMessage] = useState(null);
  const [total, setTotal] = useState(0);
  const [fee, setFee] = useState(0);

  const getSendFee = (arriveVelocity, price) => {
    if(arriveVelocity === 'Estandar'){
      return Number.parseFloat(0.10*price).toFixed(2);
    }
    else if(arriveVelocity === 'Express'){
      return Number.parseFloat(0.20*price).toFixed(2);
    }
    else{
      return null;
    }
    
  }

  const getTotal = (fees, totalg) => {
    return (Number.parseFloat(fees) + Number.parseFloat(totalg)).toFixed(2);
  }
  useEffect(() => {
        setFee(getSendFee(clientData.tipoEnvioIn, totalPrice));
  }, [clientData]);

  useEffect(() => {
    setTotal(getTotal(fee, totalPrice));
  }, [fee]);

    const handleChange = (e) => {
      setClientData ({...clientData, [e.target.name]: e.target.value})
    }

    const handleComprar = (e) => {
      e.preventDefault();
      const empty = Object.values(clientData).some((el)=>{
        return el === ""
      }) 
      if(empty){
        setValidationMessage("Llene todos los campos")
      }
      else{
        setValidationMessage(null);
        buyBag();
      }



    }
  return(
    
    <section className='formSection'>
    <form className='formShipping' onSubmit={handleComprar}>
      <div className='inputGroup'>
        <label htmlFor="nombreIn">Nombre</label>
        <input type="text" name="nombreIn" id="nombreIn" onChange={handleChange}/>
      </div>
      <div className='inputGroup'>
        <label htmlFor="telefonoIn">Telefono</label>
        <input type="tel" name="telefonoIn" id="telefonoIn" onChange={handleChange}/>
      </div>
      <div className='inputGroup'>
        <label htmlFor="direccionIn">Dirección</label>
        <input type="text" name="direccionIn" id="direccionIn" onChange={handleChange}/>
      </div>
      <div className='inputGroup'>
        <label htmlFor="tipoEnvioIn">Velocidad de envio</label>
        <select name="tipoEnvioIn" id="tipoEnvioIn" onChange={handleChange} defaultValue={"Estandar"}>
          <option value="Estandar">Estandar</option>
          <option value="Express">Express</option>
        </select>
      </div>
      <div className='submitGroup'>
        <input type="submit" value="Comprar" onChange={handleComprar} className='comprarCarrito' />
        <input type="reset" value="Cancelar" onChange={handleChange} className='vaciarCarrito'/>
      </div>
      {validationMessage && <h1>{validationMessage}</h1>}
    </form>
    <div className="bagContainerCostos">
      <p >Subtotal: <span>${Number.parseFloat(totalPrice).toFixed(2)}</span></p>
      <p>Costo de envio: ${fee}</p>
      <p className="subtotal">Total: <span>${total}</span></p>
    </div>
    </section>
    
  )

}

export default FormClientData