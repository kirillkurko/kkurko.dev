import Image from 'next/image';
import { Wrapper } from './atoms';

type Props = {
  src: string;
  alt: string;
  priority?: boolean;
  circleSize: number;
  imageSize: number;
};

function Circle({
  src,
  alt,
  priority = false,
  circleSize,
  imageSize,
}: Props): JSX.Element {
  return (
    <Wrapper size={circleSize}>
      <Image
        src={src}
        priority={priority}
        alt={alt}
        width={imageSize}
        height={imageSize}
        layout={'responsive'}
      />
    </Wrapper>
  );
}

export default Circle;
