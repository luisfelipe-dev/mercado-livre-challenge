import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  /* BREAKPOINT 576px */
  @media (min-width: 36rem) {
    max-width: 540px;
  }

  /* BREAKPOINT 768px */
  @media (min-width: 48rem) {
    max-width: 720px;
  }

  /* BREAKPOINT 992px */
  @media (min-width: 62rem) {
    max-width: 960px;
  }

  /* BREAKPOINT 1200px */
  @media (min-width: 75rem) {
    max-width: 1200px;
  }

  /* BREAKPOINT 1400px */
  @media (min-width: 87.5rem) {
    max-width: 1400px;
  }
`;
