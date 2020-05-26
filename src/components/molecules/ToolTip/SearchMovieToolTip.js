import styled from 'styled-components';

const MovieSearchToolTip = styled.span`
  visibility: hidden;

  background-color: #fff;
  box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.16);
  border-radius: 0.5rem;
  color: #555;
  font-weight: 300;
  padding: 3rem 3rem 6rem;
  position: absolute;
  width: 30vw;
  top: 100%;
  left: 200%;
  opacity: 0;
  transform: translate(-50%, -50%);
  transition: all 0.4s ease;
  text-align: center;
`;

export default MovieSearchToolTip;
