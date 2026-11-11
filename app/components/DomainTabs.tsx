"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import Icon from "./Icon";
import { domains } from "../data";

export default function DomainTabs() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const domain = domains[active];
  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number | undefined;
    if (event.key === "ArrowRight") next = (index + 1) % domains.length;
    if (event.key === "ArrowLeft")
      next = (index - 1 + domains.length) % domains.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = domains.length - 1;
    if (next === undefined) return;
    event.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }
  return (
    <div className="domain-browser">
      <div className="tabs" role="tablist" aria-label="Engineering domains">
        {domains.map(({ name, icon }, index) => (
          <button
            key={name}
            ref={(node) => {
              tabs.current[index] = node;
            }}
            role="tab"
            id={`tab-${index}`}
            aria-controls="domain-panel"
            aria-selected={active === index}
            aria-label={name}
            tabIndex={active === index ? 0 : -1}
            onClick={() => setActive(index)}
            onKeyDown={(event) => onKeyDown(event, index)}
          >
            <span className="tab-icon" aria-hidden="true">
              <Icon name={icon} size={icon === "eye" ? 35 : 24} />
            </span>
            <span className="tab-label">{name}</span>
          </button>
        ))}
      </div>
      <div
        className="domain-panel"
        id="domain-panel"
        role="tabpanel"
        aria-labelledby={`tab-${active}`}
        tabIndex={0}
      >
        <h3>{domain.title}</h3>
        <p>{domain.description}</p>
        <ul className="topics">
          {domain.topics.map((topic, index) => (
            <li key={topic}>
              <span aria-hidden="true">
                <Icon
                  size={index === 0 ? 26 : 32}
                  name={
                    (
                      [
                        "architecture",
                        "settings",
                        "cloud",
                        "plug",
                        "backend",
                        "chart",
                      ] as const
                    )[index]
                  }
                />
              </span>
              {topic}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
