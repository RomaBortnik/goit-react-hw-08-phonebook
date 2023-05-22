import { StyledLogin, StyledRegister } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <div>
      <StyledRegister to="/register">Register</StyledRegister>
      <StyledLogin to="/login">Log In</StyledLogin>
    </div>
  );
};

export default AuthNav;
