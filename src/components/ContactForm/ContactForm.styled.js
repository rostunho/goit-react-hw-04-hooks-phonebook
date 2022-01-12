import styled from 'styled-components';

export const Form = styled.form`
  width: 480px;
  margin: 0 auto 15px;
  background-color: #fff;
  border-radius: 0 0 25px 25px;
  overflow: hidden;
`;

export const Label = styled.label`
  display: block;
  margin-top: 15px;
  padding: 0 30px;

  font-size: 20px;
  font-weight: 500;
  color: var(--text-secondary-color);

  &:first-child {
    margin-top: 30px;
  }
`;

export const Input = styled.input`
  display: block;
  box-sizing: border-box;
  margin-top: 10px;
  padding-left: 15px;
  width: 100%;
  height: 50px;

  font-size: 25px;
  font-weight: 700;
  color: var(--text-dark-color);

  outline: none;
  border: 1px solid var(--border-color);
  border-radius: 10px;
`;

export const AddButton = styled.button`
  width: 100%;
  height: 50px;
  margin-top: 50px;

  font-size: 20px;
  font-weight: 700;
  color: #fff;

  border: none;
  cursor: pointer;
  background-color: var(--accent-color);

  &:hover,
  :focus {
    background-color: var(--hover-color);
  }
`;
