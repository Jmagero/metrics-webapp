/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://api.covid19tracking.narrativa.com/api/2021-08-09/country/France';

export const fetchData = createAsyncThunk(
  'categories/getCategories',
  async () => {
    const { data } = await axios.get(`${baseUrl}`);
    return data;
  },
);

export const fetchCategories = createSlice({
  name: 'categories',
  initialState: {
    list: [],
    status: 'idle',
    todayCases: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        const todayCases = action.payload.dates['2021-08-09'].countries.France.today_confirmed;
        const myData = [];
        Object.entries(action.payload.dates['2021-08-09'].countries.France.regions).forEach((el) => {
          myData.push({
            id: el[1].id,
            name: el[1].name,
            confirmedToday: el[1].today_confirmed,
            deathsToday: el[1].today_deaths,
            newDeaths: el[1].today_new_deaths,
            newCases: el[1].today_new_confirmed,
            intensiveCare: el[1].today_new_intensive_care,
            hospitalised: el[1].today_total_hospitalised_patients,
          });
        });
        state.list = myData;
        state.todayCases = `${todayCases} Active`;
        state.status = 'fulfilled';
      })
      .addCase(fetchData.pending, (state) => {
        state.status = [];
        state.status = 'pending';
        state.todayCases = '';
      });
  },
});

export default fetchCategories.reducer;
