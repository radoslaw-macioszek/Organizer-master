import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Heading from '../components/atoms/Heading/Heading';
import Button from '../components/atoms/Button/Button';
import Paragraph from '../components/atoms/Paragraph/Paragraph';

import UserPageTemplate from './UserPageTemplate';
import withContext from '../hoc/withContext';

const StyledWrapper = styled.div`
  margin: 100px 100px;
  width: 35vw;
  min-height: 30vh;

  display: flex;
  flex-direction: column;
  justify-content: left;

  position: relative;
`;

const StyledHeading = styled(Heading)`
  font-size: 50px;
  font-weight: ${({ theme }) => theme.bold};
  margin: 15px 0 8px;
  max-width: 29vw;
`;

const StyledDate = styled(Paragraph)`
  text-transform: uppercase;
  font-size: 15px;
  margin: 0 0 30px 0;
`;

const StyledParagraph = styled(Paragraph)`
  line-height: 1.6;
  margin: 0 0 10px 0;
  color: ${({ theme }) => theme.grey300};
`;

const StyledLinkButton = styled.a`
  height: 47px;
  color: #000;
`;

const StyledAvatar = styled.img`
  width: 110px;
  height: 110px;
  margin: 10px;
  border: 5px solid ${({ theme }) => theme.twitters};
  border-radius: 50px;
  position: absolute;
  right: 10px;
  top: 0;
`;

const StyledButton = styled(Button)`
  background-color: ${({ activecolor, theme }) => (activecolor ? theme[activecolor] : 'white')};
  margin: 50px 0 20px 0;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
`;

const DetailsTemplate = ({ pageContext, title, content, articleUrl, twitterName, created }) => (
  <UserPageTemplate>
    <StyledWrapper>
      <StyledHeading>{title}</StyledHeading>
      <StyledDate>{created}</StyledDate>
      <StyledParagraph>{content}</StyledParagraph>
      {pageContext === 'twitters' && (
        <StyledLinkButton href={articleUrl}>OPEN THIS TWITTER</StyledLinkButton>
      )}
      {pageContext === 'articles' && (
        <StyledLinkButton href={articleUrl}>OPEN THIS ARTICLE</StyledLinkButton>
      )}

      {pageContext === 'twitters' && (
        <StyledAvatar src={`https://avatars.io/twitter/${twitterName}`} />
      )}
      <StyledButton as={Link} to={`/${pageContext}`} activecolor={pageContext}>
        CLOSE / SAVE
      </StyledButton>
      <StyledLinkButton href="">remove note</StyledLinkButton>
    </StyledWrapper>
  </UserPageTemplate>
);

DetailsTemplate.propTypes = {
  pageContext: PropTypes.string.isRequired,
  title: PropTypes.string,
  created: PropTypes.string,
  content: PropTypes.string,
  articleUrl: PropTypes.string,
  twitterName: PropTypes.string,
};

DetailsTemplate.defaultProps = {
  title: '',
  created: '',
  content: '',
  articleUrl: '',
  twitterName: '',
};

export default withContext(DetailsTemplate);
