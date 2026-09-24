import { createImageUrlBuilder } from '@sanity/image-url';
import { client } from './client';

const builder = createImageUrlBuilder(client);

export function urlForImage(source: any) {
  if (!source) return null;
  return builder.image(source);
}

export function getPostImageUrl(
  mainImage: any,
  imageUrl?: string,
  fallback: string = '/images/blog/blog1.jpg'
): string {
  if (mainImage && mainImage.asset) {
    try {
      return builder.image(mainImage).auto('format').fit('max').url();
    } catch {
      // fallback if builder fails
    }
  }
  if (imageUrl && imageUrl.length > 0) {
    return imageUrl;
  }
  return fallback;
}
