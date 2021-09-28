
import TipoCoche from './TipoCoche';
import CardCoche from './CardCoche';
import Datos from './Datos';


// Redux
import { useSelector,} from 'react-redux';



const ListaCoches = ({busqueda}) => {

  

  // obtener el state
  const coches = useSelector(state =>state.coches.coches);
  
return (
       
         <div className="container_lista"> 
           
            
            
              <Datos
                busqueda = { busqueda }
              />
               
            
            <div className="container_content">
                <TipoCoche
                    
                    
                />
                
                <div className="listado_coches">
                    {coches.length === 0
                        ?(<li><p>No hay información</p></li>)

                        :coches.map(coche =>(
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