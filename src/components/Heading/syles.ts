import styled, { css } from 'styled-components';

export const Container = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.darkDray};
    font-size: ${theme.font.sizes.superLarge};
    text-align: center;
    margin-bottom: 2rem;
  `}
`;
