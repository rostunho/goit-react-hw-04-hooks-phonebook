import styled from 'styled-components';

export const HeadTitle = styled.h1`
  display: block;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 20px 30px;
  width: 480px;

  font-size: 32px;
  line-height: 1;
  text-transform: uppercase;
  color: #fff;
  background-color: var(--accent-color);

  /* background-image: repeating-linear-gradient(
    to bottom,
    #37acee,
    #37acee 20px,
    #5fc5ff 20px,
    #5fc5ff 21px
  ); */
`;

export const Wrapper = styled.div`
  width: 480px;
  margin: 0 auto;
  border-radius: 25px 25px 0 0;
  overflow: hidden;
`;
