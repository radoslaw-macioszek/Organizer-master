import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserPageTemplate from './UserPageTemplate';
import Input from '../components/atoms/Input/Input';
import Heading from '../components/atoms/Heading/Heading';
import Paragraph from '../components/atoms/Paragraph/Paragraph';
import withContext from '../hoc/withContext';
import ButtonIcon from '../components/atoms/ButtonIcon/ButtonIcon';
import plusIcon from '../assets/icons/plus.svg';
import NewItemBar from '../components/organisms/NewItemBar/NewItemBar';
import ArticlesList from '../components/organisms/ArticlesList/ArticlesList';
import TwitterDetail from '../components/molecules/TwitterDetail/TwitterDetail';
import OverlapCategory from '../components/atoms/Overlap/OverlapCategory';
import StyledOverlap from '../components/atoms/OverlapLink/Overlap';

import { devices } from '../Devices/devices';

const StyledWrapper = styled.div`
  padding: ${({ activePage }) =>
    activePage === 'articles' ? '25px 80px 25px 70px' : '25px 50px 25px 60px'};
  position: relative;

  @media ${devices.laptop} {
    padding: 0 2rem 0 0;
  }

  @media ${devices.mobileL} {
    padding: 0 1rem 0 0;
  }
`;

const StyledHeading = styled(Heading)`
  margin: 2.5rem 0 0;

  ::first-letter {
    text-transform: uppercase;
  }
  width: 40%;
  text-align: center;

  @media ${devices.tablet} {
    width: 100%;
    text-align: center;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};

  width: 40%;
  text-align: center;

  @media ${devices.tablet} {
    width: 100%;
    text-align: center;
  }
`;

const StyledPageHeader = styled.div`
  margin: 2.5rem 0 5rem;

  @media ${devices.tablet} {
    margin: ${({ activePage }) => (activePage === 'twitters' ? '2.5rem 0 20rem' : '2.5rem 0 5rem')};
  }
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: ${({ activePage }) =>
    activePage === 'twitters' ? 'repeat(auto-fit, minmax(25rem, 1fr));' : 'repeat(3, 1fr)'};
  grid-gap: ${({ activePage }) => (activePage === 'notes' ? '85px' : '40px')};
  height: 100%;

  @media ${devices.laptop} {
    grid-template-columns: ${({ activePage }) =>
      activePage !== 'notes' ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'};
    grid-gap: 1.5rem;
  }

  @media ${devices.tablet} {
    grid-template-columns: ${({ activePage }) =>
      activePage === 'articleSearch' || activePage === 'twitters'
        ? 'repeat(1, 1fr)'
        : 'repeat(2, 1fr)'};
  }
  @media ${devices.mobileL} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const StyledArticlesGrid = styled(StyledGrid)`
  max-width: 100vw;
`;

const StyledButtonIcon = styled(ButtonIcon)`
  background-color: ${({ activecolor, theme }) => theme[activecolor]};
  border-radius: 5rem;

  position: fixed;
  bottom: 4rem;
  right: 4rem;

  background-size: 40%;
  z-index: 1000000;

  box-shadow: 0 1.5rem 2rem rgba(0, 0, 0, 0.3);
`;

const StyledArticlesPage = styled.div`
  display: flex;
`;

const StyledOverlapLink = styled(StyledOverlap)`
  background-color: white;
  border: 2px solid ${({ theme }) => theme.articles};

  &:hover {
    color: ${({ theme }) => theme.articles};
    border: 1px solid ${({ theme }) => theme.articles};
    border-bottom: 0.4rem solid ${({ theme }) => theme.articles};
  }
`;

const StyledOverlapCategory = styled(OverlapCategory)`
  display: none;
  @media ${devices.tablet} {
    display: inline-flex;
    border-bottom: 1px solid ${({ theme }) => theme.articles};
  }
`;

const GridTemplate = ({ children, pageContext }) => {
  const [barVisible, setBarVisible] = useState(false);

  const typeLength = useSelector((state) => state.natReducer);

  const handleBarToggle = () => {
    setBarVisible(!barVisible);
  };
  return (
    <UserPageTemplate pageType={pageContext}>
      <StyledWrapper activePage={pageContext}>
        <StyledPageHeader activePage={pageContext}>
          <StyledHeading big as="h1">
            {pageContext}
          </StyledHeading>
          <StyledParagraph>
            {pageContext === 'articleSearch' ? '' : typeLength[pageContext].length} {pageContext}
          </StyledParagraph>
          {pageContext !== 'articleSearch' ? <Input search placeholder="Search" /> : ''}
          {pageContext === 'twitters' ? <TwitterDetail /> : ''}
          {(pageContext === 'articles' || pageContext === 'articleSearch') && (
            <StyledOverlapCategory>
              <StyledOverlapLink as={Link} to="/articles">
                Articles
              </StyledOverlapLink>
              <StyledOverlapLink as={Link} to="/articleSearch">
                Search
              </StyledOverlapLink>
            </StyledOverlapCategory>
          )}
        </StyledPageHeader>
        {pageContext === 'articles' ? (
          <StyledArticlesPage>
            <StyledArticlesGrid activePage={pageContext}>{children}</StyledArticlesGrid>
            <ArticlesList />
          </StyledArticlesPage>
        ) : (
          <StyledGrid activePage={pageContext}>{children}</StyledGrid>
        )}
        <StyledButtonIcon onClick={handleBarToggle} icon={plusIcon} activecolor={pageContext} />
        <NewItemBar handleClose={handleBarToggle} isVisible={barVisible} />
      </StyledWrapper>
    </UserPageTemplate>
  );
};

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
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

GridTemplate.defaultProps = {
  pageContext: 'notes',
};

export default withContext(GridTemplate);
