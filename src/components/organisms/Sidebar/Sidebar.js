import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import bulbIcon from '../../../assets/icons/bulb.svg';
import logoutIcon from '../../../assets/icons/logout.svg';
import penIcon from '../../../assets/icons/pen.svg';
import twitterIcon from '../../../assets/icons/twitter.svg';
import bookIcon from '../../../assets/icons/book.svg';
import tvIcon from '../../../assets/icons/tv.svg';
import todoIcon from '../../../assets/icons/romantic-date.svg';
import logologo from '../../../assets/icons/logologo.svg';

import Logo from '../../atoms/Logo/Logo';
import logoIcon from '../../../assets/icons/logo.svg';
import withContext from '../../../hoc/withContext';

// position fixed ze wzgledu na mozliwosc "przyklejenia" sidebaru do lewej strony aplikacji.
const StyledSidebar = styled.div`
  width: 153px;
  height: 100vh;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.notes)};
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  left: 0;
  top: 0;
`;

const StyledIcon = styled(ButtonIcon)`
  margin-bottom: 20px;
`;

const StyledLogo = styled.div`
  margin-bottom: 0;
`;

const StyledLogout = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  height: 100px;
`;

const StyledButton = styled.button`
  position: absolute;
  left: 6vw;
  background: ${({ theme }) => theme.grey100};

  text-decoration: none;
  padding: 10px 15px;
  width: 7vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.movies};
  /* border: 1px solid black; */

  z-index: 999999999999999999999;
  color: ${({ theme }) => theme.moviesBold};
  border-radius: 5px;

  &:hover {
    /* background: ${({ theme }) => theme.grey100}; */
    color: black;
    /* border: 4px solid ${({ theme }) => theme.movies}; */
    border-bottom: 4px solid ${({ theme }) => theme.movies};
  }
`;

const StyledSecondButton = styled(StyledButton)`
  top: 72.8vh;
`;

// const StyledOverlaps = styled.div`
//   border: 1px solid ${({ theme }) => theme.movies};
//   height: 10vh;
//   width: 8vh;
//   position: absolute;
//   left: 6vw;
// `;

// Linku mozemy uzyc tez jako "as"

// Link ma wlasciwosc inline'owa, dlatego icony musza miec dodatkowo display:block
// zmiana na NavLink zeby uzyskac activeClass. Pisane z malej, zeby consola sie nie przyczepiala.
// podmieniamy pageType na pageContext ze wzgledu na wykorzystanie withContext

const Tv = ({ pageContext }) => {
  return (
    <div>
      <StyledButton as={NavLink} to={'/movies'}>
        Movies
      </StyledButton>
      <StyledSecondButton as={NavLink} to={'/series'} activeclass="active">
        Series
      </StyledSecondButton>
    </div>
  );
};

const Sidebar = ({ pageContext }) => {
  const [open, setOpen] = useState(false);

  return (
    <StyledSidebar activeColor={pageContext}>
      <StyledLogo exact as={NavLink} to="/">
        <Logo icon={logologo} />
      </StyledLogo>
      <StyledIcon as={NavLink} to="/todos" icon={todoIcon} activeclass="active" />
      <StyledIcon as={NavLink} to="/notes" icon={penIcon} activeclass="active" />
      <StyledIcon as={NavLink} to="/twitters" icon={twitterIcon} activeclass="active" />
      <StyledIcon as={NavLink} to="/articles" small="true" icon={bulbIcon} activeclass="active" />
      <StyledIcon as={NavLink} to="/books" icon={bookIcon} activeclass="active" />
      <StyledIcon
        as={NavLink}
        to={pageContext === 'series' ? '/series' : '/movies'}
        icon={tvIcon}
        activeclass="active"
        onClick={() => setOpen(!open)}
      >
        {open && <Tv />}
      </StyledIcon>
      <StyledLogout>
        <StyledIcon
          exact
          as={NavLink}
          to="/login"
          big="true"
          icon={logoutIcon}
          activeclass="active"
        />
      </StyledLogout>
    </StyledSidebar>
  );
};

Sidebar.propTypes = {
  pageContext: PropTypes.oneOf([
    'notes',
    'twitters',
    'articles',
    'books',
    'movies',
    'series',
    'todos',
  ]),
};

Sidebar.defaultProps = {
  pageContext: 'notes',
};

export default withContext(Sidebar);
