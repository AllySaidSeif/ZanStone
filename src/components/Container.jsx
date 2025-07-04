import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }

  ${({ $fluid }) => $fluid && `
    max-width: 100%;
    padding: 0;
  `}

  ${({ $narrow }) => $narrow && `
    max-width: 800px;
  `}

  ${({ $wide }) => $wide && `
    max-width: 1400px;
  `}
`;

export default Container;