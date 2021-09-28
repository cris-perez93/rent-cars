import {FaArrowAltCircleRight} from 'react-icons/fa'

const Datos = ({busqueda}) => {
    
   const {
   provinciasalida,
   provinciallegada,
   fechasalida ,
   fechallegada,
   horasalida,
   horallegada} = busqueda;


return (
     
         <aside className="container_datos">
            <h1>Itinerario</h1>
            <h3>Lugar de salida y regreso</h3>
            <div className="container_itinerario">
               <p>{provinciasalida}</p>
               <FaArrowAltCircleRight/>
               <p>{provinciallegada}</p>
            </div>
            <h3>Fecha y hora de salida y regreso</h3>
            <div className="container_itinerario">
               <p>{fechasalida}</p>
               <p>{horasalida}</p>
               <FaArrowAltCircleRight/>
               <p>{fechallegada}</p>
               <p>{horallegada}</p>
            </div>
         </aside>
         
      
      );
}
 
export default Datos;