import styled from 'styled-components';
import { devices } from '../../../Devices/devices';

const AddButton = styled.button`
  position: absolute;
  top: 40%;
  right: 0;
  padding: 0.6rem 0.6rem;
  font-size: 1.1rem;
  border-radius: 0.5rem;

  @media ${devices.tablet} {
    top: 85%;
  }
`;

export default AddButton;
