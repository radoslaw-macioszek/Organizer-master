import styled from 'styled-components';

const Logo = styled.div`
  display: block;
  width: 22rem;
  height: 16rem;
  border-radius: 2rem;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 90%;
  border: none;
`;

export default Logo;
