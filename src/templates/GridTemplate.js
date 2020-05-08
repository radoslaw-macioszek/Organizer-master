import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserPageTemplate from './UserPageTemplate';
import Input from '../components/atoms/Input/Input';
import Heading from '../components/atoms/Heading/Heading';
import Paragraph from '../components/atoms/Paragraph/Paragraph';
import withContext from '../hoc/withContext';
import ButtonIcon from '../components/atoms/ButtonIcon/ButtonIcon';
import plusIcon from '../assets/icons/plus.svg';
import NewItemBar from '../components/organisms/NewItemBar/NewItemBar';

const StyledWrapper = styled.div`
  padding: 25px 150px 25px 70px;
  position: relative;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0;

  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 85px;
`;

// position fixed, zeby nawet przy scrollowaniu byl w tym samym miejscu
const StyledButtonIcon = styled(ButtonIcon)`
  background-color: ${({ activecolor, theme }) => theme[activecolor]};
  border-radius: 50px;

  position: fixed;
  bottom: 40px;
  right: 40px;

  background-size: 40%;
  z-index: 1000000;

  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.3);
`;

class GridTemplate extends React.Component {
  state = {
    barVisible: false,
  };

  handleBarToggle = () => {
    this.setState((prevState) => ({
      barVisible: !prevState.barVisible,
    }));
  };

  render() {
    const { children, pageContext } = this.props;
    const { barVisible } = this.state;

    return (
      <UserPageTemplate pageType={pageContext}>
        <StyledWrapper>
          <StyledPageHeader>
            <Input search placeholder="Search" />
            <StyledHeading big as="h1">
              {pageContext}
            </StyledHeading>
            <StyledParagraph>6 {pageContext}</StyledParagraph>
          </StyledPageHeader>
          <StyledGrid>{children}</StyledGrid>
          <StyledButtonIcon
            onClick={this.handleBarToggle}
            icon={plusIcon}
            activecolor={pageContext}
          />
          <NewItemBar handleClose={this.handleBarToggle} isVisible={barVisible} />
        </StyledWrapper>
      </UserPageTemplate>
    );
  }
}

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles', 'books', 'movies', 'series']),
};

GridTemplate.defaultProps = {
  pageContext: 'notes',
};

export default withContext(GridTemplate);
