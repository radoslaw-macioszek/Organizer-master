import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Redirect } from 'react-router-dom';
import { removeItem, twitterDetails } from '../../../store/NATitems/NATitems.reducer';
import Heading from '../../atoms/Heading/Heading';
import Button from '../../atoms/Button/Button';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import LinkIcon from '../../../assets/icons/link.svg';
import withContext from '../../../hoc/withContext';

const StyledWrapper = styled.div`
  min-height: ${({ activePage }) => (activePage === 'twitters' ? '15.5vh' : '380px')};
  min-width: ${({ activePage }) => (activePage === 'twitters' ? '19.5vw' : '100%')};

  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapperHead = styled.div`
  position: relative;
  padding: ${({ activeColor }) => (activeColor === 'twitters' ? '8px 30px' : '17px 30px')};
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};
  display: inline-flex;
  flex-direction: column;
  justify-content: center;

  :first-of-type {
    z-index: 9999;
  }

  &:hover {
    background-color: ${({ activeColor }) =>
      activeColor === 'notes' ? 'khaki' : activeColor === 'articles' ? 'darkseagreen' : ''};
    cursor: pointer;
  }

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const InnerWrapperBody = styled(InnerWrapperHead)`
  &:hover {
    background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};
    cursor: text;
  }
`;

const DateInfo = styled(Paragraph)`
  margin: 5px 0 5px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledHeading = styled(Heading)`
  font-size: 2rem;
  margin: 5px 0 0;
  width: ${({ activeColor }) => (activeColor === 'notes' ? '100%' : '80%')};
  overflow-wrap: normal;
`;

const StyledAvatar = styled.img`
  width: 75px;
  height: 75px;
  border: 4px solid ${({ theme }) => theme.twitters};
  border-radius: 50px;
  position: absolute;
  right: 25px;
  top: 10px;
`;

const StyledSecondAvatar = styled(StyledAvatar)`
  width: 81px;
  height: 81px;
  border: 3px solid white;
  border-radius: 50px;
  position: absolute;
  background: transparent;
  right: 22px;
  top: 7px;
`;

const StyledButton = styled(Button)`
  position: absolute;
  bottom: 5px;
  left: 20px;
`;

const StyledParagraph = styled(Paragraph)`
  margin-top: 10px;
  padding-left: 30px;
`;

const StyledLinkButton = styled.a`
  display: block;
  width: 47px;
  height: 47px;
  border-radius: 50px;
  background: white url(${LinkIcon}) no-repeat;
  background-size: 60%;
  background-position: 50%;
  position: absolute;
  right: 25px;
  top: 50%;
  transform: translateY(-50%);
`;

const StyledLink = styled.a`
  width: 8vw;
  position: absolute;
  right: 0;
  bottom: 15px;
  font-size: 12px;
  cursor: pointer;
`;
const Card = ({
  pageContext,
  id,
  title,
  twitterName,
  articleUrl,
  content,
  created,
  actualDate,
}) => {
  const dispatch = useDispatch();

  const [redirect, setRedirect] = useState(false);

  const handleCardClick = () => {
    if (pageContext !== 'twitters') {
      setRedirect(true);
    } else {
      dispatch(twitterDetails(id, title, created, content, 'twitterDetails', twitterName));
    }
  };

  // po to by przeniesc sie do danej karty! + funkcja handleCardClick + state
  if (redirect) {
    return <Redirect to={`${pageContext}/${id}`} title={title} />;
  }
  return (
    <StyledWrapper activePage={pageContext}>
      <InnerWrapperHead onClick={handleCardClick} activeColor={pageContext}>
        <StyledHeading>{pageContext === 'twitters' ? twitterName : title}</StyledHeading>
        <DateInfo>{created}</DateInfo>
        {pageContext === 'twitters' && (
          <>
            <StyledSecondAvatar />
            <StyledAvatar src={`https://api.adorable.io/avatars/161/${twitterName}@adorable.io`} />
          </>
        )}
        {pageContext === 'articles' && <StyledLinkButton href={articleUrl} />}
      </InnerWrapperHead>
      {pageContext === 'twitters' ? (
        <>
          <StyledButton onClick={() => dispatch(removeItem(pageContext, id))} secondary>
            REMOVE
          </StyledButton>
          <StyledLink href={`http://www.twitter.com/${twitterName}`}>OPEN THIS TWITTER</StyledLink>
          <StyledParagraph>{title}</StyledParagraph>
        </>
      ) : (
        <InnerWrapperBody flex>
          <Paragraph>{content}</Paragraph>
          <Button onClick={() => dispatch(removeItem(pageContext, id))} secondary>
            REMOVE
          </Button>
        </InnerWrapperBody>
      )}
    </StyledWrapper>
  );
};

Card.propTypes = {
  pageContext: PropTypes.oneOf([
    'notes',
    'twitters',
    'articles',
    'books',
    'movies',
    'series',
    'todos',
  ]),
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  twitterName: PropTypes.string,
  articleUrl: PropTypes.string,
  content: PropTypes.string.isRequired,
};

Card.defaultProps = {
  pageContext: 'notes',
  twitterName: null,
  articleUrl: null,
};

export default withContext(Card);
