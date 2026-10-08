import type { ReactNode } from "react";
import { Tools } from "./tools";
import { NAV, UTILITY, FOOTER, SOURCE, CAPTURED } from "../content";

/**
 * The shell, after IRS.gov's: a thin banner, a dark-blue brand bar with
 * utility links, a primary navigation row with search, a breadcrumb, the
 * page (with a left navigation on inner pages), and a footer of link
 * columns. The reference's banner says "An official website of the United
 * States government"; this one says what this is instead.
 */
export function Page({ current, crumbs, side, sideTitle, children }: { current: string; crumbs?: string[]; side?: string[]; sideTitle?: string; children: ReactNode }) {
  return (
    <>
      <a className="skip" href="#content">Skip to content</a>
      <Tools />
      <aside className="gov" aria-label="About this site"><p>A layout study by GIFcommit of three pages of IRS.gov. <strong>Not a government website</strong>; nothing here signs in or pays.</p></aside>
      <header className="brand">
        <div className="wrap brand__row">
          <a className="wordmark" href="./index.html"><span className="wordmark__mark" aria-hidden="true">G</span>GIFcommit</a>
          <ul className="utility">{UTILITY.map((u) => <li key={u}><span>{u}</span></li>)}</ul>
        </div>
        <nav className="nav" aria-label="Primary">
          <div className="wrap nav__row">
            <ul>{NAV.map(([label, href]) => <li key={label}>{href === "#" ? <span className="nav__off" title="Not part of this study">{label}</span> : <a href={href} aria-current={href.endsWith(current) ? "page" : undefined}>{label}</a>}</li>)}</ul>
            <form className="search" role="search" onSubmit={(e) => e.preventDefault()}><label htmlFor="q" className="visually-hidden">Search</label><input id="q" type="search" placeholder="Search" /><button type="submit" aria-label="Search">⌕</button></form>
          </div>
        </nav>
      </header>
      {crumbs && (
        <nav className="wrap crumbs" aria-label="Breadcrumb"><ol>{crumbs.map((c, i) => <li key={c}>{i === 0 ? <a href="./index.html">{c}</a> : i < crumbs.length - 1 ? <span>{c}</span> : <span aria-current="page">{c}</span>}</li>)}</ol></nav>
      )}
      <div className={`wrap page${side ? " page--side" : ""}`}>
        {side && (
          <nav className="sidenav" aria-label={sideTitle ?? "Section"}>
            <ul>{side.map((s) => <li key={s}><span className={s === sideTitle ? "is-here" : undefined}>{s}</span></li>)}</ul>
          </nav>
        )}
        <main id="content">{children}</main>
      </div>
      <footer className="foot">
        <div className="wrap foot__cols">
          {FOOTER.map(([title, items]) => <section key={title} aria-labelledby={`f-${title}`}><h2 id={`f-${title}`}>{title}</h2><ul>{items.map((i) => <li key={i}>{i}</li>)}</ul></section>)}
        </div>
        <div className="wrap colophon">
          <p>
            A layout study of three pages of <a href={SOURCE.home.url}>IRS.gov</a> — the <a href={SOURCE.home.url}>home page</a>,{" "}
            <a href={SOURCE.payments.url}>Make a payment</a> and <a href={SOURCE.account.url}>Online account for individuals</a> — as captured on {CAPTURED}.
            The text is the Internal Revenue Service's, a work of the United States government in the public domain (17 U.S.C. §105), shortened and
            rearranged; the pages say when the IRS last reviewed them. GIFcommit is a layout-study brand, not an agency: this is not a government
            website, no control here signs anyone in or makes a payment, and nothing of the IRS's design, seal or marks is reproduced. Built with{" "}
            <a href="https://github.com/gregoryedgerton/golden-grids">Golden Grids</a> · <a href="https://www.npmjs.com/package/@gifcommit/golden-grids">npm</a> ·{" "}
            <a href="https://gregoryedgerton.github.io/golden-grids/">generator</a>.
          </p>
        </div>
      </footer>
    </>
  );
}
