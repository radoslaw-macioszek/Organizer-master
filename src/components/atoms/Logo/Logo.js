import styled from 'styled-components';

const Logo = styled.div`
  display: block;
  width: 220px;
  height: 160px;
  border-radius: 20px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 90%;
  border: none;
`;

export default Logo;
