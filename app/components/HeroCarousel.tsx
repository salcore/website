"use client";

import { useRef, useState } from "react";
import Icon from "./Icon";
import Image from "next/image";

// Only the first slide was supplied; additional slides reuse the page's copy.
const slides = [
  {
    title: (
      <>
        The AI Processing Unit
        <br className="desktop-break" /> of UoS
      </>
    ),
    description: (
      <>
        We build real systems, integrate research, and cultivate the
        <br className="desktop-break" /> next generation of industry-ready AI
        engineers.
      </>
    ),
  },
  {
    title: <>We build and iterate</>,
    description: (
      <>Build real systems through collaborative, hands-on development.</>
    ),
  },
  {
    title: <>We explore research</>,
    description: (
      <>Turn research into practical experiments and working implementations.</>
    ),
  },
];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const touchStart = useRef<number | null>(null);
  const move = (direction: number) =>
    setActive((index) => (index + direction + slides.length) % slides.length);

  return (
    <section
      className="hero"
      aria-label="Salcore AI highlights"
      aria-roledescription="carousel"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.target !== event.currentTarget) return;
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          move(event.key === "ArrowLeft" ? -1 : 1);
        }
      }}
      onTouchStart={(event) => {
        touchStart.current = event.touches[0].clientX;
      }}
      onTouchEnd={(event) => {
        if (touchStart.current === null) return;
        const distance = touchStart.current - event.changedTouches[0].clientX;
        if (Math.abs(distance) > 50) move(distance > 0 ? 1 : -1);
        touchStart.current = null;
      }}
      onTouchCancel={() => {
        touchStart.current = null;
      }}
    >
      <picture className="hero-photo" aria-hidden="true">
        <source
          media="(max-width: 800px)"
          srcSet="/figma/mobileHero-imgWhatsAppImage20260914At16073621.png"
        />
        <Image
          className="hero-photo-image"
          src="/figma/hero-imgWhatsAppImage20260914At16073621.png"
          alt=""
          width={1440}
          height={1080}
          loading="eager"
          sizes="100vw"
        />
      </picture>
      <div className="hero-content">
        <div
          key={active}
          className="hero-slide"
          role="group"
          aria-roledescription="slide"
          aria-label={`${active + 1} of ${slides.length}`}
          aria-live="polite"
          aria-atomic="true"
        >
          <h1>{slides[active].title}</h1>
          <p>{slides[active].description}</p>
        </div>
        <div className="hero-actions">
          <a className="button" href="#join">
            Get Started
          </a>
          <a className="button button-light" href="#domains">
            <Icon name="layers" /> Our Domains
          </a>
        </div>
      </div>
      <button
        className="carousel-arrow previous"
        aria-label="Previous slide"
        onClick={() => move(-1)}
      >
        <Icon name="arrowLeft" />
      </button>
      <button
        className="carousel-arrow next"
        aria-label="Next slide"
        onClick={() => move(1)}
      >
        <Icon name="arrowRight" />
      </button>
    </section>
  );
}
