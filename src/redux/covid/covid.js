/* eslint-disable */
import axios from 'axios';
const GET_DATA_SUCCESS = 'covid/covidReducer/GET_DATA_SUCCESS';
const GET_DATA = 'covid/covidReducer/GET_DATA';
const REQUEST_FAILURE = 'covid/covidReducer/REQUEST_FAILURE';
const COUNTRY_UPDATES = 'covid/covidReducer/COUNTRY_UPDATES';
export const today = new Date().toISOString().split('T')[0];

const initialState = {
  data: {},
  loading: false,
  country: 'Afghanistan',
  error: {}
}

const reducer = (state = initialState, action) => {
  if (state === undefined || action === undefined) {
    return initialState;
  }
  switch (action.type) {
    case GET_DATA: 
      return { ...state, loading:true};
    case GET_DATA_SUCCESS:
      return  {...state, data: action.payload, loading:false };
    case REQUEST_FAILURE:
      return { ...state, error: action.error, loading: false };
    case COUNTRY_UPDATES:
      return {...state, country: action.payload };
    default:
      return state;
  }
};

export const fetchData = () => ({
  type: GET_DATA
});

export const getDailyUpdates = (payload) => ({
  type: GET_DATA_SUCCESS,
  payload
});

export const fetchFailure = (err) => ({
  type: REQUEST_FAILURE,
  err,
});

export const getCountryUpdates = (payload) => ({
  type: COUNTRY_UPDATES,
  payload,
});

export const getData = () => async (dispatch) => {
  dispatch(fetchData());
  const response = await axios.get(`https://api.covid19tracking.narrativa.com/api/${today}`);
  const data = await response.data;
  return dispatch(getDailyUpdates(data));
};

export default reducer;