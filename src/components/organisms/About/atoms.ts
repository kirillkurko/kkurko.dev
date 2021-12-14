import styled from 'styled-components';
import Image from 'next/image';

export const Wrapper = styled.section`
  width: 100vw;
  height: 100vh !important;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 90% !important;
`;

export const PhoneImage = styled(Image)`
  position: absolute !important;
  top: -200px !important;
  left: -100px;
  transform: rotate(-32deg);
  z-index: 10 !important;
`;

export const Text = styled.h1`
  font-size: 20rem;
  margin: 0;
  position: absolute;
  text-transform: uppercase;
  top: 25%;
`;
