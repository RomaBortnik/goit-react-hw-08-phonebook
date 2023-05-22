import {
  UserMenuContainer,
  UserMenuText,
  UserMenuBtn,
} from './UserMenu.styled';

const UserMenu = () => {
  return (
    <UserMenuContainer>
      <UserMenuText>Welcome, user</UserMenuText>
      <UserMenuBtn type="button">Logout</UserMenuBtn>
    </UserMenuContainer>
  );
};

export default UserMenu;
