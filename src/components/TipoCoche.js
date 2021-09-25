import Deportivo from '../img/deportivo.png'
import Furgoneta from '../img/furgoneta.png'
import Todoterreno from '../img/Todoterreno.png'

const TipoCoche = () => {
    return (
        <div className="container_tipo">
            <div className="card_car">
                <p>Deportivo</p>
                <img width="100px"  src={Deportivo} alt="deportivo"></img>
            </div>
            <div className="card_car">
                <p>Furgoneta</p>
                <img  width="100px" src={Furgoneta} alt="furgoneta"></img>
            </div>
            <div className="card_car">
                <p>4x4</p>
                <img width="100px" src={Todoterreno} alt="todoterreno"></img>
            </div>
            
        </div>

            
            
         
      );
}
 
export default TipoCoche;