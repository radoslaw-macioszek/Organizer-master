import React from 'react';
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
  margin-bottom: 30px;
`;

const StyledLogo = styled.div`
  margin-bottom: 10vh;
`;

const StyledLogout = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  height: 100px;
`;

// Linku mozemy uzyc tez jako "as"

// Link ma wlasciwosc inline'owa, dlatego icony musza miec dodatkowo display:block
// zmiana na NavLink zeby uzyskac activeClass. Pisane z malej, zeby consola sie nie przyczepiala.
// podmieniamy pageType na pageContext ze wzgledu na wykorzystanie withContext

const Sidebar = ({ pageContext }) => (
  <StyledSidebar activeColor={pageContext}>
    <StyledLogo exact as={NavLink} to="/">
      <Logo icon={logoIcon} />
    </StyledLogo>
    <StyledIcon as={NavLink} to="/notes" icon={penIcon} activeclass="active" />
    <StyledIcon as={NavLink} to="/twitters" icon={twitterIcon} activeclass="active" />
    <StyledIcon as={NavLink} to="/articles" small="true" icon={bulbIcon} activeclass="active" />
    <StyledIcon as={NavLink} to="/movies" icon={tvIcon} activeclass="active" />

    <StyledIcon as={NavLink} to="/books" icon={bookIcon} activeclass="active" />
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

Sidebar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles', 'books', 'movies']),
};

Sidebar.defaultProps = {
  pageContext: 'notes',
};

export default withContext(Sidebar);
