import styled from 'styled-components';

const LeftArrowButton = styled.button`
  height: 21vh;
  width: 4vw;
  position: absolute;
  left: -6.2rem;
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
`;

export default LeftArrowButton;
