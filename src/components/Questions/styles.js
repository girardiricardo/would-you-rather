import styled from 'styled-components';

export const Container = styled.div`
  width: 600px;
  margin-top: 2rem;

  > div {
    width: 100%;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  > button {
    background-color: ${({ theme }) => theme.thirdDark} !important;

    &:first-child {
      margin-right: 1rem !important;
    }

    &.active {
      background-color: ${({ theme }) => theme.purple} !important;
      color: ${({ theme }) => theme.white} !important;
    }
  }
`;
