import styled, { css } from 'styled-components';
import { devices } from '../../../Devices/devices';

const ButtonIcon = styled.button`
  display: block;
  width: 6.7rem;
  height: 6.7rem;
  border-radius: 2rem;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: ${({ big, small }) => (big ? '70%' : small ? '40%' : '50%')};
  border: none;

  &.active {
    background-color: white;
  }

  ${({ secondary }) =>
    secondary &&
    css`
      border-radius: 5rem;
      position: fixed;
      bottom: 4rem;
      right: 4rem;
      color: white;

      width: 18rem;
      font-size: 1.7rem;
      font-weight: bold;
      box-shadow: 0 1.5rem 2rem rgba(0, 0, 0, 0.3);

      background-size: 40%;
      z-index: 1000000;
    `}

  @media ${devices.tablet} {
    width: 6rem;
    height: 6rem;
  }

  @media ${devices.mobileM} {
    width: 4rem;
    height: 4rem;
  }
`;

export default ButtonIcon;
