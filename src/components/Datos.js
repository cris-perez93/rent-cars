

const Datos = ({busqueda}) => {
    
   const {
   provinciasalida,
   provinciallegada,
   fechasalida ,
   fechallegada,
   horasalida,
   horallegada} = busqueda
   
return (
      <ul>
         <h1>Datos obtenidos del form</h1>
         <li>{provinciasalida}</li>
         <li>{provinciallegada}</li>
         <li>{fechasalida}</li>
         <li>{fechallegada}</li>
         <li>{horasalida}</li>
         <li>{horallegada}</li>
         
      </ul>
      );
}
 
export default Datos;