import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 3rem;
`;

export const Category = styled.div`
  text-align: center;
  font-size: 2rem;
  padding: 2rem;
  font-weight: bold;
`;

export const AllPostsLinks = styled.a`
  display: block;
  text-align: center;
  margin: 2rem;
`;
