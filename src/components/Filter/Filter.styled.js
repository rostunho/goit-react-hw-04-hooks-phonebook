import styled from 'styled-components';

export const FilterInput = styled.input`
  display: block;
  box-sizing: border-box;
  padding-left: 15px;
  width: 100%;
  height: 50px;

  font-size: 25px;
  font-weight: 700;
  color: var(--text-dark-color);

  outline: none;
  border: 1px solid var(--border-color);
  border-radius: 10px;

  &::placeholder {
    font-size: 20px;
    font-weight: 700;
    color: var(--text-secondary-color);
  }
`;

export const FilterBox = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  padding: 15px 30px;
  width: 480px;
  height: 80px;

  background-color: #fff;
`;
