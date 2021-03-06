import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../store';
import MainTemplate from '../templates/MainTemplate';
import DetailsPage from './DetailsPage';
import Notes from './Notes';
import Twitters from './Twitters';
import Articles from './Articles';
import ArticleSearch from './ArticleSearch';
import Movies from './Movies';
import routes from '../Routes';
import BooksContentTemplate from '../templates/BooksContentTemplate';
import ToDo from './ToDo';

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainTemplate>
          <Switch>
            <Route exact path={routes.home} render={() => <Redirect to="/notes" />} />
            <Route exact path={routes.todos} component={ToDo} />
            <Route exact path={routes.notes} component={Notes} />
            <Route path={routes.note} component={DetailsPage} />
            <Route exact path={routes.twitters} component={Twitters} />
            <Route path={routes.twitter} component={DetailsPage} />
            <Route exact path={routes.articles} component={Articles} />
            <Route exact path={routes.articleSearch} component={ArticleSearch} />
            <Route path={routes.article} component={DetailsPage} />
            <Route path={routes.books} component={BooksContentTemplate} />
            <Route path={routes.movies} component={Movies} />
            <Route path={routes.series} component={Movies} />
            <Route path={routes.login} />
          </Switch>
        </MainTemplate>
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
