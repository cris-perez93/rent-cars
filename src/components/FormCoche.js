import Imagen from '../img/img-form.jpg'
import { useState } from 'react';
import ListaCoches from './ListaCoches';
import { Link } from 'react-router-dom';


//actions redux
import { formActions, errorAction, ocultarFormAction } from '../actions/cochesActions';
import {useDispatch, useSelector} from 'react-redux'

const FormCoche = () => {


    const [busqueda, setBusqueda] = useState({
        provinciasalida:'',
        provinciallegada:'',
        fechasalida :'',
        fechallegada:'',
        horasalida:'',
        horallegada:''

    })

    const {provinciallegada, provinciasalida, fechasalida, fechallegada, horasalida, horallegada} = busqueda;

    const dispatch = useDispatch();

    // acceder al state del store
    const submitAction = () => dispatch (formActions());
    const obtenerDatos = dato => dispatch (formActions(dato));


    const ocultarForm = () => dispatch (ocultarFormAction());
    const provinciaForm = () => dispatch (ocultarFormAction());


    const errorValidate = () => dispatch (errorAction());


    // obtener el state
    const lista = useSelector(state =>state.coches.lista);
    const error = useSelector(state =>state.coches.error)
    const formulario = useSelector(state => state.coches.formulario)
    const provinciaform = useSelector(state => state.coches.provinciaform)
    
    
    
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

        

        obtenerDatos({
        provinciasalida,
        provinciallegada,
        fechasalida ,
        fechallegada,
        horasalida,
        horallegada
        })

        ocultarForm()




    }

    const onClick = () => {
        submitAction()
    }

    const onClickProvincia = () => {
        provinciaForm()
    }

