import { types } from "../types/types"

export const AgregarCitas = (cita) => {
    return {
        type: types.agregar,
        payload: cita
    }
}

export const BorrarCitas = (id) => {
    return {
        type: types.borrar,
        payload: id
    }
}