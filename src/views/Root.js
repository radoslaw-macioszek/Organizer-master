import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../store';
import MainTemplate from '../templates/MainTemplate';
import DetailsPage from './DetailsPage';
import Notes from './Notes';
import Twitters from './Twitters';
import Articles from './Articles';
import Books from './Books';
import Movies from './Movies';
import routes from '../Routes';
import BooksTemplate from '../templates/BooksTemplate';
import Modal from '../components/molecules/Modal/Modal';

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainTemplate>
          <Switch>
            <Route exact path={routes.home} render={() => <Redirect to="/notes" />} />
            <Route exact path={routes.notes} component={Notes} />
            <Route path={routes.note} component={DetailsPage} />
            <Route exact path={routes.twitters} component={Twitters} />
            <Route path={routes.twitter} component={DetailsPage} />
            <Route exact path={routes.articles} component={Articles} />
            <Route path={routes.article} component={DetailsPage} />
            <Route path={routes.books} component={BooksTemplate} />
            <Route path={routes.movies} component={Movies} />
            <Route path={routes.login} />
          </Switch>
        </MainTemplate>
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
