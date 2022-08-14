import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    background-image: linear-gradient(
      to right,
      #00a9d4,
      #059b9a
    );
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    padding: ${theme.spacings.medium};
    text-align: center;
  `}
  a {
    color: ${({ theme }) => theme.colors.white};
  }
`;
