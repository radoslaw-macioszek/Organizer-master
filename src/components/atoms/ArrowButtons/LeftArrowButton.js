import styled from 'styled-components';
import { devices } from '../../../Devices/devices';

const LeftArrowButton = styled.button`
  height: 21vh;
  width: 4vw;
  position: absolute;
  left: -8.2rem;
  top: 5.1rem;
  background-color: ${({ theme }) => theme.greyTransparent};
  border: none;
  border-radius: 0.5rem;
  font-size: 4rem;
  color: ${({ theme }) => theme.grey300Transparent};
  outline: none;

  &:hover {
    background: ${({ theme }) => theme.grey300Transparent};
    color: white;
  }

  @media ${devices.laptopL} {
    left: -5.1rem;
    width: 4vw;
  }

  @media ${devices.laptop} {
    left: -9.1rem;
    width: 6vw;
  }

  @media ${devices.tablet} {
    width: 5rem;
    height: 5rem;
    padding-top: 5px;
    left: 35%;
    top: 28.1rem;
  }

  @media ${devices.mobileL} {
    left: 20%;
    top: 90%;
  }
  @media ${devices.mobileM} {
    top: 95%;
  }
`;

export default LeftArrowButton;
