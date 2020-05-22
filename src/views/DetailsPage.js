import React from 'react';
import { useSelector } from 'react-redux';
import DetailsTemplate from '../templates/DetailsTemplate';

const DetailsPage = () => {
  const note = useSelector((state) => state.natReducer.noteDetails);
  const notes = useSelector((state) => state.natReducer.notes);

  return (
    <DetailsTemplate
      id={note[0] && note[0].id}
      title={note[0] && note[0].title}
      content={note[0] && note[0].content}
      created={note[0] && note[0].date}
    />
  );
};

export default DetailsPage;
