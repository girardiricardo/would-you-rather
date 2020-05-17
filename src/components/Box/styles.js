import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({ orientation }) => orientation};
  padding: 1rem;
  background: ${({ theme }) => theme.secondDark};
  border-radius: 6px;
  color: ${({ theme }) => theme.white};

  h2,
  h3,
  h4 {
    color: ${({ theme }) => theme.green};
    font-weight: 700;
    font-style: italic;
    font-family: 'Jost', sans-serif !important;
    margin: 0;
    padding: 0;
  }

  button {
    margin: 0 !important;
    background-color: ${({ theme }) => theme.purple} !important;
    color: ${({ theme }) => theme.white} !important;
  }
`;
