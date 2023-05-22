import { useAuth } from 'hooks/useAuth';
import { useMemo } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import RegisterForm from 'components/RegisterForm';

const Register = () => {
  const { error } = useAuth();
  useMemo(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);
  return (
    <>
      <RegisterForm />
      <ToastContainer autoClose={1500} theme="dark" />
    </>
  );
};

export default Register;
