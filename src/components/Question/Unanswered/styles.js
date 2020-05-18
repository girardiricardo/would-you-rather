import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;
  margin-top: 2rem;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  > div {
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > h4 {
      color: ${({ theme }) => theme.white};
    }

    > .ui.radio label {
      color: ${({ theme }) => theme.white} !important;
    }
  }

  > img {
    width: 100px;
    border-radius: 50%;
  }
`;
