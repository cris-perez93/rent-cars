import {FaUserAlt} from 'react-icons/fa'

// Redux
import { useSelector,} from 'react-redux';

const CardCoche = ({coche}) => {

     // obtener el state// dias reservados
   const dias = useSelector(state =>state.coches.diasreserva);
  
  const {nombre, imagen, precio, plazas, motor} = coche;
  
  // extraemos precio dia/coche
  const precioDia = precio
  const precioTotal = (precioDia * dias);
  

  return (
      <div className="card_car">
        <div className="datos_card_car">
          <h4>{nombre}</h4>
          <li>{motor}</li>
          <li><FaUserAlt/> {plazas} plazas</li>
          
          <li>Kilometraje</li>
        </div>
        <img className="img_card" src={imagen}></img>
        <div className="precio">
          <p>Precio por <span>{dias}</span> dias:</p>
          <p>{precioTotal}<span>€</span></p>
          <button className="btn_reservar">Reservar</button>
        </div>
      </div>
      );
}
 
export default CardCoche;