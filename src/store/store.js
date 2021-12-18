import { createStore, combineReducers } from 'redux'
import { citasReducer } from '../reducers/citasReducer'
import { guardarDatos, obtenerDatos } from '../utils/LocalStorage'

const storageState = obtenerDatos()

const reducers = combineReducers({
    citas: citasReducer
})

const store = createStore(
    reducers,
    storageState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
    guardarDatos({
        citas: store.getState().citas
    })
})


export default store;

