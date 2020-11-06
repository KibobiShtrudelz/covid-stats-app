import styled from 'styled-components'

export const Wrap = styled.div`
  width: 100%;
  margin-top: 3rem;
  padding-bottom: 1rem;

  h1 {
    text-align: center;
    margin-bottom: 1rem;
  }

  p {
    display: flex;
    justify-content: space-between;

    padding: 0.4rem 0;
    
    & > span {
      font-size: 1.2rem;
    }
  }

  button {
    border: none;
    outline: none;
    padding: 0.5rem;
    cursor: pointer;
    margin-top: 2rem;
    border-radius: 0.3rem;
  }

  @media (min-width: 600px) {
    width: 100%;
    border: none;
    padding: 2rem;
    margin-top: 0;
    max-width: 500px;
    border-radius: 1rem;
    box-shadow: 1px 1px 10px 1px #d5d5d5;
  }
`
