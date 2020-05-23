import styled from 'styled-components';

const RightArrowButton = styled.button`
  height: 21vh;
  width: 4vw;
  position: absolute;
  right: -6.1rem;
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

export default RightArrowButton;
