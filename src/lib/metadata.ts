import type { Metadata } from 'next';

const SITE_URL = 'https://new.oceanbluestream.com';
const DEFAULT_IMAGE = '/logo.jpg';

type CreateMetaOpts = {
  title?: string;
  description?: string;
  image?: string;
  pathname?: string;
};

export function createMetadata({
  title = 'Ocean+',
  description = 'The place to watch all of your favorite Vyond content, anywhere, anytime for free!',
  image = DEFAULT_IMAGE,
  pathname = '/',
}: CreateMetaOpts): Metadata {
  const url = `${SITE_URL}${pathname}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      url,
      title,
      description,
      type: 'website',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

