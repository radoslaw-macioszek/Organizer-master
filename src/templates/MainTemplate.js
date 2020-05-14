import React from 'react';
// import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { withRouter } from 'react-router-dom';
import GlobalStyle from '../theme/GlobalStyle';
import theme from '../theme/mainTheme';
import PageContext from '../context';

// ThemeProvider sluzy jako "teleport" dla styli. Musi on oplatac jeden element, dlatego <> i </>

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
  // pathname wziete z propsow przekazanych tutaj przez withRouter. Zastosowana tam destrukturyzacja.
  // stworzone to by uzyskac sciezke.

  //    const currentPage = pageTypes.filter((page) => pathname.includes(page)); -- daje tablice
  //     const [currentPage] = pageTypes.filter((page) => pathname.includes(page)); -- daje tylko element z tablicy.

  // prevProps i prevState to dwa argumenty didUpdate. Zostaly podane ze wzgledu na zapetlanie sie bez nich w naszym przypadku.

  setCurrentPage = (prevState = '') => {
    const pageTypes = ['twitters', 'articles', 'notes', 'books', 'movies', 'series'];
    // propsy wyciagniete z withRouter'a. v
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

// jak przepuszcza tylko jedno children, to bedziemy oplatac w <> </>

// dziala jak connect. Oplata komponent nadajac mu dodatkowe propsy.
// taki schemat do higher order component - kompnent przyjmuje komponent jako parametr/argument
export default withRouter(MainTemplate);
