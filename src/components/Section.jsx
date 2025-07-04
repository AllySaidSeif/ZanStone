import styled from 'styled-components';

const Section = styled.section`
  padding: ${({ $padding }) => $padding || '5rem 0'};
  background: ${({ bg, theme }) => bg || theme.background};
  
  ${({ dark }) => dark && `
    background: ${({ theme }) => theme.text === '#1e293b' ? '#1e293b' : '#0f172a'};
    color: white;
  `}

  ${({ small }) => small && `
    padding: 3rem 0;
  `}

  ${({ large }) => large && `
    padding: 8rem 0;
  `}

  ${({ noPadding }) => noPadding && `
    padding: 0;
  `}
`;

export default Section;