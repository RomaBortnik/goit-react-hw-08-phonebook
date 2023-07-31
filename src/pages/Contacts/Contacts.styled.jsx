import styled from 'styled-components';

export const ContactsTitle = styled.h2`
  font-size: 24px;
  line-height: 1.5;
  margin-bottom: 12px;

  @media (min-width: 768px) {
    font-size: 32px;
    margin-bottom: 16px;
  }
`;

export const ContactsWrapper = styled.div`
  margin-top: 12px;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const ContactsContainer = styled.div`
  // width: 100%;
  // display: flex;
  // flex-direction: column;
`;
