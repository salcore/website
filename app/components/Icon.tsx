import Image from "next/image";

// Original Figma exports. The nominal size preserves each icon's canvas geometry.
const assets = {
  arrowLeft: ["hero-imgFrame.svg", 25.2986],
  arrowRight: ["hero-imgFrame1.svg", 25.2986],
  server: ["domains-imgGroup.svg", 24],
  eye: ["domains-imgVision1.png", 35],
  brain: ["domains-imgGroup1.svg", 24],
  math: ["domains-imgSquareRootOfXMathematicalSigns1.png", 24],
  shield: ["domains-imgIconoirLearning.svg", 24],
  layers: ["hero-imgStack.svg", 24],
  hammer: ["about-imgGroup.svg", 32],
  flask: ["about-imgGroup1.svg", 32],
  book: ["about-imgGroup2.svg", 32],
  architecture: ["domains-imgEosIconsFileSystemOutlined.svg", 26],
  settings: ["domains-imgGroup2.svg", 32],
  cloud: ["domains-imgIconoirCloudUpload.svg", 32],
  plug: ["domains-imgIconoirSettings.svg", 32],
  backend: ["domains-imgGroup3.svg", 32],
  chart: ["domains-imgGroup4.svg", 32],
  chevron: ["hero-imgEssentialIcon.svg", 18],
  menu: ["mobileHero-imgIconIoniconsOutlineMenuOutline.svg", 24],
} as const;

export type IconName = keyof typeof assets;

export default function Icon({
  name,
  size = 24,
}: {
  name: IconName;
  size?: number;
}) {
  const [file, canvas] = assets[name];
  return (
    <span
      className={`icon icon-${name}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <span
        className="icon-canvas"
        style={{
          width: canvas,
          height: canvas,
          transform: `scale(${size / canvas})`,
        }}
      >
        {file.endsWith(".png") ? (
          <Image src={`/figma/${file}`} alt="" width={canvas} height={canvas} />
        ) : (
          <img src={`/figma/${file}`} alt="" />
        )}
      </span>
    </span>
  );
}
