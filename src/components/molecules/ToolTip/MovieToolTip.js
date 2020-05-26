import styled from 'styled-components';

const MovieToolTip = styled.p`
  border-radius: 3px;
  margin: 0;

  position: relative;
  backface-visibility: hidden;

  &::after {
    content: attr(data-tool-tip);
    font-size: 1.6rem;
    display: block;
    position: absolute;
    padding: 0.5rem;
    color: transparent;
    border-radius: 3px;
    bottom: 1rem;
    left: 0;
    transform: scale(0);
    transition: transform ease-out 0, bottom ease-out 150ms;
    width: 100%;
    backface-visibility: hidden;
  }

  &:hover::after {
    transform: scale(1);
    background-color: hsl(0, 0%, 0%, 0.4);
    text-align: center;
    color: white;
    font-weight: bold;

    border: 1px solid ${({ theme }) => theme.movies};
    backface-visibility: hidden;
  }
`;

export default MovieToolTip;
