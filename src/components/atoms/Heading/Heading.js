import styled from 'styled-components';
import { devices } from '../../../Devices/devices';

const Heading = styled.h1`
  font-size: ${({ theme, big }) => (big ? theme.fontSize.xl : theme.fontSize.l)};
  font-weight: ${({ theme }) => theme.bold};

  /* @media ${devices.mobileM} {
    font-size: 3rem;
  } */
`;

export default Heading;
