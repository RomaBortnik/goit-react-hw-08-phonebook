import styled from 'styled-components';
import { Form, Field } from 'formik';

export const StyledContactForm = styled(Form)`
  width: 400px;
  padding: 12px 16px;
  border-radius: 12px;
  margin-bottom: 24px;
  background-color: rgb(187, 192, 192, 0.1);
`;

export const ContactFormLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  margin-bottom: 40px;
  cursor: pointer;
`;

export const ContactFormInput = styled(Field)`
  margin-top: 4px;
  width: 100%;
  height: 30px;
  font-size: 18px;
  font-weight: 400;
  border: none;
  outline: none;
  border-radius: 4px;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
`;

export const ContactFormBtn = styled.button`
  display: flex;
  font-size: 18px;
  line-height: 1.5;
  margin-left: auto;
  padding: 4px 36px;
  color: #000;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 12px;
  background-image: linear-gradient(
    to right,
    rgb(173, 243, 222),
    rgb(173, 243, 237)
  );
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
`;
