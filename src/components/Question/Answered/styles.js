import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;
  margin-top: 2rem;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  > h4 {
    color: ${({ theme }) => theme.white};
  }

  > img {
    width: 34px;
    border-radius: 50%;
  }
`;
