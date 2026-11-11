"use client";

import { useState } from "react";
import Brand from "./Brand";
import Icon from "./Icon";
import { navigation } from "../data";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="header-inner">
        <Brand />
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="navigation"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? "×" : <Icon name="menu" />}
        </button>
        <nav
          id="navigation"
          className={open ? "navigation open" : "navigation"}
          aria-label="Main navigation"
        >
          {navigation.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)}>
              {label}
              {label === "Domains" && <Icon name="chevron" size={18} />}
            </a>
          ))}
          <a
            className="button"
            href="mailto:salcoreai@salford.ac.uk?subject=Join%20Salcore%20AI"
          >
            Join Us
          </a>
        </nav>
      </div>
    </header>
  );
}
