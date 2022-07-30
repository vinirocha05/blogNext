import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.large};
    margin: ${theme.spacings.medium};
    text-align: center;
    font-size: ${theme.font.sizes.small};
  `}
`;
