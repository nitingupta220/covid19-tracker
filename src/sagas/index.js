import { takeEvery, call, put } from "redux-saga/effects";
import { GET_ALL_DATA, GET_COUNTRIES, GET_COUNTRY_DATA } from "../constants";
import {
  getAllDataSuccess,
  errorInAPI,
  getCountriesSuccess,
  getCountriesSuccessData,
} from "../actions";

function* watcherSaga() {
  yield takeEvery(GET_ALL_DATA, getAllDetails);
  yield takeEvery(GET_COUNTRIES, getAllCountries);
  yield takeEvery(GET_COUNTRY_DATA, getCountryData);
}

function* getAllDetails() {
  try {
    const payload = yield call(getAllData);
    yield put(getAllDataSuccess(payload));
  } catch (error) {
    yield put(errorInAPI(error));
  }
}

async function getAllData() {
  const response = await fetch(`https://covid19.mathdro.id/api/`);
  return await response.json();
}

function* getAllCountries() {
  try {
    const payload = yield call(getCountries);
    yield put(getCountriesSuccess(payload));
  } catch (error) {
    yield put(errorInAPI(error));
  }
}

async function getCountries() {
  const response = await fetch(`https://covid19.mathdro.id/api/countries`);
  return await response.json();
}

function* getCountryData(action) {
  try {
    const payload = yield call(getCountry, action.payload);
    yield put(getCountriesSuccessData(payload));
  } catch (error) {
    yield put(errorInAPI(error));
  }
}

async function getCountry(country) {
  const response = await fetch(
    `https://covid19.mathdro.id/api/countries/${country.value}`
  );
  return await response.json();
}

export default watcherSaga;
