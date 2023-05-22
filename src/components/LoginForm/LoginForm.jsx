import { useDispatch } from 'react-redux';
import { Formik, Field, Form } from 'formik';

import { logIn } from 'redux/auth/operations';

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
        <Form>
          <label htmlFor="email">
            Email
            <Field type="email" name="email" id="email" required />
          </label>
          <label htmlFor="password">
            Password
            <Field type="password" name="password" id="password" required />
          </label>
          <button type="submit">Log In</button>
        </Form>
      </Formik>
    </>
  );
};

export default LoginForm;
