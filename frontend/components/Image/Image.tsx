/* eslint-disable react/jsx-props-no-spreading */
import {useState} from 'react';
import NextImage from 'next/image';
import clsx from 'clsx';
import {LoadingSpinner} from '@nago/components/LoadingSpinner';
import {AspectRatio} from "@nago/components/aspect-ratio"

export type ImageProps = {
  className?: string;
  src: string;
  sizes?: string;
  width?: number | string;
  height?: number | string;
  ratio?: number;
  alt: string;
  style?: JSX.IntrinsicElements['img']['style']
  fill?: boolean;
  priority?: boolean;
}

export function Image(props: ImageProps) {
  const [isLoading, setLoading] = useState(true);

  const {
    className = '',
    src,
    alt,
    sizes,
    width,
    height,
    ratio,
    style,
    fill = false,
    priority,
  } = props;

  return (
    <div
      className={clsx(
        'overflow-hidden group relative h-full',
        className && className,
      )}
      style={style}
    >
      <NextImage
        src={src}
        alt={alt}
        width={width as number}
        height={height as number}
        sizes={sizes}
        className={clsx(
          'group-hover:opacity-75 object-cover',
          'duration-700 ease-in-out',
          isLoading ? 'opacity-0' : 'opacity-100'
        )}
        fill={fill}
        onLoadingComplete={() => setLoading(false)}
        priority={priority}
      />
    </div>
  );
}