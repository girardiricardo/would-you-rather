import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1080px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.white};

  > h1 {
    color: ${({ theme }) => theme.purple};
    font-style: italic;
    font-weight: 800;
    font-family: 'Jost', sans-serif !important;
    font-size: 58px;
    margin: 0;
    padding: 0;
    margin-bottom: 2rem;
  }

  > div {
    width: 100%;
    justify-content: space-between;
  }

  .avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-left: 1rem;
  }
`;
