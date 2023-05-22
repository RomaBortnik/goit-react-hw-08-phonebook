import { useDispatch } from 'react-redux';
import { Formik } from 'formik';

import { register } from 'redux/auth/operations';
import {
  StyledRegisterForm,
  RegisterFormInput,
  RegisterFormLabel,
  RegisterFormBtn,
} from './RegisterForm.styled';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const { name, email, password } = values;
    dispatch(register({ name, email, password }));
    resetForm();
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <StyledRegisterForm>
          <RegisterFormLabel htmlFor="name">
            Username
            <RegisterFormInput type="text" name="name" id="name" required />
          </RegisterFormLabel>
          <RegisterFormLabel htmlFor="email">
            Email
            <RegisterFormInput type="email" name="email" id="email" required />
          </RegisterFormLabel>
          <RegisterFormLabel htmlFor="password">
            Password
            <RegisterFormInput
              type="password"
              name="password"
              id="password"
              required
            />
          </RegisterFormLabel>
          <RegisterFormBtn type="submit">Register</RegisterFormBtn>
        </StyledRegisterForm>
      </Formik>
    </>
  );
};

export default RegisterForm;
