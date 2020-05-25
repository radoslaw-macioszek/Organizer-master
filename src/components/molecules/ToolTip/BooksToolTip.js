import styled from 'styled-components';

const BooksToolTip = styled.span`
  visibility: hidden;

  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 0.5rem;
  color: #555;
  font-weight: 300;
  padding: 3rem 3rem 6rem;
  position: absolute;
  width: 45rem;
  top: 20rem;
  left: 35rem;
  opacity: 0;
  transform: translate(-50%, -50%);
  transition: all 0.5s ease;
  text-align: center;
`;

export default BooksToolTip;
