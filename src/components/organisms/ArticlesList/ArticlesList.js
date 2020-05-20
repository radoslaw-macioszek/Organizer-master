import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { loadArticlesAction } from '../../../store/articles/articles.reducer';

const StyledArticlesList = styled.div`
  min-width: 20vw;
  max-width: 30vw;
  margin-left: 50px;
  border: 2px solid ${({ theme }) => theme.articles};
  border-radius: 10px;
`;

const StyledTitle = styled.a`
  position: absolute;
  bottom: 0;
  padding: 0 30px 0 5px;
  color: white;
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 5px;

  border-radius: 3px;

  &::after {
    content: attr(data-tool-tip);
    font-size: 1.4rem;
    display: block;
    position: absolute;
    background-color: ${({ theme }) => theme.grey300};
    padding: 5px 15px;
    color: white;
    border-radius: 3px;
    bottom: 0;
    left: 0.5vw;
    overflow-wrap: normal;
    transform: scale(0);
    transition: transform ease-out 150ms, bottom ease-out 150ms;
    transition-delay: 1s;
    width: 15vw;
    text-align: center;
  }

  &:hover::after {
    transform: scale(1);
    bottom: 100%;
  }
`;

const StyledArticle = styled.div`
  display: flex;
  padding: 15px 25px 0;
  position: relative;

  &:hover {
    filter: grayscale(50%);
    transform: scale(1.1);
  }

  &:hover ${StyledTitle} {
    text-decoration: underline;
  }
`;

const StyledArticleImage = styled.img`
  width: 100%;
  height: 18vh;
  border-radius: 10px;
`;

const ArticlesList = () => {
  const dispatch = useDispatch();
  const articlesData = useSelector((state) => state.articlesReducer.data);

  console.log('data', articlesData);

  useEffect(() => {
    dispatch(loadArticlesAction('trump'));
  }, [dispatch]);

  return (
    <StyledArticlesList>
      {articlesData &&
        articlesData.map((article) => (
          <StyledArticle key={article.title}>
            <StyledArticleImage src={article.urlToImage} />
            <StyledTitle data-tool-tip={article.title} href={article.url}>
              {article.title}
            </StyledTitle>
          </StyledArticle>
        ))}
    </StyledArticlesList>
  );
};

export default ArticlesList;
