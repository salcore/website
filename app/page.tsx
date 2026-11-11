import type { ReactNode } from "react";
import Icon from "./components/Icon";
import Brand from "./components/Brand";
import Header from "./components/Header";
import HeroCarousel from "./components/HeroCarousel";
import DomainTabs from "./components/DomainTabs";
import {
  audience,
  domains,
  mission,
  navigation,
  prerequisites,
  vision,
} from "./data";

function Heading({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="section-heading">
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
}

function Team({ title, count }: { title: string; count: number }) {
  return (
    <section className="team container">
      <Heading title={title}>
        The individuals behind SalCore AI — building, researching, and
        engineering together.
      </Heading>
      <div className="team-grid">
        {Array.from({ length: count }, (_, index) => (
          <article className="member" key={index}>
            <div className="portrait" aria-hidden="true" />
            <h3>Member 1</h3>
            <p>Role / Specialization</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function NumberedCard({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: readonly string[];
}) {
  return (
    <article className="numbered-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <ol>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    </article>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main id="home">
        <HeroCarousel />
        <section id="about" className="about section">
          <div className="container">
            <Heading title="Who we are">
              SalCore AI is a structured technical community at the University
              of Salford, dedicated to
              <br className="desktop-break" /> building real, end-to-end AI
              systems through collaborative development.
            </Heading>
            <div className="principles">
              {(
                [
                  [
                    "hammer",
                    "We build and iterate",
                    "Build real systems through collaborative, hands-on development.",
                  ],
                  [
                    "flask",
                    "We explore research",
                    "Turn research into practical experiments and working implementations.",
                  ],
                  [
                    "book",
                    "We uphold engineering discipline",
                    "Practise version control, experimentation, and clear documentation.",
                  ],
                ] as const
              ).map(([icon, title, text]) => (
                <article key={title}>
                  <span className="principle-icon" aria-hidden="true">
                    <Icon name={icon} size={32} />
                  </span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <div className="purpose-grid" id="mission">
              {(
                [
                  [
                    "Mission",
                    "Cultivate a project-driven AI engineering community that enables students to grow into confident, technically capable practitioners.",
                    mission,
                  ],
                  [
                    "Vision",
                    "Establish SalCore AI as a recognised hub for applied AI engineering at the University of Salford — and beyond.",
                    vision,
                  ],
                ] as const
              ).map(([title, text, items]) => (
                <article className="purpose-card" key={title}>
                  <h2>{title}</h2>
                  <p>{text}</p>
                  <ul>
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="domains" className="domains section">
          <div className="container">
            <Heading title="Engineering Domains">
              Members develop depth in one or more structured domains. Explore
              each to understand what
              <br className="desktop-break" /> you can specialise in.
            </Heading>
            <DomainTabs />
          </div>
        </section>
        <div className="people section">
          <Team title="Meet the Team" count={8} />
        </div>
        <section id="join" className="join section">
          <div className="container">
            <Heading title="Who is Salcore AI for?">
              Designed for students who are serious about building. Check if you
              belong here.
            </Heading>
            <div className="join-cards">
              <NumberedCard
                title="You belong here if you..."
                description="SalCore AI is for driven students who want structured growth."
                items={audience}
              />
              <NumberedCard
                title="Prerequisites"
                description="You don’t need to be an expert. You need the right mindset."
                items={prerequisites}
              />
            </div>
            <a
              className="button join-button"
              href="mailto:salcoreai@salford.ac.uk?subject=Join%20Salcore%20AI"
            >
              Join Salcore AI <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>
      </main>
      <footer>
        <div className="container footer-grid">
          <div className="footer-brand">
            <Brand />
            <p>
              The AI Processing Unit of UoS. Building real systems. Cultivating
              industry-ready engineers.
            </p>
          </div>
          <div>
            <h3>Navigate</h3>
            {navigation.map(([name, href]) => (
              <a key={name} href={href}>
                {name}
              </a>
            ))}
          </div>
          <div>
            <h3>Domains</h3>
            {domains.map(({ name }) => (
              <a key={name} href="#domains">
                {name}
              </a>
            ))}
          </div>
          <div>
            <h3>Connect</h3>
            <a href="mailto:salcoreai@salford.ac.uk">salcoreai@salford.ac.uk</a>
            <a href="https://github.com/salcoreai">github.com/salcoreai</a>
          </div>
        </div>
        <div className="container copyright">
          © 2026 Salcore AI — University of Salford. All rights reserved.
        </div>
      </footer>
    </>
  );
}
