import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    width: 100%;
    background: ${theme.color.WHITE};
    padding: 32px;
    border-radius: 6px;
    margin-bottom: 1rem;

    display: flex;
    flex-wrap: wrap;

    .picture-product {
      width: 100%;
      margin-bottom: 32px;

      display: flex;
      justify-content: center;
      align-items: center;

      img {
        max-width: 680px;
        width: 100%;
        height: auto;
      }
    }

    .infos-product {
      width: 100%;
      padding-right: 32px;

      .infos-product__sales {
        width: 100%;
        margin-bottom: 1rem;

        p {
          font-size: 0.875rem;
        }
      }

      .infos-product__name {
        width: 100%;
        margin-bottom: 32px;

        p {
          font-size: 1.5rem;
          font-weight: bold;
        }
      }
      .infos-product__price {
        width: 100%;
        margin-bottom: 32px;

        p {
          font-size: 2.875rem;
        }
      }

      .infos-product__buy {
        width: 100%;

        button {
          max-width: 258px;
          width: 100%;
          height: 43px;
          text-align: center;
          background: ${theme.color.BLUE};
          color: ${theme.color.WHITE};
          border: 0;
          border-radius: 6px;
          font-size: 1.2rem;
        }
      }
    }

    .details-product {
      width: 100%;

      h2 {
        font-size: 28px;
        font-weight: 500;
        margin-bottom: 32px;
        color: ${theme.color.GRAY800};
      }

      p {
        font-size: 1rem;
        color: ${theme.color.GRAY500};
      }
    }

    @media (min-width: ${theme.media.MD}) {
      .picture-product {
        width: 70%;
        text-align: center;

        img {
          height: auto;
          object-fit: contain;
          width: 100%;
          max-width: 400px;
        }
      }

      .infos-product {
        width: 30%;
        padding-right: 32px;

        .infos-product__sales {
          width: 100%;
          margin-bottom: 1rem;

          p {
            font-size: 0.875rem;
          }
        }

        .infos-product__name {
          width: 100%;
          margin-bottom: 32px;

          p {
            font-size: 1.5rem;
            font-weight: bold;
            max-width: 207px;
          }
        }
        .infos-product__price {
          width: 100%;
          margin-bottom: 32px;

          p {
            font-size: 2.875rem;
          }
        }

        .infos-product__buy {
          width: 100%;

          button {
            max-width: 258px;
            width: 100%;
            height: 43px;
            text-align: center;
            background: ${theme.color.BLUE};
            color: ${theme.color.WHITE};
            border: 0;
            border-radius: 6px;
            font-size: 1.2rem;
          }
        }
      }
    }
  `}
`;
