import {
  GET_ALL_DATA,
  GET_COUNTRIES,
  GET_COUNTRY_DATA,
  GET_ALL_DATA_SUCCESS,
  ERRRORED,
  GET_COUNTRIES_SUCCESS,
  GET_COUNTRY_DATA_SUCCESS,
} from "../constants";

export function getAllData() {
  return { type: GET_ALL_DATA };
}

export function getCountries() {
  return { type: GET_COUNTRIES };
}

export function getCountryData(data) {
  return { type: GET_COUNTRY_DATA, payload: data };
}

export function getAllDataSuccess(payload) {
  return { type: GET_ALL_DATA_SUCCESS, payload };
}

export function errorInAPI(error) {
  return { type: ERRRORED, payload: error };
}

export function getCountriesSuccess(payload) {
  return { type: GET_COUNTRIES_SUCCESS, payload };
}

export function getCountriesSuccessData(payload) {
  return { type: GET_COUNTRY_DATA_SUCCESS, payload };
}
