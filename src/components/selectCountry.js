/* eslint-disable */
import React, { useState } from "react"
import { useSelector } from 'react-redux';
import { today } from '../redux/covid/covid';
import style from './HomePage.module.css';
import Button from './submitBtn';
const SelectCountry = () => {
    const state = useSelector(state => state.covidReducer);
    const [select, setSelect] = useState('Afghanistan');
    let countries;
    let countriesKeys;
    if (state.data.dates) {
      countries = state.data.dates[today].countries;
      countriesKeys = Object.entries(countries);
    }

    const handleCategory = (event) => {
        setSelect(event.target.value);
    };
    console.log(state.data.dates[today]);

    return(
        <form className={style.form}>
        <h2 className={`titleFont ${style.worldTitle}`}><span className={style.paddingLeft}>Filter By Country:</span></h2>
        <div className={style.labelDiv}>
          <label htmlFor="countries" className={`textFont ${style.label}`}>
            <select className={style.select} name="countries" id="countries" onChange={(e) => { handleCategory(e); }}>
              {
                countriesKeys.map((country) => (
                  <option
                    className={`textFont ${style.option}`}
                    key={country[0]}
                    value={country[0]}
                  >
                    {country[0]}
                  </option>
                ))
              }
            </select>
          </label>
        </div>
        <Button icon="right" select={select} path={`/${select}`} />
      </form>
    )
}

export default SelectCountry;