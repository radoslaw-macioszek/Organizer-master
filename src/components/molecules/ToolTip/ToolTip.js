import styled, { css } from 'styled-components';

const ToolTip = styled.h3`
  position: absolute;
  bottom: 0;
  padding: 0.5rem;
  padding-left: 1rem;
  margin-right: 2.5rem;
  color: white;
  font-weight: bold;
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
  background-color: hsl(0, 0%, 0%, 0.4);

  border-radius: 3px;

  &::after {
    content: attr(data-tool-tip);
    font-size: 1.3rem;
    display: block;
    position: absolute;
    background-color: ${({ theme }) => theme.grey300};
    padding: 0.5rem 1.5rem;
    color: white;
    border-radius: 0.3rem;
    bottom: 0;
    left: 0.5vw;
    overflow-wrap: normal;
    transform: scale(0);
    transition: transform ease-out 150ms, bottom ease-out 150ms;
    transition-delay: 2s;
    width: 15vw;
    text-align: center;
  }

  &:hover::after {
    transform: scale(1);
    bottom: 100%;
  }

  &:active {
    background-color: red;
  }

  ${({ todo }) =>
    todo &&
    css`
      text-decoration: line-through;
      background-color: ${({ theme }) => theme.grey200};
      border-radius: 3px;
      position: relative;
      margin: 0;
      padding: 0.5rem 0;
      word-wrap: break-word;
      color: black;

      &::after {
        content: attr(data-tool-tip);
        font-size: 1.4rem;
        display: block;
        position: absolute;
        background-color: ${({ theme }) => theme.grey300};
        padding: 0.5rem 1.5rem;
        color: white;
        border-radius: 3px;
        bottom: 0;
        left: 0;
        white-space: nowrap;
        transform: scale(0);
        transition: transform ease-out 150ms, bottom ease-out 150ms;
      }

      &:hover::after {
        transform: scale(1);
        bottom: 100%;
      }
    `}
`;

export default ToolTip;
