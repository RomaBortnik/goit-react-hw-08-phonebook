import { useDispatch } from 'react-redux';
import { Formik } from 'formik';

import { logIn } from 'redux/auth/operations';
import {
  StyledLoginForm,
  LoginFormLabel,
  LoginFormInput,
  LoginFormBtn,
} from './LoginForm.styled';

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const { email, password } = values;
    dispatch(logIn({ email, password }));
    resetForm();
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <StyledLoginForm>
          <LoginFormLabel htmlFor="email">
            Email
            <LoginFormInput type="email" name="email" id="email" required />
          </LoginFormLabel>
          <LoginFormLabel htmlFor="password">
            Password
            <LoginFormInput
              type="password"
              name="password"
              id="password"
              required
            />
          </LoginFormLabel>
          <LoginFormBtn type="submit">Log In</LoginFormBtn>
        </StyledLoginForm>
      </Formik>
    </>
  );
};

export default LoginForm;
