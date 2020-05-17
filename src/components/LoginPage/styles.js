import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    width: 500px;
    height: 200px;
    justify-content: space-between;
  }
`;
