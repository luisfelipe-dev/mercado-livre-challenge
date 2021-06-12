import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    width: 100%;

    background: ${theme.color.PRIMARY};
    margin-bottom: 1rem;
    position: relative;
    z-index: 2;

    .flex {
      height: 82px;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    }

    .nav-logo {
      cursor: pointer;
      margin-right: 15px;
      background-size: 44px 31px;
      width: 44px;
      height: 32px;
      top: 8px;
      left: 10px;
      background-image: url('https://http2.mlstatic.com/frontend-assets/ui-navigation/5.14.5/mercadolibre/logo__small@2x.png');

      background-repeat: no-repeat;
      overflow: hidden;
      text-indent: -999px;
      outline: 0;
    }

    .nav-search {
      width: calc(100% - 66px);
      display: flex;
      position: relative;
      z-index: 1;

      .suggestion {
        position: absolute;
        bottom: -335px;
        left: 0;
        width: 100%;
        height: 338px;
        z-index: 1;
        background: #fff;
        border-top: 1px solid ${theme.color.GRAY100};
        color: ${theme.color.GRAY500};
        padding: 15px;
        border-radius: 0 0 6px 6px;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);

        opacity: 0;
        visibility: hidden;
        transform: translate3d(0, -50px, 0);

        &.active {
          opacity: 1;
          visibility: visible;
          transition: 0.3s;
          transform: translate3d(0, 0, 0);
        }

        ul {
          list-style-type: none;

          li {
            margin-bottom: 0.4rem;
            display: flex;
            align-items: center;
            padding: 5px 10px;
            cursor: pointer;

            &:hover {
              background: ${theme.color.BLUE};
              color: #fff;
              border-radius: 6px;

              img {
                -webkit-filter: brightness(0) invert(1);
                filter: brightness(0) invert(1);
              }
            }

            img {
              max-width: 100%;
              height: auto;
              opacity: 0.4;
              margin-right: 1rem;
            }
          }
        }
      }
      button {
        height: 46px;
        width: 62px;
        background: ${theme.color.MAIN_BG};
        cursor: pointer;

        border-radius: 0 6px 6px 0;
        border: 0;

        img {
          max-width: 100%;
          height: auto;
        }
      }

      input {
        width: 100%;
        height: 46px;

        padding: 5px 15px;
        border-radius: 6px 0 0 6px;
        border: 0;
        outline: 0;
      }
    }

    @media (min-width: ${theme.media.MD}) {
      .nav-logo {
        width: 75px;
        height: 53px;
        background-size: 75px 53px;
        margin-right: 40px;
      }

      .nav-search {
        width: calc(100% - 115px);

        input {
          font-size: 18px;
        }
      }
    }
  `}
`;
