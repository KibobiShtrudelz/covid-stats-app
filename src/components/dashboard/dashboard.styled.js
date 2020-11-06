import styled from 'styled-components'

import constants from '../../constants'

export const Wrap = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / 2;

  div.list-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    flex: ${({ isSelected }) => isSelected ? 1 : null};

    ul {
      max-width: 900px;
      list-style: none;

        & > li {
          padding: 0.2rem;
          max-width: 23rem;
          text-align: center;

          :first-child {
            font-size: 1.5rem;
            max-width: 25rem;
          }

          &.filter {
            cursor: pointer;
          }

          & > a {
            display: block;

            width: 100%;
            height: 100%;
            padding: 0.6rem;
            text-decoration: none;
            color: ${() => constants.colors.black};

            :hover {
              opacity: 0.7;
              border-radius: 0.6rem;
              color: ${() => constants.colors.white};
              background-color: ${() => constants.colors.green};
            }

            &.active {
              opacity: 0.7;
              border-radius: 0.6rem;
              color: ${() => constants.colors.white};
              background-color: ${() => constants.colors.green};
            }
          }

          @media (min-width: 600px) {
            text-align: left;
          }
        }
    }

    @media (min-width: 600px) {
        flex: 1;
      }
  }

  

  @media (min-width: 600px) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;

    display: flex;
    align-items: center;

    margin-top: 5rem;
  }
`

export const SelectedCountryWrap = styled.div`
  grid-column: 1 / -1;
  grid-row: 2 / 3;

  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 900px;

  @media (min-width: 600px) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    margin-top: 5rem;
  }
`
