import styled from 'styled-components';

export const HomePage = styled.div`
  width: 1000px;
  height: 100%;
  background-color: #fff;
  border-radius: 60px;
  margin: 60px auto 0;
  padding: 4px;
`;

export const HomePageContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PhoneBook = styled.img`
  // min-width: calc(100% / 2);
  // height: 100%;
  object-fit: cover;
  border-radius: 60px;
  margin: 0;
`;

export const PhoneBookWrapper = styled.div`
  position: relative;
  min-width: calc(100% / 2 - 20px);
  margin: 0;
`;

export const PhoneBookBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
`;

export const PhoneBookTitle = styled.div`
  font-size: 60px;
  font-weight: 700;
  margin-bottom: 12px;
`;

export const PhoneBookDescr = styled.p`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 16px;

  // color: grey;
  text-transform: uppercase;
`;
