import { MOSTRAR_LISTA,VALIDAR_ERROR, OBTENER_DATOS, OCULTAR_FORM,MOSTRAR_SPINNER,DIAS_RESERVA} from "../types";
import annete from '../img/anette.png'

import gtr from '../img/gtr.png'
import murano from '../img/murano.png'
import california from '../img/california.png'
import qashqai from '../img/qashqai.png'
import tesla from '../img/tesla.png'
import nissan from '../img/furgoneta.png'
import ferrari from '../img/deportivo.png'
import tiguan from '../img/Todoterreno.png'
import bugatti from '../img/bugati.png'



// cada reducer tiene su propio state
const initialState = {
    coches: [
        { id:1,nombre: 'Ferrari 488 GTB', imagen: ferrari , precio :100, tipo: "deportivo",plazas: '5', motor: 'Gasolina' },
        { id:2,nombre: 'Nissan Murano', imagen: murano , precio :50, tipo: "todoterreno",plazas: '5', motor: 'Diesel'},
        { id:3,nombre: 'Nissan Skyline GT-R', imagen: gtr , precio :100, tipo: "deportivo",plazas: '5', motor: 'Gasolina'},
        { id:4,nombre: 'Bugatti Veyron', imagen: bugatti , precio :100, tipo: "deportivo",plazas: '5', motor: 'Gasolina'},
        { id:5,nombre: 'Volkswagen Tiguan', imagen: tiguan , precio :50, tipo: "todoterreno",plazas: '5', motor: 'Diesel' },
        { id:6,nombre: 'Nissan NV200', imagen: nissan , precio :20, tipo: "furgoneta",plazas: '5', motor: 'Diesel'},
        { id:7,nombre: 'Volkswaguen California', imagen: california , precio :"20", tipo: "furgoneta",plazas: '5', motor: 'Diesel'},
        { id:8,nombre: 'Nissan Qashqai', imagen: qashqai , precio :50, tipo: "todoterreno",plazas: '5', motor: 'Diesel'},
        { id:9,nombre: 'Nissan NV300', imagen:annete , precio :20, tipo: "furgoneta",plazas: '5', motor: 'Diesel'},
        { id:10,nombre: 'Tesla', imagen:tesla , precio :80, tipo: "electrico",plazas: '5', motor: 'Electrico'}
    ],
    formulario:true,
    datos:[],
    lista: false,
    error: false,
    loading: false,
    provinciaform: false,
    diasreserva: []

}

export default function(state = initialState, action) {
    switch(action.type){

        case MOSTRAR_LISTA:
            return{
                ...state,
                lista : true,
                
                
            }


        case OBTENER_DATOS:
            return{
                ...state,
                datos: [...state.datos, action.payload],
                error: false,
                loading:true,
                lista:false
                
                

            }
            
        case VALIDAR_ERROR:
            return{
                ...state,
                error: true,
                lista:false,
                loading: false
                
                
            }

        case OCULTAR_FORM:
           return{
                ...state,
                formulario: false,
                loading:false,
                lista:true
               
            }
        case MOSTRAR_SPINNER: 
        return{
            ...state,
            loading: true,
            
        }

        case DIAS_RESERVA:
            return{
                ...state,
                diasreserva: [ action.payload]
            }

     
       
         
           default:
            return state;
    }
}
