import styled from 'styled-components';
import { devices } from '../../../Devices/devices';

const StyledLink = styled.a`
  color: black;
  text-decoration: none;
  font-size: 2.5rem;
  margin-right: 0.2rem;
  background-color: ${({ theme }) => theme.movies};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  padding: 1.5rem 3rem;
  font-weight: 600;

  &:hover {
    color: ${({ theme }) => theme.movies};
    border: 1px solid ${({ theme }) => theme.movies};

    background-color: ${({ theme }) => theme.greyTransparent};

    border-bottom: 0.4rem solid ${({ theme }) => theme.movies};
  }

  @media ${devices.tablet} {
    padding: 1rem 2rem;
    font-size: 2rem;
    width: 50%;
    margin-bottom: 1rem;
  }
`;

export default StyledLink;
