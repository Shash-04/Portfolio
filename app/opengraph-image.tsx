import { ImageResponse } from 'next/server';

export const runtime = 'edge';
export const alt = 'Shashwat Vaish — Full-Stack Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0b1220',
          backgroundImage:
            'radial-gradient(circle at 25% 25%, rgba(34,211,238,0.25), transparent 50%), radial-gradient(circle at 75% 75%, rgba(14,165,233,0.25), transparent 50%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 88,
            fontWeight: 700,
            color: 'white',
            letterSpacing: -2,
          }}
        >
          Shashwat Vaish
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 24,
            fontSize: 36,
            fontWeight: 500,
            backgroundImage: 'linear-gradient(90deg, #22d3ee, #0ea5e9)',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Full-Stack Developer
        </div>
      </div>
    ),
    { ...size }
  );
}
