import React, { useEffect, useState } from 'react';
import withContext from '../hoc/withContext';

import UserPageTemplate from './UserPageTemplate';
import BookTemplate from './bookTemplate';

import Books from '../views/Books';
import BooksToRead from '../components/molecules/BooksToRead/BooksToRead';
import BooksRead from '../components/molecules/BooksRead/BooksRead';
import BooksFavorite from '../components/molecules/BooksFavorite/BooksFavorite';

const BooksTemplate = () => {
  return (
    <UserPageTemplate>
      <>
        <BookTemplate>
          <BooksToRead />
          <BooksRead />
          <BooksFavorite />
        </BookTemplate>
        <Books />
      </>
    </UserPageTemplate>
  );
};

export default withContext(BooksTemplate);
