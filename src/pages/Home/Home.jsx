import {
  HomePage,
  HomePageContainer,
  PhoneBook,
  PhoneBookWrapper,
  PhoneBookTitle,
  PhoneBookDescr,
  PhoneBookImage,
} from './Home.styled';
import phoneBook from '../../images/phoneBook.jpg';
import phoneImage from '../../images/phoneImage.jpg';

const Home = () => {
  return (
    <HomePage>
      <HomePageContainer>
        <PhoneBookWrapper>
          <PhoneBookTitle>Phonebook</PhoneBookTitle>
          <PhoneBookDescr>The whole library is in your phone</PhoneBookDescr>
          <PhoneBookImage src={phoneImage} alt="Bookshelf"></PhoneBookImage>
        </PhoneBookWrapper>

        <PhoneBook src={phoneBook} alt="Online phonebook" />
      </HomePageContainer>
    </HomePage>
  );
};

export default Home;
