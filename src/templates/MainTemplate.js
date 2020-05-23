import React from 'react';
import { ThemeProvider } from 'styled-components';
import { withRouter } from 'react-router-dom';
import GlobalStyle from '../theme/GlobalStyle';
import theme from '../theme/mainTheme';
import PageContext from '../context';

class MainTemplate extends React.Component {
  state = {
    pageType: 'notes',
  };

  componentDidMount() {
    this.setCurrentPage();
  }

  componentDidUpdate(prevProps, prevState) {
    this.setCurrentPage(prevState);
  }
  setCurrentPage = (prevState = '') => {
    const pageTypes = [
      'twitters',
      'articles',
      'notes',
      'books',
      'movies',
      'series',
      'todos',
      'articleSearch',
    ];
    const {
      location: { pathname },
    } = this.props;
    const [currentPage] = pageTypes.filter((page) => pathname.includes(page));

    if (prevState.pageType !== currentPage) {
      this.setState({
        pageType: currentPage,
      });
    }
  };

  render() {
    const { children } = this.props;
    const { pageType } = this.state;

    return (
      <div>
        <PageContext.Provider value={pageType}>
          <GlobalStyle />
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </PageContext.Provider>
      </div>
    );
  }
}

export default withRouter(MainTemplate);
