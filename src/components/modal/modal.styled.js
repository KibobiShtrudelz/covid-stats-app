import styled from 'styled-components'

import appConstants from '../../constants'

export const ModalBackground = styled.div`
  display: grid;
  place-items: center;

  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%; 
  background-color: rgba(0, 0, 0, 0.3);
`

export const ContentWrap = styled.div`
  min-width: 500px;
  border-radius: 1rem;
  background-color: ${() => appConstants.colors.white}
`
