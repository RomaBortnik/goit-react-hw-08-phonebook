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
  display: flex;
  justify-content: space-between;
`;

export const PhoneBook = styled.img`
  width: 100%;
  // height: 100%;
  object-fit: cover;
  border-radius: 24px;
  margin: 0;

  @media (min-width: 768px) {
    border-radius: 60px;
  }
`;

export const PhoneBookWrapper = styled.div`
  position: relative;
  width: 50%;
  margin: 0;
`;

export const PhoneBookBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
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

  @media (min-width: 768px) {
    width: 100%;
  }
`;
