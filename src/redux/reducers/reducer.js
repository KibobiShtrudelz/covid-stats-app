import constants from '../constants'

const initialState = {
  isFetching: false,
  stats: [],
  error: '',
  selectedCountry: {},
  showModal: false
}

const covidStats = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_COVID_STATS_FETCHING:
      return {
        ...state,
        isFetching: true
      }

    case constants.GET_COVID_STATS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        stats: action.payload
      }

    case constants.GET_COVID_STATS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }

      case constants.SELECTED_COUNTRY_SUCCESS: {
        return {
          ...state,
          selectedCountry: action.payload
        }
      }
      
      case constants.SELECTED_COUNTRY_ERROR: {
        return {
          ...state,
          selectedCountryError: action.error
        }
      }

      case constants.FILTER_COUNTRIES_HIGH_TO_LOW: {
        return {
          ...state,
          stats: {
            ...state.stats,
            Countries: state?.stats?.Countries?.sort((a, b) => a.TotalConfirmed - b.TotalConfirmed)
          }
        }
      }

      case constants.FILTER_COUNTRIES_LOW_TO_HIGH: {
        return {
          ...state,
          stats: {
            ...state.stats,
            Countries: state?.stats?.Countries?.sort((a, b) => a.TotalConfirmed - b.TotalConfirmed)
          }
        }
      }

      case constants.TRIGGER_MODAL: {
        return {
          ...state,
          showModal: !state.showModal
        }
      }

    default:
      return state;
  }
}

export default covidStats
