import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 2rem 0;

  @media (max-width: 1200px) {
    height: auto;
    overflow: auto;
  }
`;

export const BlobWrapper = styled.div`
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const TextBlock = styled.div``;
