import styled, { css } from 'styled-components';
import magnifierIcon from '../../../assets/icons/magnifier.svg';
import { devices } from '../../../Devices/devices';

const Input = styled.input`
  padding: 1.5rem 3rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};
  background-color: ${({ theme }) => theme.grey100};
  border: 1px solid ${({ theme }) => theme.grey200};
  border-radius: 5rem;

  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.grey300};
  }

  ${({ search }) =>
    search &&
    css`
      padding: 1rem 2rem 1rem 4rem;
      font-size: ${({ theme }) => theme.fontSize.xs};
      background-image: url(${magnifierIcon});
      background-size: 1.5rem;
      background-position: 1.5rem 50%;
      background-repeat: no-repeat;
      width: 40%;
      margin-top: 2rem;
      margin-left: 2%;

      @media ${devices.tablet} {
        width: 95%;
      }
    `}
`;

export default Input;
