import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styled from 'styled-components';

import { loadArticlesAction } from '../../../store/articles/articles.reducer';
import Input from '../../atoms/Input/Input';
import ToolTip from '../../molecules/ToolTip/ToolTip';

import { devices } from '../../../Devices/devices';

const StyledWrapper = styled.div`
  margin-top: -16vh;

  @media ${devices.laptop} {
    margin-top: -12vh;
  }

  @media ${devices.tablet} {
    display: none;
  }
`;

const StyledArticlesList = styled.div`
  min-width: 20vw;
  max-width: 30vw;
  margin-left: 5rem;
  border: 2px solid ${({ theme }) => theme.articles};
  border-radius: 1rem;

  @media ${devices.laptop} {
    max-width: 30vw;
    margin-left: 3rem;
  }
`;

const StyledArticle = styled.div`
  display: flex;
  padding: 2.5rem 2.5rem 0;
  position: relative;

  &:hover {
    filter: grayscale(50%);
    transform: scale(1.1);
  }

  &:hover ${ToolTip} {
    text-decoration: underline;
  }

  &:last-child {
    padding-bottom: 2.5rem;
  }
  @media ${devices.laptop} {
    width: 30vw;
    padding: 2rem 1em 0;
  }
`;

const StyledArticleImage = styled.img`
  width: 100%;
  height: 18vh;
  border-radius: 1rem;
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-weight: bold;
  margin-bottom: 0;
`;

const StyledInput = styled(Input)`
  margin-top: 0.5rem;
  margin-left: 3.5rem;
  width: 70%;
`;

const StyledSpan = styled.p`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.grey300};
  width: 100%;

  display: flex;
  justify-content: center;

  margin-left: 2.5rem;
  text-align: center;
`;

const StyledArticleLink = styled.a`
  color: white;
  text-decoration: none;
  @media ${devices.tablet} {
    font-size: 1rem;
  }
`;

const ArticlesList = () => {
  const [articleNameSearch, setArticleNameSearch] = useState('Search');
  const [sendReq, setSendReq] = useState(false);

  const dispatch = useDispatch();
  const articlesData = useSelector((state) => state.articlesReducer.data);

  const handleSubmit = (event) => {
    setSendReq(true);
    event.preventDefault();
  };

  useEffect(() => {
    if (articleNameSearch !== '' || sendReq) {
      dispatch(loadArticlesAction(articleNameSearch));
    }
  }, [dispatch, sendReq, articleNameSearch]);

  return (
    <StyledWrapper>
      <form onSubmit={handleSubmit}>
        <StyledLabel>
          Articles search:
          <StyledInput
            type="text"
            placeholder="search"
            onChange={(event) => setArticleNameSearch(event.target.value)}
            search
          />
        </StyledLabel>
      </form>
      <StyledSpan>
        (Find interesting article, read it, copy the link and add to your list!)
      </StyledSpan>
      <StyledArticlesList>
        {articlesData &&
          articlesData.map((article, i) => (
            <StyledArticle key={i + 1}>
              <StyledArticleImage src={article.urlToImage} />
              <ToolTip data-tool-tip={article.title}>
                <StyledArticleLink href={article.url}>{article.title}</StyledArticleLink>
              </ToolTip>
            </StyledArticle>
          ))}
      </StyledArticlesList>
    </StyledWrapper>
  );
};

export default ArticlesList;
