import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoginForm from 'components/LoginForm';
import { useAuth } from 'hooks/useAuth';
import { useMemo } from 'react';

const Login = () => {
  const { error } = useAuth();

  useMemo(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <>
      <LoginForm></LoginForm>
      <ToastContainer autoClose={1500} theme="dark" />
    </>
  );
};

export default Login;
