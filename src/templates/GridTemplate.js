import React, { useState } from 'react';
import { useSelector } from 'react-redux';
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

const StyledWrapper = styled.div`
  padding: ${({ activePage }) =>
    activePage === 'articles' ? '25px 80px 25px 70px' : '25px 150px 25px 70px'};
  position: relative;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0;

  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: ${({ activePage }) =>
    activePage === 'twitters' ? 'repeat(4, 1fr)' : 'repeat(3, 1fr)'};
  grid-gap: ${({ activePage }) => (activePage === 'notes' ? '85px' : '40px')};
  height: 100%;
`;

const StyledArticlesGrid = styled(StyledGrid)`
  max-width: 100vw;
`;

// position fixed, zeby nawet przy scrollowaniu byl w tym samym miejscu
const StyledButtonIcon = styled(ButtonIcon)`
  background-color: ${({ activecolor, theme }) => theme[activecolor]};
  border-radius: 50px;

  position: fixed;
  bottom: 40px;
  right: 40px;

  background-size: 40%;
  z-index: 1000000;

  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.3);
`;

//

const StyledDoneContainer = styled.div`
  position: absolute;
  right: 4%;
  top: 12%;
  height: 14vh;
  width: 52%;
  border: 3px solid ${({ theme }) => theme.twitters};
  border-radius: 10px;

  overflow: scroll;
`;

const StyledP = styled.p`
  position: absolute;
  bottom: 88%;
  left: 45%;
  margin-bottom: 5px;
  margin-top: 0;
  font-weight: bold;
`;

const StyledDone = styled.div`
  margin-top: 10px;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
`;

const StyledSpan = styled.span`
  color: ${({ theme }) => theme.grey300};
  min-width: 6vw;
  display: inline-flex;
  font-size: 16px;
`;

const StyledParagraf = styled.p`
  display: inline-flex;
  width: 100%;
  margin: 2px 0;
  font-size: 15px;
`;

const StyledArticlesPage = styled.div`
  display: flex;
`;

const GridTemplate = ({ children, pageContext }) => {
  const details = useSelector((state) => state.natReducer.twitterDetails);
  const [barVisible, setBarVisible] = useState(false);

  const typeLength = useSelector((state) => state.natReducer);

  const handleBarToggle = () => {
    setBarVisible(!barVisible);
  };
  return (
    <UserPageTemplate pageType={pageContext}>
      <StyledWrapper activePage={pageContext}>
        <StyledPageHeader>
          <Input search placeholder="Search" />
          <StyledHeading big as="h1">
            {pageContext}
          </StyledHeading>
          <StyledParagraph>
            {typeLength[pageContext].length} {pageContext}
          </StyledParagraph>
          {pageContext === 'twitters' ? (
            <>
              <StyledP>Account details</StyledP>
              <StyledDoneContainer>
                {details &&
                  details.map((item) => (
                    <div key={item.id}>
                      <StyledDone>
                        <StyledParagraf>
                          <StyledSpan>added:</StyledSpan>
                          {item.date}
                        </StyledParagraf>
                        <StyledParagraf>
                          <StyledSpan>account:</StyledSpan>
                          {item.name}
                        </StyledParagraf>
                        <StyledParagraf>
                          <StyledSpan>title:</StyledSpan>
                          {item.title}
                        </StyledParagraf>
                        <StyledParagraf>
                          <StyledSpan>content:</StyledSpan>
                          {item.content}
                        </StyledParagraf>
                      </StyledDone>
                    </div>
                  ))}
              </StyledDoneContainer>
            </>
          ) : (
            ''
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
  ]),
};

GridTemplate.defaultProps = {
  pageContext: 'notes',
};

export default withContext(GridTemplate);
