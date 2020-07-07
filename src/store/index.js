import { createStore, applyMiddleware } from "redux";
import createSagaMiddleWare from "redux-saga";
import rootReducer from "../reducer";
import watcherSaga from "../sagas";

const sagaMiddleWare = createSagaMiddleWare();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(watcherSaga);

export default store;
