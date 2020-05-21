import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Formik, Form } from 'formik';

import PropTypes from 'prop-types';
import Heading from '../components/atoms/Heading/Heading';
import Button from '../components/atoms/Button/Button';
import Input from '../components/atoms/Input/Input';

import Paragraph from '../components/atoms/Paragraph/Paragraph';
import { noteEdit } from '../store/NATitems/NATitems.reducer';

import UserPageTemplate from './UserPageTemplate';
import withContext from '../hoc/withContext';

const StyledWrapper = styled.div`
  margin: 100px 100px;

  display: flex;
`;
const StyledColumn = styled.div`
  width: 35vw;
  min-height: 30vh;
  display: flex;

  flex-direction: column;
  justify-content: left;
  position: relative;

  margin-left: 5vw;
  margin-right: 3vw;
`;

const StyledHeading = styled(Heading)`
  font-size: 50px;
  font-weight: ${({ theme }) => theme.bold};
  margin: 0 0 30px;
  max-width: 29vw;
`;

const StyledDate = styled(Paragraph)`
  text-transform: uppercase;
  font-size: 15px;
  margin: 0 0 10px 0;
`;

const StyledParagraph = styled(Paragraph)`
  line-height: 1.6;
  margin: 0 0 10px 0;
  color: ${({ theme }) => theme.grey300};
`;

const StyledLinkButton = styled.a`
  height: 47px;
  color: #000;
`;
const StyledButtonsWrapper = styled.div`
  display: flex;
`;

const StyledButton = styled(Button)`
  background-color: ${({ activecolor, theme }) => (activecolor ? theme[activecolor] : 'white')};
  margin: 50px 100px 20px 0;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  cursor: pointer;
`;

const StyledInput = styled(Input)`
  margin-top: 30px;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const StyledTextArea = styled(Input)`
  margin: 30px 0 100px;
  border-radius: 20px;
  height: 30vh;
`;

const DetailsTemplate = ({ pageContext, title, content, id, created }) => {
  const [openEditor, setOpenEditor] = useState(false);
  const dispatch = useDispatch();

  const [editedTitle, setEditedTitle] = useState(title);
  const [editedContent, setEditedContent] = useState(content);

  return (
    <UserPageTemplate>
      <StyledWrapper>
        <StyledColumn>
          <StyledDate>{created}</StyledDate>
          <StyledHeading>{editedTitle}</StyledHeading>
          <StyledParagraph>{editedContent}</StyledParagraph>
          <StyledButtonsWrapper>
            <StyledButton as={Link} to={`/${pageContext}`} activecolor={pageContext}>
              CLOSE / SAVE
            </StyledButton>
            <StyledButton activecolor={pageContext} onClick={() => setOpenEditor(!openEditor)}>
              EDIT
            </StyledButton>
          </StyledButtonsWrapper>
          <StyledLinkButton href="">remove note</StyledLinkButton>
        </StyledColumn>
        {openEditor && (
          <StyledColumn>
            <Formik
              initialValues={{
                id,
                title,
                content,
                created,
                edited: `${new Date().toLocaleDateString()}`,
              }}
              onSubmit={(values) => {
                dispatch(
                  noteEdit(
                    values.id,
                    values.title,
                    values.created,
                    values.content,
                    values.edited,
                    'notes',
                  ),
                );
                setOpenEditor(false);
                setEditedTitle(values.title);
                setEditedContent(values.content);
              }}
            >
              {({ values, handleChange, handleBlur }) => (
                <StyledForm autoComplete="off">
                  <StyledInput
                    type="text"
                    name="title"
                    placeholder="title"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
                  />

                  <StyledTextArea
                    as="textarea"
                    placeholder="Text.."
                    name="content"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.content}
                  />
                  <StyledButton type="submit" activecolor={pageContext}>
                    Add note
                  </StyledButton>
                </StyledForm>
              )}
            </Formik>
          </StyledColumn>
        )}
      </StyledWrapper>
    </UserPageTemplate>
  );
};

DetailsTemplate.propTypes = {
  pageContext: PropTypes.string,
  id: PropTypes.number,
  title: PropTypes.string,
  created: PropTypes.string,
  content: PropTypes.string,
};

DetailsTemplate.defaultProps = {
  id: '',
  title: '',
  created: '',
  content: '',
};

export default withContext(DetailsTemplate);
