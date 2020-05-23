import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styled from 'styled-components';
import GridTemplate from '../templates/GridTemplate';
import Input from '../components/atoms/Input/Input';

import ToolTip from '../components/molecules/ToolTip/ToolTip';

import { loadArticlesAction } from '../store/articles/articles.reducer';

import { devices } from '../Devices/devices';

const StyledArticlesList = styled.div`
  min-width: 20vw;
  max-width: 30vw;
  margin-left: 5rem;
  border: 2px solid ${({ theme }) => theme.articles};
  border-radius: 1rem;

  @media ${devices.tablet} {
    max-width: 60vw;
    margin-left: 5rem;
  }

  @media ${devices.mobileL} {
    margin-left: 2rem;
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
`;

const StyledArticleImage = styled.img`
  width: 100%;
  height: 18vh;
  border-radius: 1rem;
`;

const StyledArticleLink = styled.a`
  color: white;
  text-decoration: none;
`;

const StyledInput = styled(Input)`
  margin-top: -1rem;
  width: 70%;
`;

const ArticleSearch = () => {
  const [articleNameSearch, setArticleNameSearch] = useState('Search');
  const [sendReq, setSendReq] = useState(false);

  const dispatch = useDispatch();
  const articlesData = useSelector((state) => state.articlesReducer.data);

  const handleSubmit = (event) => {
    setSendReq(true);
    event.preventDefault();
  };

  useEffect(() => {
    if (articleNameSearch === 'Search' || sendReq) {
      dispatch(loadArticlesAction(articleNameSearch));
      setSendReq(false);
      setArticleNameSearch('');
    }
  }, [dispatch, sendReq, articleNameSearch]);

  return (
    <GridTemplate pageType="articleSearch">
      <form onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          placeholder="search"
          value={articleNameSearch}
          onChange={(event) => setArticleNameSearch(event.target.value)}
          search
        />
      </form>
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
    </GridTemplate>
  );
};

export default ArticleSearch;
