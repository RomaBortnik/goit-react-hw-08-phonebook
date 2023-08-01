import styled from 'styled-components';

export const Contact = styled.li`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  padding: 4px 12px;
  background-color: rgb(187, 192, 192, 0.1);
  border-radius: 12px;

  @media (max-width: 767px) {
    &:not(:last-of-type) {
      margin-bottom: 12px;
    }
  }

  @media (min-width: 768px) {
    font-size: 16px;
    padding: 8px 12px;
  }

  @media (min-width: 1280px) {
    font-size: 18px;
  }
`;

export const ContactBtn = styled.button`
  font-size: 14px;
  padding: 8px 16px;
  cursor: pointer;
  margin-left: auto;
  color: #000;
  border: none;
  border-radius: 12px;
  background-image: linear-gradient(
    to right,
    rgb(173, 243, 222),
    rgb(173, 243, 237)
  );
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
`;
