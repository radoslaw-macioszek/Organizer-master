import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 0;
  background-color: ${({ theme }) => theme.notes};
  width: 22rem;
  height: 4.7rem;
  border: none;
  border-radius: 5rem;
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 1.4rem;
  text-transform: uppercase;
  transition: all 0.5s;
  cursor: pointer;
  box-shadow: 0.2rem 0.5rem 2rem rgba(0, 0, 0, 0.16);

  &:hover {
    transform: translateY(-0.4rem);
  }

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: hsl(0, 0%, 90%);
      width: 10.5rem;
      height: 3rem;
      font-size: 1rem;
    `}
`;

export default Button;
