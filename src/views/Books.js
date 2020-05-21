import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import withContext from '../hoc/withContext';

import ButtonIcon from '../components/atoms/ButtonIcon/ButtonIcon';
import RightSearchBar from '../components/organisms/RightSearchBar/RightSearchBar';

import { addItem } from '../store/NATitems/NATitems.reducer';

const StyledButtonIcon = styled(ButtonIcon)`
  background-color: ${({ activecolor, theme }) => theme[activecolor]};
  border-radius: 50px;

  position: fixed;
  bottom: 40px;
  right: 40px;
  color: white;

  width: 180px;
  font-size: 1.7rem;
  font-weight: bold;
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.3);

  background-size: 40%;
  z-index: 1000000;
`;

const StyledBookWrapper = styled.div`
  display: flex;
  margin: 10px 10px 35px;

  position: relative;
  height: 20vh;
  border-bottom: 1px solid ${({ theme }) => theme.grey200};
`;

const StyledDetails = styled.div`
  flex-direction: column;
  height: 15vh;
  width: 100%;
  margin: 10px 10px;
`;

const StyledImage = styled.img`
  height: 16vh;
  width: 7vw;
`;

const StyledDescription = styled.div`
  position: relative;
  height: 15vh;
`;

const StyledToolTip = styled.span`
  visibility: hidden;

  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 5px;
  color: #555;
  font-weight: 300;
  padding: 30px 30px 60px;
  position: absolute;
  width: 30vw;
  top: 100%;
  left: 300%;
  opacity: 0;
  transform: translate(-50%, -50%);
  transition: all 0.5s ease;
  text-align: center;

  ${StyledDescription}:hover & {
    visibility: visible;
    border: 2px solid ${({ theme }) => theme.books};

    transform: translate(-50%, -50%);
    opacity: 1;
    background-color: white;
    text-align: justify;
    z-index: 999999999999999999;
  }
`;

const StyledTitle = styled.h3`
  margin-top: -8px;
  margin-bottom: -10px;
`;

const StyledToolTipTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 30px;
`;

const StyledLink = styled.a`
  display: inline-flex;
  border-radius: 5px;
  text-decoration: none;
  padding: 5px 10px;
  width: 142px;
  align-items: center;
  justify-content: center;
  margin-top: 12px;
  background-color: ${({ theme }) => theme.grey200};
  color: ${({ theme }) => theme.grey300};
  position: absolute;
  right: 0;
  bottom: 35px;
`;

const StyledParagraphT = styled.p`
  margin: 0;
  margin-bottom: 5px;
  position: absolute;
  bottom: 34%;
`;

const StyledParagraphB = styled(StyledParagraphT)`
  bottom: 20%;
`;

const StyledAddButton = styled.button`
  position: absolute;
  top: 40%;
  right: 0;
  padding: 6px 6px;
  font-size: 11px;
  border-radius: 5px;
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
                <StyledAddButton onClick={() => dispatch(addItem(pageContext, values))}>
                  Want to read
                </StyledAddButton>

                <StyledDescription>
                  <StyledImage src={imageLinks ? imageLinks.smallThumbnail : image} alt="book" />
                  <StyledToolTip>
                    <StyledToolTipTitle>{title}</StyledToolTipTitle>
                    Description:
                    <hr />
                    {description}
                  </StyledToolTip>
                </StyledDescription>
                <StyledDetails>
                  <StyledTitle>{title}</StyledTitle>
                  <p>by {authors ? authors.map((auth) => `${auth}, `) : '-'}</p>

                  <StyledParagraphT>
                    category:
                    {categories ? categories.map((cat) => ` ${cat}, `) : ' '}
                  </StyledParagraphT>
                  <StyledParagraphB>
                    rate:
                    {averageRating ? averageRating : ' - '}; pages: {pageCount}; lang.{' '}
                    {language.toUpperCase()}
                  </StyledParagraphB>
                  <StyledLink href={previewLink}>Check Book</StyledLink>
                </StyledDetails>
              </StyledBookWrapper>
            );
          })}
      </RightSearchBar>
      <StyledButtonIcon onClick={() => setBarVisibility(!barVisible)} activecolor={pageContext}>
        Find new book!
      </StyledButtonIcon>
    </>
  );
};

export default withContext(Books);
