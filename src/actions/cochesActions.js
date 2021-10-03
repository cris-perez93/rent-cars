import {
    OCULTAR_FORM,
    MOSTRAR_LISTA,
    VALIDAR_ERROR,
    OBTENER_DATOS,
    MOSTRAR_SPINNER,
    DIAS_RESERVA,
    VALIDAR_FECHAS,
    FILTRAR_COCHES,
    

} from "../types";



export function formActions(datos) {
    return (dispatch) => {
       dispatch( submitAction());
       dispatch(obtenerDatos(datos))
       
       
     }
}

const submitAction = () => ({
    type:MOSTRAR_LISTA,
    

})

const obtenerDatos = datos => ({
    type: OBTENER_DATOS,
    payload: datos
})






export function errorAction() {
    return (dispatch) => {
       
       dispatch(errorValidate());
       dispatch(errorValidateFechas())
            
}}


const errorValidate = () => ({
    type: VALIDAR_ERROR,
    
})

const errorValidateFechas = () => ({
    type: VALIDAR_FECHAS
})



export function ocultarFormAction() {
    return(dispatch) => {
         dispatch(ocultarForm());
         //dispatch(provinciaForm())
    }
}

const ocultarForm = () => ({
    type: OCULTAR_FORM
})


export function spinnerAction() {
    return(dispatch) => {
         dispatch(spinnerForm());
         
    }
}

const spinnerForm =  () => ({
    type: MOSTRAR_SPINNER
}
)

export function diasAction(dia) {
    return(dispatch) => {
        dispatch(diasReserva(dia));
    }
}

const diasReserva = (dia) => ({
    type: DIAS_RESERVA,
    payload: dia 
})



export function filtrarTipoAction(coche) {
    return(dispatch) => {
        dispatch(filtrarDeportivo(coche));
    }
}


const filtrarDeportivo =  coche => ({
    type: FILTRAR_COCHES,
    payload: coche
})










