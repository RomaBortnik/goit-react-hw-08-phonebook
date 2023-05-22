import styled from 'styled-components';
import { Form, Field } from 'formik';

export const StyledContactForm = styled(Form)`
  width: 400px;
  padding: 12px 16px;
  border-radius: 12px;
  margin-bottom: 24px;
  background-color: #e9e9e9;
`;

export const ContactFormLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  margin-bottom: 30px;
`;

export const ContactFormInput = styled(Field)`
  width: 240px;
  height: 30px;
  font-size: 18px;
  font-weight: 400;
  border: 1px solid black;
  border-radius: 4px;
`;

export const ContactFormBtn = styled.button`
  font-size: 18px;
  padding: 4px 12px;
  border: 1px solid #e9e9e9;
  background-color: #fff;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    background-color: #e1e1e1;
  }
`;
