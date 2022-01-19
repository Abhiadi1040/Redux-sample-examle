// import { createStore, compose } from 'redux';    
import reducers  from "./reducers/index";

import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

// import rootReducer from "./reducers";
 import helloSaga from "./sagas/sagas";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//   reducers,
//   composeEnhancers(applyMiddleware(sagaMiddleware))
// );
//  sagaMiddleware.run(helloSaga);

// export default store;


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
  composeEnhancers()
);


export default store;



