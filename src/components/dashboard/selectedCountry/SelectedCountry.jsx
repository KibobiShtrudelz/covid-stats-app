import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import paths from '../../../paths'
import actions from '../../../redux/actions'

import { Wrap } from './selectedCountry.styled'

const SelectedCountry = ({ selectedCountry, showModal }) => {
  const dispatch = useDispatch()

  return selectedCountry && <Wrap className='SELECTED_KONTRI' isSelected={selectedCountry.Country?.length > 0}>
  <h1>{selectedCountry?.Country}</h1>

  <p>
    <span>New Confirmed:</span>
    <span>{selectedCountry?.NewConfirmed}</span>
  </p>

  <p>
    <span>Total Confirmed:</span>
    <span>{selectedCountry?.TotalConfirmed}</span>
  </p>

  <p>
    <span>New Deaths:</span>
    <span>{selectedCountry?.NewDeaths}</span>
  </p>

  <p>
    <span>Total Deaths:</span>
    <span>{selectedCountry?.TotalDeaths}</span>
  </p>

  <p>
    <span>New Recovered:</span>
    <span>{selectedCountry?.NewRecovered}</span>
  </p>

  <p>
    <span>Total Recovered:</span>
    <span>{selectedCountry?.TotalRecovered}</span>
  </p>

  <p>
    <span>Date:</span>
    <span>{selectedCountry?.Date?.substring(0, 10)}</span>
  </p>

  {!showModal 
    && <Link to={paths.modalUrl(selectedCountry?.Country)}>
      <button onClick={() => dispatch(actions.triggerModal())}>
        Open Modal Information
      </button>
    </Link>}
</Wrap>

}

export default SelectedCountry
