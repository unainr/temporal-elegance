import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  AbsoluteFill,
  Img,
  staticFile,
} from "remotion";

export const HeroVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // Slow cinematic zoom - from 1.0 to 1.25 over the full duration
  const scale = interpolate(frame, [0, durationInFrames], [1.0, 1.3], {
    extrapolateRight: "clamp",
  });

  // Gentle pan - subtle horizontal drift
  const translateX = interpolate(frame, [0, durationInFrames], [0, -40], {
    extrapolateRight: "clamp",
  });

  // Subtle vertical drift
  const translateY = interpolate(frame, [0, durationInFrames], [10, -20], {
    extrapolateRight: "clamp",
  });

  // Pulsating light overlay - simulates a breathing light effect
  const lightPulse = interpolate(
    frame,
    [0, 75, 150, 225, 300],
    [0, 0.08, 0, 0.06, 0],
    { extrapolateRight: "clamp" }
  );

  // Subtle vignette animation
  const vignetteIntensity = interpolate(
    frame,
    [0, 150, 300],
    [0.7, 0.5, 0.7],
    { extrapolateRight: "clamp" }
  );

  // Golden shimmer sweep across the image
  const shimmerX = interpolate(frame, [0, durationInFrames], [-100, 200], {
    extrapolateRight: "clamp",
  });

  // Floating golden particles
  const particles = Array.from({ length: 12 }, (_, i) => {
    const speed = 0.3 + (i % 5) * 0.15;
    const startX = (i * 173) % 1920;
    const startY = 1100 + (i * 67) % 200;
    const y = startY - frame * speed * 2;
    const x = startX + Math.sin(frame * 0.02 + i) * 30;
    const opacity = interpolate(
      y,
      [0, 400, 800, 1100],
      [0, 0.4, 0.6, 0],
      { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );
    const size = 1.5 + (i % 3) * 1;
    return { x, y, opacity, size };
  });

  return (
    <AbsoluteFill style={{ backgroundColor: "#050505" }}>
      {/* Main watch image with Ken Burns effect */}
      <AbsoluteFill
        style={{
          transform: `scale(${scale}) translate(${translateX}px, ${translateY}px)`,
          willChange: "transform",
        }}
      >
        <Img
          src={staticFile("images/hero-watch.jpg")}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </AbsoluteFill>

      {/* Golden light sweep / shimmer */}
      <AbsoluteFill
        style={{
          background: `linear-gradient(105deg, 
            transparent ${shimmerX - 15}%, 
            rgba(212, 175, 55, 0.12) ${shimmerX}%, 
            rgba(212, 175, 55, 0.04) ${shimmerX + 8}%, 
            transparent ${shimmerX + 15}%)`,
          mixBlendMode: "screen",
        }}
      />

      {/* Breathing warm light overlay */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(ellipse at 50% 45%, rgba(212, 175, 55, ${lightPulse}) 0%, transparent 60%)`,
          mixBlendMode: "screen",
        }}
      />

      {/* Vignette */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(5, 5, 5, ${vignetteIntensity}) 100%)`,
        }}
      />

      {/* Bottom gradient for text readability */}
      <AbsoluteFill
        style={{
          background: "linear-gradient(to bottom, transparent 40%, rgba(5,5,5,0.6) 70%, rgba(5,5,5,0.95) 100%)",
        }}
      />

      {/* Floating golden dust particles */}
      {particles.map((p, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            backgroundColor: "rgba(212, 175, 55, 0.8)",
            opacity: p.opacity,
            boxShadow: `0 0 ${p.size * 3}px rgba(212, 175, 55, 0.4)`,
          }}
        />
      ))}
    </AbsoluteFill>
  );
};
