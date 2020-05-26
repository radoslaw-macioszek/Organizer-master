import styled from 'styled-components';
import { devices } from '../../../Devices/devices';

const OverlapCategory = styled.div`
  display: flex;
  margin: 2rem 0 -3rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.movies};
  width: 100%;
  text-align: center;
`;

export default OverlapCategory;
