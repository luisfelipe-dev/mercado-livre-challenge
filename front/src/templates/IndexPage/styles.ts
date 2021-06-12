import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    width: 100%;
    background: ${theme.color.WHITE};
    padding: 0 1rem;
    border-radius: 6px;
    margin-bottom: 1rem;
    position: relative;

    ul {
      list-style-type: none;

      a {
        text-decoration: none;
      }
    }
  `}
`;
