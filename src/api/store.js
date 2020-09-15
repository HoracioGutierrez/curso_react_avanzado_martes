import {createStore,applyMiddleware,compose} from "redux"
import reducer from "./reducer"
import thunk from "redux-thunk"
//Me traigo la funcion para crear el middleware
import createSagaMiddleware from "redux-saga"

import rootSaga from "./sagas"

//Creo un middleware para redux-saga
let sagaMiddleware = createSagaMiddleware()

/* const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)))
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//Lo uso
let store = createStore(reducer,composeEnhancers(applyMiddleware(sagaMiddleware)));


sagaMiddleware.run(rootSaga)

export default store