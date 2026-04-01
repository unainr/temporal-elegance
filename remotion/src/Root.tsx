import { Composition } from "remotion";
import { HeroVideo } from "./HeroVideo";

export const RemotionRoot = () => (
  <Composition
    id="hero"
    component={HeroVideo}
    durationInFrames={300}
    fps={30}
    width={1920}
    height={1080}
  />
);
