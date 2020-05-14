import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import GridTemplate from '../templates/GridTemplate';
import Card from '../components/molecules/Card/Card';

const Articles = () => {
  const articles = useSelector((state) => state.natReducer.articles);
  return (
    <GridTemplate pageType="articles">
      {articles.map(({ title, created, articleUrl, content, id }) => (
        <Card
          id={id}
          cardType="articles"
          title={title}
          created={created}
          articleUrl={articleUrl}
          content={content}
          key={id}
        />
      ))}
    </GridTemplate>
  );
};

Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      articleUrl: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ),
};

Articles.defaultProps = {
  articles: [],
};

export default Articles;
