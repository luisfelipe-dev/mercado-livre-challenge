import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    width: 100%;

    p {
      display: inline-block;
      font-size: 0.75rem;
      margin-bottom: 1rem;
      color: ${theme.color.GRAY500};

      & + p {
        margin-left: 5px;
      }

      &:last-child {
        font-weight: bold;
      }
    }
  `}
`;
