import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';

import styled from 'styled-components';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import withContext from '../../../hoc/withContext';
import Heading from '../../atoms/Heading/Heading';
import { addItem as addItemAction } from '../../../store/NATitems/NATitems.reducer';

const StyledWrapper = styled.div`
  border-left: 1rem solid ${({ theme, activecolor }) => theme[activecolor]};
  box-shadow: -0.5rem 0 1.5rem rgba(0, 0, 0, 0.2);

  z-index: 9999;
  display: flex;
  flex-direction: column;
  padding: 10rem 9rem;

  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 68rem;
  background-color: white;

  transform: translateX(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.5s ease-in-out;
`;

const StyledTextArea = styled(Input)`
  margin: 3rem 0 10rem;
  border-radius: 2rem;
  height: 30vh;
`;

const StyledButton = styled(Button)`
  background-color: ${({ activecolor, theme }) => theme[activecolor]};
`;

const StyledInput = styled(Input)`
  margin-top: 3rem;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const StyledForLabel = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  font-size: 1.1rem;
  margin: 2rem 0 -2rem 2rem;
  color: ${({ theme }) => theme.grey300};
`;

const NewItemBar = ({ pageContext, isVisible, handleClose }) => {
  const dispatch = useDispatch();
  const today = new Date().toLocaleDateString();
  const min = `${today.slice(6, 10)}-${today.slice(3, 5)}-${today.slice(0, 2)}T00:00`;

  return (
    <StyledWrapper isVisible={isVisible} activecolor={pageContext}>
      <Heading big>Create new {pageContext}</Heading>
      <Formik
        initialValues={{
          title: '',
          content: '',
          twitterName: '',
          articleUrl: '',
          created: `${new Date().toLocaleDateString()}`,
          date: '',
        }}
        onSubmit={(values) => {
          console.log(values);
          console.log(pageContext);
          dispatch(addItemAction(pageContext, values));
          handleClose();
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
            {pageContext === 'twitters' && (
              <StyledInput
                type="text"
                name="twitterName"
                placeholder="Account Name eg. rad-mac"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.twitterName}
              />
            )}
            {pageContext === 'articles' && (
              <StyledInput
                type="text"
                name="articleUrl"
                placeholder="link"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.articleUrl}
              />
            )}
            {pageContext === 'todos' && (
              <StyledForLabel>
                <StyledLabel htmlFor="date">Set date: (date and time):</StyledLabel>
                <StyledInput
                  type="datetime-local"
                  name="date"
                  placeholder="Set date"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.date}
                  min={min}
                />
              </StyledForLabel>
            )}
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
    </StyledWrapper>
  );
};

export default withContext(NewItemBar);
