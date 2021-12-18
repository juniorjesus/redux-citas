import { types } from "../types/types";

const initialState = {
    citas: []
}

export const citasReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.agregar:
            return {
                ...state,
                citas: [...state.citas, action.payload]
            }
        case types.borrar:
            return {
                ...state,
                citas: state.citas.filter(cita => cita.id !== action.payload)
            }
        case types.imagen:
            return {
                ...state,
                imagen: action.payload
            }
        default:
            return state
    }
}