import styled from 'styled-components';
import { devices } from '../../../Devices/devices';

const ButtonLink = styled.a`
  display: inline-flex;
  border-radius: 0.5rem;
  text-decoration: none;
  padding: 0.5rem 1rem;
  width: 14.2rem;
  align-items: center;
  justify-content: center;
  margin-top: 1.2rem;
  background-color: ${({ theme }) => theme.grey200};
  color: ${({ theme }) => theme.grey300};
  position: absolute;
  right: 0;
  bottom: 3.5rem;

  @media ${devices.tablet} {
    padding: 1.3rem 0;
    top: 79%;
    right: 85px;
    width: 10rem;
    border: 1px solid;
    color: black;
    font-size: 1.2rem;
  }
`;

export default ButtonLink;
