import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: ${({ theme, active }) =>
    active ? theme.purple : theme.thirdDark};
  border-radius: 6px;
  padding: 1rem;
  color: ${({ theme }) => theme.white};
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }

  > .ui.progress {
    > .bar {
      background: ${({ theme, active }) =>
        active ? theme.green : theme.purple} !important;

      > .progress {
        color: ${({ theme, active }) =>
          active ? theme.purple : theme.white} !important;
      }
    }
    > .label {
      color: ${({ theme }) => theme.white} !important;
      margin-top: 0.5rem;
    }
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  > h3 {
    width: 70%;
    font-style: normal;
    font-weight: 600;
    color: ${({ theme }) => theme.white} !important;
  }
`;
