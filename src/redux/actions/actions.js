import axios from 'axios'

import constants from '../constants'

export const getCovidStats = () => async dispatch => {
  try {
    const res = await axios('https://api.covid19api.com/summary', {
      headers: {
        "X-Access-Token": "5cf9dfd5-3449-485e-b5ae-70a60e997864",
        "Access-Control-Allow-Origin": "https://api.covid19api.com"
      }
    })


    const filteredCountries = []
    const countriesMock = [
      { Country: 'Country_1' },
      { Country: 'Country_2' },
      { Country: 'Country_3' },
      { Country: 'Country_4' },
      { Country: 'Country_5' },
      { Country: 'Country_6' },
      { Country: 'Country_7' },
      { Country: 'Country_8' },
      { Country: 'Country_9' },
      { Country: 'Country_10' }
    ]

    res?.data?.Countries?.map(country => filteredCountries.length < 10 && filteredCountries.push(country))

    if (res.status >= 200 && res.status < 400) {
      dispatch({
        type: constants.GET_COVID_STATS_SUCCESS,
        payload: {
          ...res.data,
          Countries: filteredCountries?.length > 0 ? filteredCountries : countriesMock
        } 
      })
    } else {
      dispatch({
        type: constants.GET_COVID_STATS_SUCCESS,
        payload: {
          Countries: countriesMock 
        } 
      })
    }
  } catch (error) {
    
  }
}

export const selectedCountry = (payload) => dispatch => {
  if (payload) {
     dispatch({ 
      type: constants.SELECTED_COUNTRY_SUCCESS,
      payload
    })
  } else {
    dispatch({ 
      type: constants.SELECTED_COUNTRY_ERROR,
      error: "Something went wrong. Please select country again."
    })
  }
}

export const filterCountries = direction => dispatch => {
  console.log('direction', direction)
  if (direction === 'highToLow') {
    dispatch({ type: constants.FILTER_COUNTRIES_HIGH_TO_LOW })
  }

  if (direction === 'lowToHigh') {
    dispatch({ type: constants.FILTER_COUNTRIES_LOW_TO_HIGH })
  }
}

export const triggerModal = () => dispatch => dispatch({ type: constants.TRIGGER_MODAL })
