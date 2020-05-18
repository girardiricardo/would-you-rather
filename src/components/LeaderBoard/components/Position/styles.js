import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 1rem;

  > div {
    justify-content: space-between;

    > div {
      height: 140px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    > img {
      width: 120px;
      border-radius: 50%;
    }
  }
`;
