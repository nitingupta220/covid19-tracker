import {
  GET_ALL_DATA_SUCCESS,
  GET_COUNTRIES_SUCCESS,
  GET_COUNTRY_DATA_SUCCESS,
} from "../constants";

const initialState = {
  title: "Covid-19 Tracker",
  allDetails: {},
  countries: [],
  countryData: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DATA_SUCCESS:
      return Object.assign({}, state, {
        allDetails: action.payload,
      });
    case GET_COUNTRIES_SUCCESS:
      const countries = [];
      action.payload.countries.map((el) => {
        const newObject = {};
        newObject.label = el.name;
        newObject.value = el.name;
        return countries.push(newObject);
      });
      return Object.assign({}, state, {
        countries: state.countries.concat(countries),
      });
    case GET_COUNTRY_DATA_SUCCESS:
      return Object.assign({}, state, {
        countryData: action.payload,
      });
    default:
      return state;
  }
};

export default rootReducer;
