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
import withContext from '../../../hoc/withContext';

import { devices } from '../../../Devices/devices';

const StyledSidebar = styled.div`
  width: 15.3rem;
  height: 100%;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.notes)};
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  left: 0;
  top: 0;

  @media ${devices.laptop} {
    width: 12rem;
  }

  @media ${devices.tablet} {
    width: 9rem;
  }

  @media ${devices.mobileM} {
    width: 7rem;
  }
`;

const StyledIcon = styled(ButtonIcon)`
  margin-bottom: 2rem;

  @media ${devices.tablet} {
    margin-bottom: 3rem;
  }

  @media ${devices.mobileL} {
    margin-bottom: 1rem;
  }
`;

const StyledLogo = styled.div`
  margin-bottom: 0;
`;

const StyledLogout = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-60%);
`;

const StyledButton = styled.button`
  position: absolute;
  left: 6vw;
  background: ${({ theme }) => theme.grey100};

  text-decoration: none;
  padding: 1rem 1.5rem;
  width: 7vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.movies};

  z-index: 999999999999999999999;
  color: ${({ theme }) => theme.moviesBold};
  border-radius: 0.5rem;

  &:hover {
    color: black;
    border-bottom: 0.4rem solid ${({ theme }) => theme.movies};
  }
`;

const StyledSecondButton = styled(StyledButton)`
  bottom: 27.5%;
`;

const Tv = () => {
  return (
    <div>
      <StyledButton as={NavLink} to="/movies">
        Movies
      </StyledButton>
      <StyledSecondButton as={NavLink} to="/series" activeclass="active">
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
      <StyledIcon as={NavLink} to="/articles" small="true" icon={bulbIcon} activeclass="active" />

      <StyledIcon as={NavLink} to="/twitters" icon={twitterIcon} activeclass="active" />
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
    'articleSearch',
  ]),
};

Sidebar.defaultProps = {
  pageContext: 'notes',
};

export default withContext(Sidebar);
