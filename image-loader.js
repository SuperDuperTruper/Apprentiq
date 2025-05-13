export default function customImageLoader({ src, width, quality }) {
  const baseUrl = process.env.NODE_ENV === 'production' 
    ? 'https://SuperDuperTruper.github.io/apprentiq' 
    : '';
  return `${baseUrl}${src}?w=${width}&q=${quality || 75}`;
} 