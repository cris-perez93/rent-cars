import {OCULTAR_FORM, MOSTRAR_LISTA,VALIDAR_ERROR,OBTENER_DATOS,MOSTRAR_SPINNER,DIAS_RESERVA} from "../types";




// Obtener busqueda

export function formActions(dato) {
    return (dispatch) => {
       dispatch( submitAction());
       dispatch(obtenerDatos(dato))
       
      
            
        
   }
}

const submitAction = () => ({
    type:MOSTRAR_LISTA,
    

})

const obtenerDatos = dato => ({
    type: OBTENER_DATOS,
    payload: dato
})



export function errorAction() {
    return (dispatch) => {
       
       dispatch(errorValidate())
            
}}


const errorValidate = () => ({
    type: VALIDAR_ERROR,
    
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