return (
        
    <div className="container">


    {formulario ? 
        <div className="container_form">
            <img className="img_form" src = {Imagen} alt="coche"/>
           
           
                
            <form onSubmit ={onSubmitBusqueda} className="form">
                
                
                <h1 className="title_form">Alquila tu coche ideal!</h1>
                
                
                
           
                <div className="form_field">
                        
                        <select  
                        name="provinciasalida" 
                        value={provinciasalida} 
                        onChange={onChangeBusqueda} className="form-control"
                        >
                            <option value="">Elige Provincia</option>
                            <option value="Álava/Araba">Álava/Araba</option>
                            <option value="Albacete">Albacete</option>
                            <option value="Alicante">Alicante</option>
                            <option value="Almería">Almería</option>
                            <option value="Asturias">Asturias</option>
                            <option value="Ávila">Ávila</option>
                            <option value="Badajoz">Badajoz</option>
                            <option value="Baleares">Baleares</option>
                            <option value="Barcelona">Barcelona</option>
                            <option value="Burgos">Burgos</option>
                            <option value="Cáceres">Cáceres</option>
                            <option value="Cádiz">Cádiz</option>
                            <option value="Cantabria">Cantabria</option>
                            <option value="Castellón">Castellón</option>
                            <option value="Ceuta">Ceuta</option>
                            <option value="Ciudad Real">Ciudad Real</option>
                            <option value="Córdoba">Córdoba</option>
                            <option value="Cuenca">Cuenca</option>
                            <option value="Gerona/Girona">Gerona/Girona</option>
                            <option value="Granada">Granada</option>
                            <option value="Guadalajara">Guadalajara</option>
                            <option value="Guipúzcoa/Gipuzkoa">Guipúzcoa/Gipuzkoa</option>
                            <option value="Huelva">Huelva</option>
                            <option value="Huesca">Huesca</option>
                            <option value="Jaén">Jaén</option>
                            <option value="La Coruña/A Coruña">La Coruña/A Coruña</option>
                            <option value="La Rioja">La Rioja</option>
                            <option value="Las Palmas">Las Palmas</option>
                            <option value="León">León</option>
                            <option value="Lérida/Lleida">Lérida/Lleida</option>
                            <option value="Lugo">Lugo</option>
                            <option value="Madrid">Madrid</option>
                            <option value="Málaga">Málaga</option>
                            <option value="Melilla">Melilla</option>
                            <option value="Murcia">Murcia</option>
                            <option value="Navarra">Navarra</option>
                            <option value="Orense/Ourense">Orense/Ourense</option>
                            <option value="Palencia">Palencia</option>
                            <option value="Pontevedra">Pontevedra</option>
                            <option value="Salamanca">Salamanca</option>
                            <option value="Segovia">Segovia</option>
                            <option value="Sevilla">Sevilla</option>
                            <option value="Soria">Soria</option>
                            <option value="Tarragona">Tarragona</option>
                            <option value="Tenerife">Tenerife</option>
                            <option value="Teruel">Teruel</option>
                            <option value="Toledo">Toledo</option>
                            <option value="Valencia">Valencia</option>
                            <option value="Valladolid">Valladolid</option>
                            <option value="Vizcaya/Bizkaia">Vizcaya/Bizkaia</option>
                            <option value="Zamora">Zamora</option>
                            <option value="Zaragoza">Zaragoza</option>
                        </select>
                
                    
                    
                  
                  
                  <select onChange={onChangeBusqueda} name="provinciallegada" value={provinciallegada}  className="form-control">
                        <option value="">Elige Provincia</option>
                        <option value="Álava/Araba">Álava/Araba</option>
                        <option value="Albacete">Albacete</option>
                        <option value="Alicante">Alicante</option>
                        <option value="Almería">Almería</option>
                        <option value="Asturias">Asturias</option>
                        <option value="Ávila">Ávila</option>
                        <option value="Badajoz">Badajoz</option>
                        <option value="Baleares">Baleares</option>
                        <option value="Barcelona">Barcelona</option>
                        <option value="Burgos">Burgos</option>
                        <option value="Cáceres">Cáceres</option>
                        <option value="Cádiz">Cádiz</option>
                        <option value="Cantabria">Cantabria</option>
                        <option value="Castellón">Castellón</option>
                        <option value="Ceuta">Ceuta</option>
                        <option value="Ciudad Real">Ciudad Real</option>
                        <option value="Córdoba">Córdoba</option>
                        <option value="Cuenca">Cuenca</option>
                        <option value="Gerona/Girona">Gerona/Girona</option>
                        <option value="Granada">Granada</option>
                        <option value="Guadalajara">Guadalajara</option>
                        <option value="Guipúzcoa/Gipuzkoa">Guipúzcoa/Gipuzkoa</option>
                        <option value="Huelva">Huelva</option>
                        <option value="Huesca">Huesca</option>
                        <option value="Jaén">Jaén</option>
                        <option value="La Coruña/A Coruña">La Coruña/A Coruña</option>
                        <option value="La Rioja">La Rioja</option>
                        <option value="Las Palmas">Las Palmas</option>
                        <option value="León">León</option>
                        <option value="Lérida/Lleida">Lérida/Lleida</option>
                        <option value="Lugo">Lugo</option>
                        <option value="Madrid">Madrid</option>
                        <option value="Málaga">Málaga</option>
                        <option value="Melilla">Melilla</option>
                        <option value="Murcia">Murcia</option>
                        <option value="Navarra">Navarra</option>
                        <option value="Orense/Ourense">Orense/Ourense</option>
                        <option value="Palencia">Palencia</option>
                        <option value="Pontevedra">Pontevedra</option>
                        <option value="Salamanca">Salamanca</option>
                        <option value="Segovia">Segovia</option>
                        <option value="Sevilla">Sevilla</option>
                        <option value="Soria">Soria</option>
                        <option value="Tarragona">Tarragona</option>
                        <option value="Tenerife">Tenerife</option>
                        <option value="Teruel">Teruel</option>
                        <option value="Toledo">Toledo</option>
                        <option value="Valencia">Valencia</option>
                        <option value="Valladolid">Valladolid</option>
                        <option value="Vizcaya/Bizkaia">Vizcaya/Bizkaia</option>
                        <option value="Zamora">Zamora</option>
                        <option value="Zaragoza">Zaragoza</option>
                    </select>
                </div>

                <div className="form_field">
                
                    <input
                        onChange={onChangeBusqueda}
                        className="input_form"  
                        type="date" 
                        name='fechasalida'
                        value={fechasalida}
                        
                    />
                    <input
                    onChange={onChangeBusqueda}
                    className="input_form" 
                    type ="time"
                    name ="horasalida"
                    value={horasalida}
                    />
                </div>
                <div className="form_field">
                    <input
                        onChange={onChangeBusqueda}
                        className="input_form" 
                        type="date" 
                        name='fechallegada'
                        value={fechallegada}
                        
                    />
                     <input
                        onChange={onChangeBusqueda}
                        className="input_form" 
                        type ="time"
                        name ="horallegada"
                        value={horallegada}
                />
                </div>
                

                
               

                <div className="form_field">
                <button onClick = {onClick} type="submit" className="btn_submit">Buscar</button>
                </div>
                { error ? <p>Es obligatorio rellenar todos los campos</p> : null }

                
                

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