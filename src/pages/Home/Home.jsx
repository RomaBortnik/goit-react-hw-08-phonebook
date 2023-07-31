import {
  HomePage,
  HomePageContainer,
  PhoneBook,
  PhoneBookWrapper,
  PhoneBookTitle,
  PhoneBookBox,
  PhoneBookDescr,
  PhoneBookImage,
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
              <PhoneBookImage src={phoneImage} alt=""></PhoneBookImage>
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
