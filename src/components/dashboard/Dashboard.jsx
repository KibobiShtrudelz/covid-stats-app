import { useState, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { NavLink, useHistory, Switch, Route } from 'react-router-dom'

import Modal from '../modal'
import SelectedCountry from './selectedCountry'

import paths from '../../paths'
import actions from '../../redux/actions'

import { Wrap, SelectedCountryWrap } from './dashboard.styled'

const Dashboard = () => {
  const [filterState, setFilterState] = useState('')
  const [selectedCountryName, setSelectedCountryName] = useState('')

  const history = useHistory()

  const dispatch = useDispatch()

  const [stats, selectedCountry, showModal] = useSelector(({ 
    reducer: { stats, selectedCountry, showModal }, 
  }) => [stats, selectedCountry, showModal], shallowEqual)

  const handleSelectCountry = name => setSelectedCountryName(name)

  useEffect(() => {
    dispatch(actions.getCovidStats())
  }, [dispatch])

  useEffect(() => {
    if (filterState?.length > 0) {
      dispatch(actions.filterCountries(filterState))
    }
  }, [dispatch, filterState])

  useEffect(() => {
    if (window.location.pathname !== paths.dashboard && !selectedCountryName) {
      history.push(paths.dashboard)
    }
  }, [history, selectedCountryName])

  useEffect(() => {
    stats?.Countries?.filter(country => {
      if (selectedCountryName && country.Country === selectedCountryName) {
        dispatch(actions.selectedCountry(country))
        
        return true
      }

      return false
    }) 

    selectedCountryName.length > 0 && window.innerWidth < 600 && setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 200);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, selectedCountryName])

  return <>
    <Wrap className='DASHBOARD_WRAP' isSelected={selectedCountryName?.length > 0}>
      <div className='list-wrapper'>
        <ul>
          <li className='title'>Select a country for more details</li>

          <li
            className='filter'
            onClick={
              () => setFilterState(filterState === 'highToLow' ? 'lowToHigh' : 'highToLow')
            }
          >
            ⇵ filtered from {filterState || ''}
          </li>

          {
            stats?.Countries?.map(country => 
              <li key={country?.Country} onClick={() => handleSelectCountry(country?.Country)}>
                <NavLink to={paths.selectedCountry(country?.Country)} activeClassName='active'>
                  {country?.Country}
                </NavLink>
              </li>)
          }
        </ul>
      </div>
    </Wrap>

    {showModal && <Modal countryName={selectedCountryName}>
      <SelectedCountry selectedCountry={selectedCountry} showModal={showModal} />
    </Modal>}

    <Switch>
      <Route path={paths.selectedCountry(':name')}>
        <SelectedCountryWrap className='SHULD COME RIGHT'>
          {selectedCountryName && <SelectedCountry selectedCountry={selectedCountry} />}
        </SelectedCountryWrap>
      </Route>

      <Route path={paths.modalUrl(selectedCountryName)}>
        {showModal && <Modal>
          <SelectedCountry selectedCountry={selectedCountry} showModal={showModal} />
        </Modal>}
      </Route>
    </Switch>
  </>
}

export default Dashboard
