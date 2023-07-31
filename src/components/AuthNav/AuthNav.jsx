import { StyledLogin, StyledRegister, AuthContainer } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <AuthContainer>
      <StyledRegister to="/register">Register</StyledRegister>
      <StyledLogin to="/login">Log In</StyledLogin>
    </AuthContainer>
  );
};

export default AuthNav;
