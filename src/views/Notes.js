import React from 'react';
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import GridTemplate from '../templates/GridTemplate';
import Card from '../components/molecules/Card/Card';

const Notes = () => {
  const notes = useSelector((state) => state.natReducer.notes);
  return (
    <GridTemplate pageType="notes">
      {notes.map(({ title, created, content, id }) => (
        <Card cardType="notes" id={id} title={title} created={created} content={content} key={id} />
      ))}
    </GridTemplate>
  );
};

Notes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ),
};

Notes.defaultProps = {
  notes: [],
};

export default Notes;
