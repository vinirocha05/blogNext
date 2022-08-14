import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`;

export const PreviousLink = styled.div``;

export const NextLink = styled.div`
  margin-left: auto;
`;
