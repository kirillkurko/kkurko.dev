import styled from 'styled-components';

type Props = {
  size: number;
};

export const Wrapper = styled.div<Props>`
  width: ${({ size }: Props) => `${size}%`};
  border-radius: 50%;
  background-color: rgba(5, 50, 99, 0.3);

  img {
    min-height: 85% !important;
    min-width: 85% !important;
    max-height: 85% !important;
    max-width: 85% !important;
    top: -25px !important;
  }
`;
