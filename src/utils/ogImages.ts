import ogImage from '../app/opengraph-image.png';

export const OG_IMAGE = {
  url: ogImage.src,
  width: ogImage.width,
  height: ogImage.height,
};

const DEFAULT_OG_IMAGE_SIZE = {
  WIDTH: 1920,
  HEIGHT: 1080,
};

export function getBlogPostOpengraphImage(slug: string) {
  return {
    url: `/images/${slug}/opengraph-image.png`,
    width: DEFAULT_OG_IMAGE_SIZE.WIDTH,
    height: DEFAULT_OG_IMAGE_SIZE.HEIGHT,
  };
}
