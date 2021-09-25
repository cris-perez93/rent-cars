import { MOSTRAR_LISTA,VALIDAR_ERROR, OBTENER_DATOS, OCULTAR_FORM,MOSTRAR_PROVINCIA_FORM} from "../types";


// cada reducer tiene su propio state
const initialState = {
    coches: [
        { id:1,nombre: 'Ferrari 488 GTB', imagen: "" , precio :"200", tipo: "deportivo" },
        { id:2,nombre: 'Nissan Murano', imagen: "" , precio :"200", tipo: "todoterreno"},
        { id:3,nombre: 'Nissan Skyline GT-R', imagen: "" , precio :"200", tipo: "deportivo"},
        { id:4,nombre: 'Bugatti Veyron', imagen: "" , precio :"200", tipo: "deportivo"},
        { id:5,nombre: 'Volkswagen Tiguan', imagen: "" , precio :"200", tipo: "todoterreno" },
        { id:6,nombre: 'Nissan NV200', imagen: "" , precio :"200", tipo: "furgoneta"},
        { id:7,nombre: 'Nissan NV Passenger', imagen: "" , precio :"200", tipo: "furgoneta"},
        { id:8,nombre: 'Nissan Qashqai', imagen: "" , precio :"200", tipo: "todoterreno"},
        { id:9,nombre: 'Nissan NV300', imagen: "" , precio :"200", tipo: "furgoneta"}
    ],
    formulario:true,
    datos:[],
    lista: false,
    error: false,
    loading: false,
    provinciaform: false 
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
                //formulario: false

            }
            
        case VALIDAR_ERROR:
            return{
                ...state,
                error: true,
                lista:false
                
                
            }

        case OCULTAR_FORM:
           return{
                ...state,
                formulario: false
               
            }

        case MOSTRAR_PROVINCIA_FORM:
            return{
                ...state,
                provinciaform: true
            }

       
         
           default:
            return state;
    }
}
