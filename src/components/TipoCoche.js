import Deportivo from '../img/deportivo.png'
import Furgoneta from '../img/furgoneta.png'
import Todoterreno from '../img/Todoterreno.png'

const TipoCoche = () => {
    return (
        <div className="container_tipo">
            <div className="tipo_card_car">
                <p>Deportivo</p>
                <img className="tipo_cards_img"  src={Deportivo} alt="deportivo"></img>
            </div>
            <div className="tipo_card_car">
                <p>Furgoneta</p>
                <img className="tipo_cards_img" src={Furgoneta} alt="furgoneta"></img>
            </div>
            <div className="tipo_card_car">
                <p>4x4</p>
                <img className="tipo_cards_img" src={Todoterreno} alt="todoterreno"></img>
            </div>
            
        </div>

            
            
         
      );
}
 
export default TipoCoche;