import {  useEffect } from 'react';
import TipoCoche from './TipoCoche';
import CocheImagen from '../img/deportivo.png'
import CardCoche from './CardCoche';
import Datos from './Datos';


// Redux
import { useSelector, useDispatch } from 'react-redux';
import { mostrarCochesAction } from '../actions/cochesActions';


const ListaCoches = ({busqueda}) => {

  const dispatch = useDispatch();

  // acceder al state del store
  
  //const mostrarCoches = coches => dispatch(mostrarCochesAction(coches));
  //mostrarCoches();

  // obtener el state
  const coches = useSelector(state =>state.coches.coches);
  console.log(coches)

  


return (
       
         <div className="container_lista"> 
            <div>
              <h2>Lista de coches disponibles</h2>
            </div>
            <TipoCoche
                
                
             />
            <div className="container_datos">
              
              <Datos
                busqueda = { busqueda }
              />
               
            </div>
            <ul className="listado_coches">
                {coches.length === 0
                    ?(<li><p>No hay información</p></li>)

                    :coches.map(coche =>(
                        <CardCoche
                           key={coche.id}
                           coche ={coche}
                        />
                    ))
                }
      
            </ul> 
          </div>
          
       
      );
}
 
export default ListaCoches;