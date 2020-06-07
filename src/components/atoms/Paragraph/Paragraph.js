import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.regular};
  overflow-wrap: normal;
  text-align: justify;
`;

export default Paragraph;
