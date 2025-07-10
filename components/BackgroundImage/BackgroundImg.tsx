import Image from 'next/image';
import background from '../../public/images/1a1e5e54fc5db5b17d192eaae3ceea165475f60e.jpg';

export default function Background({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <Image
        alt="Mountains"
        src={background}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
          zIndex: -1,
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  );
}
