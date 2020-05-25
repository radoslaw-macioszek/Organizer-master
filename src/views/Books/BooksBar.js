import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

import withContext from '../../hoc/withContext';

import ButtonIcon from '../../components/atoms/ButtonIcon/ButtonIcon';
import RightSearchBar from '../../components/organisms/RightSearchBar/RightSearchBar';
import AddButton from '../../components/atoms/AddButton/AddButton';
import ButtonLink from '../../components/atoms/ButtonLink/ButtonLink';
import BooksToolTip from '../../components/molecules/ToolTip/BooksToolTip';

import { addItem } from '../../store/NATitems/NATitems.reducer';
import { devices } from '../../Devices/devices';

const StyledButtonIcon = styled(ButtonIcon)`
  background-color: ${({ activecolor, theme }) => theme[activecolor]};

  @media ${devices.tablet} {
    height: 7rem;
    width: 11rem;
  }
`;

const StyledBookWrapper = styled.div`
  display: flex;
  margin: 1rem 1rem 3.5rem;

  position: relative;
  height: 20vh;
  border-bottom: 1px solid ${({ theme }) => theme.grey200};
`;

const StyledDetails = styled.div`
  flex-direction: column;
  height: 15vh;
  width: 100%;
  margin: 1rem 1rem;
  @media ${devices.mobileL} {
    font-size: 1.3rem;
  }
`;

const StyledImage = styled.img`
  height: 16vh;
  width: 100%;
`;

const StyledDescription = styled.div`
  position: relative;
  height: 15vh;
`;

const StyledToolTip = styled(BooksToolTip)`
  ${StyledDescription}:hover & {
    visibility: visible;
    border: 2px solid ${({ theme }) => theme.books};

    transform: translate(-50%, -50%);
    opacity: 1;
    background-color: white;
    text-align: justify;
    z-index: 999999999999999999;
  }

  @media ${devices.mobileL} {
    left: 12rem;
    width: 25rem;
    top: 25rem;
  }

  @media ${devices.mobileL} {
    left: 10rem;
    width: 23rem;
  }
`;

const StyledTitle = styled.h3`
  margin-top: -0.8rem;
  margin-bottom: -1rem;
`;

const StyledToolTipTitle = styled.p`
  font-size: 1.6rem;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 1rem;
`;

const StyledAuthor = styled.p`
  @media ${devices.mobileM} {
    font-size: 1.2rem;
  }
`;

const StyledParagraph = styled.p`
  margin: 0 0 1.2rem 1rem;
  margin-bottom: 1.2rem;
`;

const StyledSpan = styled.span`
  color: ${({ theme }) => theme.grey300};
  min-width: 6vw;
  display: inline-flex;
  font-size: 1.6rem;
  margin-right: 0.5rem;
`;

const Books = ({ pageContext, actualDate }) => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.booksReducer.data);

  const [barVisible, setBarVisibility] = useState(false);

  return (
    <>
      <RightSearchBar isVisible={barVisible}>
        {books.items &&
          books.items.map((book) => {
            const {
              imageLinks,
              title,
              authors,
              categories,
              description,
              averageRating,
              pageCount,
              language,
              previewLink,
            } = book.volumeInfo;

            const image =
              'https://img.favpng.com/17/8/9/book-cattle-leather-png-favpng-4NxiJw1fkY1X791YDumsrAvvE.jpg';

            const values = {
              id: book.id,
              title,
              description,
              created: actualDate,
              image: `${imageLinks ? imageLinks.smallThumbnail : image}`,
            };

            return (
              <StyledBookWrapper key={book.id}>
                <AddButton onClick={() => dispatch(addItem(pageContext, values))}>
                  Want to read
                </AddButton>

                <StyledDescription>
                  <StyledImage src={imageLinks ? imageLinks.smallThumbnail : image} alt="book" />
                  <StyledToolTip>
                    <StyledToolTipTitle>{title}</StyledToolTipTitle>
                    <div style={{ display: 'flex', marginBottom: '1rem' }}>
                      <StyledParagraph>
                        {averageRating ? averageRating : ' - '}
                        <FaStar color={'#ffc107'} size={13} style={{ marginLeft: '2px' }} />
                      </StyledParagraph>
                      <StyledParagraph>
                        <StyledSpan>pages:</StyledSpan>
                        {pageCount}
                      </StyledParagraph>
                      <StyledParagraph>
                        <StyledSpan>lang:</StyledSpan>
                        {language.toUpperCase()}
                      </StyledParagraph>
                    </div>
                    {/* <StyledParagraphT>
                      category:
                      {categories ? categories.map((cat) => ` ${cat}, `) : ' '}
                    </StyledParagraphT>
                    <StyledParagraphB>
                      rate:
                      {averageRating ? averageRating : ' - '}; pages: {pageCount}; lang.{' '}
                      {language.toUpperCase()}
                    </StyledParagraphB> */}
                    Description:
                    <hr />
                    {description}
                  </StyledToolTip>
                </StyledDescription>
                <StyledDetails>
                  <StyledTitle>{title}</StyledTitle>
                  <StyledAuthor>
                    by {authors ? authors.map((auth) => `${auth}, `) : '-'}
                  </StyledAuthor>

                  <ButtonLink href={previewLink}>Check Book</ButtonLink>
                </StyledDetails>
              </StyledBookWrapper>
            );
          })}
      </RightSearchBar>
      <StyledButtonIcon
        onClick={() => setBarVisibility(!barVisible)}
        activecolor={pageContext}
        secondary
      >
        Find new book!
      </StyledButtonIcon>
    </>
  );
};

export default withContext(Books);
