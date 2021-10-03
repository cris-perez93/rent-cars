
import TipoCoche from './TipoCoche';
import CardCoche from './CardCoche';
import Datos from './Datos';


// Redux
import { useSelector,} from 'react-redux';



const ListaCoches = ({busqueda}) => {

  

  // obtener el state
  const cochesfiltrados= useSelector(state => state.coches.cochesfiltrados)
  
return (
       
         <div className="container_lista">
           
              <Datos
                    
                  busqueda ={busqueda}
                              
               />
                       
             <div className="container_content">
                 <TipoCoche
                    
                    
                  />
                
                <div className="listado_coches">
                    {cochesfiltrados.length === 0
                    ? (<p>Escoge un tipo</p>)

                        :cochesfiltrados.map(coche =>(
                            <CardCoche
                              key={coche.id}
                              coche ={coche}
                              
                            />
                        ))
                    }
          
                </div> 
            </div>
          </div>
          
       
      );
}
 
export default ListaCoches;