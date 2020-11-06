import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import paths from '../../paths'
import actions from '../../redux/actions'

import { ModalBackground, ContentWrap } from './modal.styled'

const Modal = ({ children, countryName }) => {
  const [country, setCountry] = useState('')

  const history = useHistory()
  console.log('history', history)

  const dispatch = useDispatch()

  // useEffect(() => {
  //   if (countryName !== undefined || countryName !== 'undefined') {
  //     // console.log('countryName !== \'undefined\'', countryName !== 'undefined')
  //     // console.log('countryName !== undefined', countryName !== undefined)
  //     setCountry(countryName)
  //   }
  // }, [countryName])

  // useEffect(() => {
  //   return () => history.push(paths.selectedCountry(country))
  // }, [])

  return <ModalBackground onClick={() => {
    dispatch(actions.triggerModal())
    history.goBack()
  }}>
    <ContentWrap>
      { children }
    </ContentWrap>
  </ModalBackground>
}

export default Modal
