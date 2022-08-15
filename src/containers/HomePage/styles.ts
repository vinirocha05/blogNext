import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(280px, 1fr)
  );
  gap: 3rem;
  max-width: 96rem;
  font-size: 1rem;
  margin: 5.5rem auto;

  @media (max-width: 800px) {
    padding: 2rem;
    margin: 2rem auto;
  }
`;

export const Category = styled.div`
  text-align: center;
  font-size: 2rem;
  padding: 2rem;
  font-weight: bold;

  @media (max-width: 800px) {
    padding: 1rem;
  }
`;

export const AllPostsLinks = styled.a`
  display: block;
  text-align: center;
  padding: 2rem 0;
`;
