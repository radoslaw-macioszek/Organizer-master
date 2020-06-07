import styled from 'styled-components';

const FavoriteBookHeading = styled.div`
  margin: 0 2rem;
  border-radius: 1rem 1rem 0.3rem 0.3rem;
  background-color: white;
  border-left: 1px solid hsla(360, 73%, 60%);
  border-right: 3px solid hsla(360, 73%, 60%);
  border-bottom: 1px solid hsla(360, 73%, 60%);
  border-top: 4px solid hsla(360, 73%, 60%);
  color: black;
  position: relative;
  backface-visibility: hidden;

  &::after {
    content: attr(data-tool-tip);
    font-size: 1.2rem;
    font-weight: bold;
    display: block;
    position: absolute;
    background-color: hsla(360, 73%, 60%, 0.8);
    padding: 1rem 1.5rem;
    color: white;
    border-radius: 3px;
    bottom: 5%;
    left: 0;
    transform: scale(0);
    transition: transform ease-out 400ms, bottom ease-out 150ms;
    backface-visibility: hidden;
  }

  &:hover::after {
    transform: scale(1);
    bottom: 5%;
    width: 100%;
    text-align: center;
    backface-visibility: hidden;
  }
`;
export default FavoriteBookHeading;
