import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { loadArticlesAction } from '../../../store/articles/articles.reducer';
import Input from '../../atoms/Input/Input';

const StyledWrapper = styled.div`
  margin-top: -19vh;
`;

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
  padding: 5px;
  margin-right: 25px;
  color: white;
  font-weight: bold;
  font-size: 1.6rem;
  margin-bottom: 5px;
  background-color: hsl(0, 0%, 0%, 0.4);

  border-radius: 3px;

  &::after {
    content: attr(data-tool-tip);
    font-size: 1.3rem;
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
    transition-delay: 2s;
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
  padding: 25px 25px 0;
  position: relative;

  &:hover {
    filter: grayscale(50%);
    transform: scale(1.1);
  }

  &:hover ${StyledTitle} {
    text-decoration: underline;
  }

  &:last-child {
    padding-bottom: 25px;
  }
`;

const StyledArticleImage = styled.img`
  width: 100%;
  height: 18vh;
  border-radius: 10px;
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-weight: bold;
  margin-bottom: 0;
`;

const StyledInput = styled(Input)`
  margin-top: 5px;
  margin-left: 35px;
  width: 70%;
`;

const StyledSpan = styled.p`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.grey300};
  width: 100%;

  display: flex;
  justify-content: center;

  margin-left: 25px;
  text-align: center;
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
    if (articleNameSearch === 'Search' || sendReq) {
      dispatch(loadArticlesAction(articleNameSearch));
      setSendReq(false);
      setArticleNameSearch('');
    }
  }, [dispatch, sendReq]);

  return (
    <StyledWrapper>
      <form onSubmit={handleSubmit}>
        <StyledLabel>
          Articles search:
          <StyledInput
            type="text"
            placeholder="search"
            value={articleNameSearch}
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
            <StyledArticle key={i}>
              <StyledArticleImage src={article.urlToImage} />
              <StyledTitle data-tool-tip={article.title} href={article.url}>
                {article.title}
              </StyledTitle>
            </StyledArticle>
          ))}
      </StyledArticlesList>
    </StyledWrapper>
  );
};

export default ArticlesList;
