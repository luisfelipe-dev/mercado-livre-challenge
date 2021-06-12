import styled, { css } from 'styled-components';

export const Wrapper = styled.li`
  ${({ theme }) => css`
    width: 100%;
    padding: 1rem 0;
    border-bottom: 2px solid ${theme.color.WHITE100};
    position: relative;

    display: flex;
    flex-wrap: wrap;
    cursor: pointer;

    &:last-child {
      border-bottom: 2px solid transparent;
    }

    .thumbnail {
      position: relative;
      width: 180px;
      height: 180px;
      overflow: hidden;
      border-radius: 4px;

      img {
        position: absolute;
        left: 50%;
        top: 50%;
        height: 100%;
        width: auto;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
      }
    }

    .description {
      width: calc(100% - 180px);
      padding-left: 16px;

      .price {
        margin-top: 1rem;
        margin-bottom: 1rem;

        p {
          font-size: 24px;
        }

        &.full {
          p {
            &::after {
              content: '';
              margin-left: 15px;
              width: 20px;
              height: 20px;
              display: inline-block;

              background: url('/img/ic_shipping@2x.png.png') no-repeat;
              background-size: contain;
            }
          }
        }
      }

      .title {
        font-size: 18px;
        max-width: 400px;
      }
    }
  `}
`;
