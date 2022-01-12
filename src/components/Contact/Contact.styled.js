import styled from 'styled-components';

export const Card = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 0 30px;
  width: 480px;
  height: 75px;

  background-color: #fff;
`;

export const Info = styled.div`
  margin-left: 30px;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: var(--text-dark-color);
`;

export const Number = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: var(--text-alt-color);
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;

  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: var(--border-color);
  cursor: pointer;
  border: none;

  &:hover,
  :focus {
    background-color: var(--hover-color);
  }
`;
