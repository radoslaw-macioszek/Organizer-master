import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import GridTemplate from '../templates/GridTemplate';
import Card from '../components/molecules/Card/Card';

// pageType pozwala zmieniac kolor sidebaru!
const Twitters = () => {
  const twitters = useSelector((state) => state.natReducer.twitters);

  return (
    <GridTemplate pageType="twitters">
      {twitters.map(({ title, created, content, twitterName, id }) => (
        <Card
          cardType="twitters"
          id={id}
          title={title}
          created={created}
          content={content}
          twitterName={twitterName}
          key={id}
        />
      ))}
    </GridTemplate>
  );
};

Twitters.propTypes = {
  twitters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      twitterName: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ),
};

Twitters.defaultProps = {
  twitters: [],
};

export default Twitters;
