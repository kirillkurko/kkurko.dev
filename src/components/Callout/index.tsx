import { Blockquote } from '@components/Blog/atoms';
import styled from 'styled-components';
import { ThemeProps } from '@theme/theme';

const colorCallout = ({ theme }: ThemeProps) => theme.colors.callout;

const Wrapper = styled.div`
  padding: 1.5rem;
  border-radius: 1rem;
  background-color: ${colorCallout};
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const Icon = styled.span`
  font-size: 1.5rem;
  margin: 0 1rem 0 0;
`;

interface Props {
  text: string;
}

const Callout = ({ text }: Props) => {
  return (
    <Wrapper>
      <Icon>💡</Icon>
      <Blockquote style={{ opacity: 0.6 }}>{text}</Blockquote>
    </Wrapper>
  );
};

export default Callout;
