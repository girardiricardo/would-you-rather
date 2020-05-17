import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1rem;
  background: ${({ theme }) => theme.thirdDark};
  padding: 1rem;
  border-radius: 6px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > h4 {
      color: ${({ theme }) => theme.white};
    }
  }

  > img {
    width: 100px;
    border-radius: 50%;
  }
`;
