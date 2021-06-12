import styled from 'styled-components';

interface LoadingProps {
  primary: boolean;
}

const Container = styled.div<LoadingProps>`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: ${(props) => (props.primary ? 'inherit' : 'none')};
`;

export { Container };
