import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Table Talker — Pindah ke Website Baru" },
      {
        name: "description",
        content: "Website lama Table Talker sudah tidak dapat digunakan. Kunjungi website baru kami.",
      },
      { property: "og:title", content: "Table Talker — Pindah ke Website Baru" },
      {
        property: "og:description",
        content: "Website lama sudah tidak dapat digunakan. Kunjungi website baru kami.",
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="landing-shell">
      <div className="noise" aria-hidden="true" />
      <div className="ambient ambient-cyan" aria-hidden="true" />
      <div className="ambient ambient-magenta" aria-hidden="true" />

      <header className="site-header" aria-label="Header">
        <a className="brand" href="#main-content" aria-label="Table Talker, ke konten utama">
          <span className="brand-mark" aria-hidden="true">TT</span>
          <span>TABLE TALKER</span>
        </a>
        <span className="status-pill"><span className="status-dot" aria-hidden="true" /> OFFLINE NOTICE</span>
      </header>

      <main id="main-content" className="landing-main">
        <section className="hero" aria-labelledby="page-title">
          <div className="eyebrow"><span aria-hidden="true">✦</span> A QUICK UPDATE</div>
          <h1 id="page-title">Waktunya<br /><span>pindah.</span></h1>
          <div className="hero-copy">
            <p>Sorry gais, web ini udah gabisa dipake lagi ya. pake yang baru aja.</p>
            <p className="copy-muted">Semua aktivitas sekarang berlanjut di tempat baru.</p>
          </div>
          <a className="primary-cta" href="https://lihatmeja.com" target="_blank" rel="noopener noreferrer" aria-label="KLIK LINK INI, buka lihatmeja.com di tab baru">
            <span>KLIK LINK INI</span>
            <ArrowUpRight aria-hidden="true" />
          </a>
          <p className="cta-note"><ExternalLink aria-hidden="true" /> Membuka website baru di tab baru</p>
        </section>

        <aside className="notice-card" aria-label="Informasi perpindahan website">
          <div className="card-topline"><span className="card-label">REDIRECT / 001</span><span className="card-arrow" aria-hidden="true">↗</span></div>
          <div className="card-divider" />
          <p className="card-heading">New home,<br /><em>same energy.</em></p>
          <p className="card-body">Simpan link barunya supaya nggak nyasar lagi.</p>
          <div className="card-orbit" aria-hidden="true"><span /><span /><span /></div>
          <div className="card-url">lihatmeja.com</div>
        </aside>
      </main>

      <footer className="site-footer">
        <span>#Marko</span>
        <span className="footer-line" aria-hidden="true" />
        <span>XDIRGA LABS.</span>
      </footer>
    </div>
  );
}
