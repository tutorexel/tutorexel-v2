import { createImageUrlBuilder } from '@sanity/image-url';
import { client } from './client';

const builder = createImageUrlBuilder(client);

export function urlForImage(source: any) {
  if (!source) return null;
  if (typeof source === 'string') {
    return {
      auto: () => ({ fit: () => ({ url: () => source }), url: () => source }),
      fit: () => ({ url: () => source }),
      url: () => source,
    };
  }
  if (typeof source.url === 'string') {
    return {
      auto: () => ({ fit: () => ({ url: () => source.url }), url: () => source.url }),
      fit: () => ({ url: () => source.url }),
      url: () => source.url,
    };
  }
  if (typeof source.source_url === 'string') {
    return {
      auto: () => ({ fit: () => ({ url: () => source.source_url }), url: () => source.source_url }),
      fit: () => ({ url: () => source.source_url }),
      url: () => source.source_url,
    };
  }
  try {
    return builder.image(source);
  } catch {
    return null;
  }
}

export function getPostImageUrl(
  mainImage: any,
  imageUrl?: string,
  fallback: string = '/images/blog/blog1.jpg'
): string {
  if (typeof mainImage === 'string' && mainImage.length > 0) {
    return mainImage;
  }
  if (mainImage && typeof mainImage.url === 'string' && mainImage.url.length > 0) {
    return mainImage.url;
  }
  if (mainImage && typeof mainImage.source_url === 'string' && mainImage.source_url.length > 0) {
    return mainImage.source_url;
  }
  if (mainImage && mainImage.asset && mainImage.asset._ref) {
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
