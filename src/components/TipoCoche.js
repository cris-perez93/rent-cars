import Deportivo from '../img/deportivo.png'
import Furgoneta from '../img/furgoneta.png'
import Todoterreno from '../img/Todoterreno.png'
import {useDispatch} from 'react-redux';
import { filtrarTipoAction} from '../actions/cochesActions';


const TipoCoche = () => {

    const dispatch = useDispatch();

    const filtrarDeportivo = coche => dispatch (filtrarTipoAction(coche));

    
     const filter = coche => {
        filtrarDeportivo(coche)
     }
   
      

return (
        <div className="container_tipo">
            <div className="tipo_card_car" onClick= {()=>filter('deportivo')} >
                <p>Deportivo</p>
                <img className="tipo_cards_img"  src={Deportivo} alt="deportivo"></img>
            </div>
            <div className="tipo_card_car"  onClick= {()=>filter('furgoneta')}>
                <p>Furgoneta</p>
                <img className="tipo_cards_img" src={Furgoneta} alt="furgoneta"></img>
            </div>
            <div className="tipo_card_car" onClick= {()=>filter('todoterreno')}>
                <p>4x4</p>
                <img className="tipo_cards_img" src={Todoterreno} alt="todoterreno"></img>
            </div>
            
        </div>

            
            
         
      );
}
 
export default TipoCoche;