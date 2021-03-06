import styled, { css } from 'styled-components';

interface ContainerProps {
  active: boolean;
}

const Container = styled.div<ContainerProps>`
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  align-items: center;
  display: ${(props) => (props.active ? 'flex' : 'none')};
  justify-content: center;
  overflow: hidden;
  z-index: 999;
  background: rgba(255, 255, 255, 0.9);

  width: 100%;
  height: 100vh;

  -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 2s; /* Firefox < 16 */
  -ms-animation: fadein 2s; /* Internet Explorer */
  -o-animation: fadein 2s; /* Opera < 12.1 */
  animation: fadein 2s;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Firefox < 16 */
  @-moz-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Safari, Chrome and Opera > 12.1 */
  @-webkit-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Internet Explorer */
  @-ms-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Opera < 12.1 */
  @-o-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const LoadingIcon = styled.div`
  ${({ theme }) => css`
    &:after {
      animation: spin 0.5s infinite linear;
      border: 2px solid #ffe600;
      border-radius: 290486px;
      border-right-color: transparent;
      border-top-color: transparent;
      content: '';
      display: block;
      height: 1em;
      position: relative;
      width: 1em;
      position: absolute;
      top: calc(50% - 1.5em);
      left: calc(50% - 1.5em);
      width: 3em;
      height: 3em;
      border-width: 0.25em;
    }
  `}
`;

export { Container, LoadingIcon };
