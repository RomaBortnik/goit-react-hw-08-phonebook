import styled from 'styled-components';

export const Contact = styled.li`
  flex-basis: calc((100% / 3 - 36px));
  margin-left: 12px;
  margin-top: 12px;
  gap: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 400;
  font-size: 20px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  background-color: rgb(187, 192, 192, 0.1);
  border-radius: 12px;
`;

export const ContactBtn = styled.button`
  font-size: 14px;
  padding: 8px 16px;
  cursor: pointer;
  margin-left: 12px;
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
