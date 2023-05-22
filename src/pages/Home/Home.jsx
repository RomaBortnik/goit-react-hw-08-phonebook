import {
  HomePage,
  HomePageContainer,
  PhoneBook,
  PhoneBookWrapper,
  PhoneBookTitle,
  PhoneBookBox,
  PhoneBookDescr,
} from './Home.styled';
import phoneBook from '../../images/phoneBook.jpg';
import phoneImage from '../../images/phoneImage.jpg';

const Home = () => {
  return (
    <>
      <HomePage>
        <HomePageContainer>
          <PhoneBookWrapper>
            <PhoneBookBox>
              <PhoneBookTitle>Phonebook</PhoneBookTitle>
              <PhoneBookDescr>
                The whole library is in your phone
              </PhoneBookDescr>
              <img src={phoneImage} alt="" />
            </PhoneBookBox>
          </PhoneBookWrapper>

          <PhoneBookWrapper>
            <PhoneBook src={phoneBook} alt="" />
          </PhoneBookWrapper>
        </HomePageContainer>
      </HomePage>
    </>
  );
};

export default Home;
