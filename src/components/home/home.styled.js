import styled from 'styled-components'
import appConstants from '../../constants'

export const Wrap = styled.div`
    grid-column: 1 / -1;
    grid-row: 1 / 4;

    display: grid;
    place-items: center;
`

export const Button = styled.button`
    border: none;
    outline: none;
    padding: 1.4rem;
    font-size: 1.5rem;;
    cursor: pointer;
    border-radius: 6px;
    color: ${() => appConstants.colors.white};
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.15);
    background-color: ${() => appConstants.colors.green};
`
