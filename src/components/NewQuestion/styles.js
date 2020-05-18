import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;
  margin-top: 2rem;

  > div {
    width: 100%;
    align-items: flex-start;

    > h3,
    h4 {
      margin-bottom: 1rem;
    }

    > span {
      margin-bottom: 0.5rem;
    }

    > form {
      display: flex;
      width: 100%;
      flex-direction: column;

      > small {
        margin: 0.5rem 0;
        align-self: center;
      }

      > .ui.input {
        width: 100%;

        > input {
          font-family: 'Jost', sans-serif;
        }
      }

      > button {
        margin-top: 1rem !important;
      }
    }
  }
`;
