import styled from 'styled-components';

const DateInfo = styled.p`
  margin: 0 0 0.5rem 1.2rem;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  display: inline-flex;
  align-items: center;
`;

export default DateInfo;
