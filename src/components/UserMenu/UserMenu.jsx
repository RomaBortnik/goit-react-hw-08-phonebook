import { useDispatch } from 'react-redux';

import { useAuth } from 'hooks/useAuth';
import { logOut } from 'redux/auth/operations';
import {
  UserMenuContainer,
  UserMenuText,
  UserMenuBtn,
} from './UserMenu.styled';

const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  return (
    <UserMenuContainer>
      <UserMenuText>Welcome, {user.name}</UserMenuText>
      <UserMenuBtn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </UserMenuBtn>
    </UserMenuContainer>
  );
};

export default UserMenu;
