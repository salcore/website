import Image from "next/image";

export default function Brand() {
  return (
    <a className="brand" href="#home" aria-label="Salcore AI home">
      <Image
        className="brand-mark"
        src="/figma/hero-imgSalcoreAiCircle1.png"
        alt=""
        width={43}
        height={43}
        loading="eager"
      />
      <span>Salcore AI</span>
    </a>
  );
}
