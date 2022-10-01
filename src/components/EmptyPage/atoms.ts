import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 2rem;

  h1 {
    margin-bottom: 0;
  }
`;

export const LinkButton = styled.a`
  color: #fff;
  font-weight: bold;
  border-radius: 8px;
  text-align: center;
  background-color: rgb(34, 34, 34);
  padding: 1rem 4rem;
  margin: 1rem auto 0 auto;
  cursor: pointer;
`;
