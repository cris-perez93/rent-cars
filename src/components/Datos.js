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
           
            <div className="container_itinerario">
               <p>{provinciasalida}</p>
                 <p><FaArrowAltCircleRight/></p>
               <p>{provinciallegada}</p>
            </div>
           
            <div className="container_itinerario">
               <p>{fechasalida}</p>
               <p>{horasalida}</p>
            </div>
            <div className="container_itinerario">
              
               <p>{fechallegada}</p>
               <p>{horallegada}</p>
            </div>
         </aside>
         
      
      );
}
 
export default Datos;