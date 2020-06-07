import styled from 'styled-components';
import { devices } from '../../../Devices/devices';

const Logo = styled.div`
  display: block;
  width: 22rem;
  height: 16rem;
  border-radius: 2rem;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 90%;
  border: none;

  @media ${devices.laptop} {
    background-size: 75%;
  }

  @media ${devices.tablet} {
    background-size: 90%;
    transform: rotateZ(90deg);
    margin-left: -2.5rem;
    margin-bottom: 7rem;
    margin-top: 5rem;
  }

  @media ${devices.mobileL} {
    margin-bottom: 0;
    margin-top: 0;
    background-size: 70%;
  }
`;

export default Logo;
