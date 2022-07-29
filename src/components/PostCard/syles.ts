import styled, { css } from 'styled-components';

export const Container = styled.div`
  transition: transform ease-in-out 500ms;

  &:hover {
    transform: scale(1.05);
  }
`;

export const PostCardCover = styled.div`
  margin: ${({ theme }) => theme.spacings.small};
  img {
    width: 100%;
    display: block;
  }
`;

export const PostCardHeading = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    a {
      color: ${theme.colors.darkDray};
    }
  `}
`;
