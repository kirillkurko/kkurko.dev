import styled from 'styled-components';
import { Paragraph } from '@components/atoms';

export const Wrapper = styled.li`
  margin-bottom: 50px;
`;

export const PublishDate = styled(Paragraph)`
  margin-top: 0;
  margin-bottom: 12px;
  opacity: 0.65;
  font-family: ${({ theme }) => theme.fontFamilies.primary};
  font-size: 1rem;
`;
