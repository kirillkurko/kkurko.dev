import styled from 'styled-components';

export const Link = styled.a<{ isActive: boolean }>`
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
  cursor: pointer;
  padding: 0 10px;
`;
