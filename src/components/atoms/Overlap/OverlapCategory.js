import styled from 'styled-components';
import { devices } from '../../../Devices/devices';

const OverlapCategory = styled.div`
  display: flex;
  margin: 0px 15rem 5rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.movies};

  @media ${devices.tablet} {
    margin: 2rem 0 -3rem 0;
    width: 100%;
    text-align: center;
  }
`;

export default OverlapCategory;
