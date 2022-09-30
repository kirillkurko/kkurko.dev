import styled, { css } from 'styled-components';

export const Link = styled.a<{ isActive: boolean }>`
  cursor: pointer;
  padding: 0.3rem 0.75rem;
  border-radius: 8px;

  &:hover {
    background-color: rgb(234, 234, 234, 0.1);
  }

  p {
    margin: 0;
    color: rgb(255, 255, 255, 0.6);
  }

  ${({ isActive }) =>
    isActive &&
    css`
      font-weight: bold;

      p {
        color: #fff;
      }
    `}
`;
