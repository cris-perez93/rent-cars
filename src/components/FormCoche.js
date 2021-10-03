import { useState} from 'react';
import ListaCoches from './ListaCoches';
import ClipLoader from 'react-spinners/ClipLoader'
import { css } from "@emotion/react";
import OptionsSelect1 from './OptionsSelect1';



//actions redux
import { formActions, errorAction, ocultarFormAction, spinnerAction, diasAction,} from '../actions/cochesActions';
import {useDispatch, useSelector} from 'react-redux'


const FormCoche = () => {

 const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const [busqueda, setBusqueda] = useState({
        provinciasalida:'',
        provinciallegada:'',
        fechasalida :'',
        fechallegada:'',
        horasalida:'',
        horallegada:'',
        

})  



   const {provinciallegada, provinciasalida, fechasalida, fechallegada, horasalida, horallegada} = busqueda;

    const dispatch = useDispatch();

    // acceder al state del store
    const submitAction = () => dispatch (formActions());
    const obtenerDatos = dato => dispatch (formActions(dato));
    //
    const ocultarForm = () => dispatch (ocultarFormAction());
    //
    const errorValidate = () => dispatch (errorAction());
    const errorValidateFechas = () => dispatch (errorAction());
    //
    const spinnerForm = () => dispatch (spinnerAction())
    //
    const diasReserva = dia => dispatch (diasAction(dia))


    // obtener el state
    const lista = useSelector(state =>state.coches.lista);
    const error = useSelector(state =>state.coches.error);
    const errorfecha = useSelector(state =>state.coches.errorfecha)
    const formulario = useSelector(state => state.coches.formulario)
    const loading = useSelector (state => state.coches.loading)
    
    
    
   const onChangeBusqueda = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })

        

    }
    
  


    const onSubmitBusqueda = e =>{
        e.preventDefault();

        //validar campos vacios
        if(provinciasalida === '' || provinciallegada ==='' || fechasalida ==='' || fechallegada ==='' || horasalida ==='' || horallegada ==='' ){

            errorValidate();
             return;
}

        const date1 = new Date (fechasalida)
        const date2 = new Date (fechallegada)

        const diff = (date2.getTime() - date1.getTime()) / (1000 * 3600 * 24);

        diasReserva(diff);  
        
        if (date1.getTime() >= date2.getTime()){
            errorValidateFechas()
            return;
        }



        


    setTimeout(() => {

        obtenerDatos({
            provinciasalida,
            provinciallegada,
            fechasalida ,
            fechallegada,
            horasalida,
            horallegada,
            
            })

            spinnerForm()

            ocultarForm()
    
    }, 2000)

        


    
        

    
}

    const onClick = () => {
        submitAction()
    }

    


    




return (
        
    <div className="container">


    {formulario ? 
        <div className="container_form">
           
                
            <div className="container_titulo">       
                <h1 className="titulo">RENT CAR</h1>
                <div className="line"></div>
                <h2 className="subtitulo">Alquila tu vehiculo de la manera mas sencilla</h2>
                <h3 className="lorem">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. .</h3>
            </div>
              
            
           
           <form onSubmit ={onSubmitBusqueda} className="form">
                <h2>Haz tu reserva ahora</h2>
                
                
                
                <div className="form_field">
                        
                        <select  
                            name="provinciasalida" 
                            value={provinciasalida} 
                            onChange={onChangeBusqueda} className="form-control"
                        >
                            <OptionsSelect1/>
                        </select>
                
                        <select 
                            onChange={onChangeBusqueda} 
                            name="provinciallegada" value={provinciallegada}  
                            className="form-control">
                            <OptionsSelect1/>
                        </select>
                </div>

                <div className="form_field">
                    
                    <input
                    
                        onChange={onChangeBusqueda}
                        className="form-control"  
                        type="date" 
                        name='fechasalida'
                        value={fechasalida}
                        
                    />
                    <input
                    onChange={onChangeBusqueda}
                    className="form-control" 
                    type ="time"
                    name ="horasalida"
                    value={horasalida}
                    />
                </div>
                <div className="form_field">
                    <input
                        onChange={onChangeBusqueda}
                        className="form-control" 
                        type="date" 
                        name='fechallegada'
                        value={fechallegada}
                        
                    />
                     <input
                        onChange={onChangeBusqueda}
                        className="form-control" 
                        type ="time"
                        name ="horallegada"
                        value={horallegada}
                />
                </div>
                

                <div className="form_field">
                    <button 
                        onClick = {onClick} 
                        type="submit"
                        className="btn btn-big"
                        
                        >Buscar
                    </button>
                </div>
                {errorfecha ? <p className="error_validate"> El formato de la fecha es incorrecto</p> : null}
                { error ? <p className="error_validate">Es obligatorio rellenar todos los campos</p> : null }
                
                {loading ? 
                   <ClipLoader
                       css={override}
                   
                   /> 
                : null}

                </form> : 

                </div> :null} 
                
                { lista ?
                 <ListaCoches
                   busqueda = {busqueda}
                   
                   
                />  : null}
                
        </div>
        
      );
}
 
export default FormCoche;