import styled from 'styled-components'

export const Wrap = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);

    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 10px;

    @media (min-width: 600px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 1fr;
        grid-gap: 1.5rem;
    }
`
