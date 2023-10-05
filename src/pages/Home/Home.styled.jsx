import styled from 'styled-components';

export const HomePage = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 24px;
  margin: 24px auto 0;

  @media (min-width: 768px) {
    border-radius: 60px;
    margin-top: 60px;
  }

  @media (min-width: 1280px) {
    width: 1000px;
  }
`;

export const HomePageContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const PhoneBook = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: 24px;
  margin: 0 auto;

  @media (min-width: 768px) {
    border-radius: 60px;
    width: 100%;
    height: 100%;
  }
`;

export const PhoneBookWrapper = styled.div`
  text-align: center;
  padding: 12px;
`;

export const PhoneBookTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 12px;

  @media (max-width: 767px) {
    text-align: center;
    margin-bottom: 4px;
  }

  @media (min-width: 768px) {
    border-radius: 60px;
    font-size: 52px;
  }

  @media (min-width: 1280px) {
    font-size: 64px;
  }
`;

export const PhoneBookDescr = styled.p`
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 16px;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 24px;
  }

  @media (min-width: 1280px) {
    font-size: 28px;
  }
`;

export const PhoneBookImage = styled.img`
  width: 100%;
`;
