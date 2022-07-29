import { Container } from './syles';

export type MainContainerProps = {
  children: JSX.Element;
};

export default function MainContainer({ children }: MainContainerProps) {
  return <Container>{children}</Container>;
}
