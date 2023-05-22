import { useDispatch } from 'react-redux';
import { Formik, Field, Form } from 'formik';

import { register } from 'redux/auth/operations';

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
        <Form>
          <label htmlFor="name">
            Username
            <Field type="text" name="name" id="name" required />
          </label>
          <label htmlFor="email">
            Email
            <Field type="email" name="email" id="email" required />
          </label>
          <label htmlFor="password">
            Password
            <Field type="password" name="password" id="password" required />
          </label>
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </>
  );
};

export default RegisterForm;
