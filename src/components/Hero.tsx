import Image from "next/image";
import {
  FINAL_CTA_SECTION_ID,
  FORM_SECTION_ID,
  IMAGES,
  PHONE_DISPLAY,
  PHONE_HREF,
  SITE_NAME,
} from "@/lib/constants";

const TRUST_ITEMS = [
  "FDA-cleared TMS",
  "BrainsWay TMS",
  "Spravato®",
  "4 CT locations",
] as const;

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="apex-hero">
      <div className="apex-hero-atmosphere" aria-hidden>
        <svg
          className="apex-hero-network"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="apex-hero-network-lines" stroke="rgba(170, 210, 240, 0.18)" strokeWidth="0.9" fill="none">
            <path d="M80 120 L220 90 L340 180 L480 140 L620 210 L760 160 L920 230 L1080 180" />
            <path d="M140 280 L280 250 L400 320 L540 280 L680 350 L820 300 L980 370 L1120 320" />
            <path d="M60 420 L210 390 L350 470 L500 420 L640 500 L790 450 L950 520 L1100 470" />
            <path d="M120 580 L270 550 L410 630 L560 580 L700 660 L850 610 L1000 690 L1140 640" />
            <path d="M220 90 L280 250 L350 470 L410 630" />
            <path d="M480 140 L540 280 L500 420 L560 580" />
            <path d="M620 210 L680 350 L640 500 L700 660" />
            <path d="M760 160 L820 300 L790 450 L850 610" />
            <path d="M920 230 L980 370 L950 520 L1000 690" />
            <path d="M340 180 L400 320 L350 470" />
            <path d="M1080 180 L1120 320 L1100 470 L1140 640" />
            <path d="M80 120 L140 280 L60 420 L120 580" />
          </g>
          <g className="apex-hero-network-nodes" fill="rgba(190, 220, 245, 0.4)">
            <circle className="apex-hero-node" cx="80" cy="120" r="3.2" />
            <circle className="apex-hero-node" cx="220" cy="90" r="2.6" />
            <circle className="apex-hero-node" cx="340" cy="180" r="3.4" />
            <circle className="apex-hero-node" cx="480" cy="140" r="2.8" />
            <circle className="apex-hero-node" cx="620" cy="210" r="3.6" />
            <circle className="apex-hero-node" cx="760" cy="160" r="2.7" />
            <circle className="apex-hero-node" cx="920" cy="230" r="3.2" />
            <circle className="apex-hero-node" cx="1080" cy="180" r="2.9" />
            <circle className="apex-hero-node" cx="140" cy="280" r="3" />
            <circle className="apex-hero-node" cx="280" cy="250" r="2.5" />
            <circle className="apex-hero-node" cx="400" cy="320" r="3.5" />
            <circle className="apex-hero-node" cx="540" cy="280" r="2.8" />
            <circle className="apex-hero-node" cx="680" cy="350" r="3.3" />
            <circle className="apex-hero-node" cx="820" cy="300" r="2.6" />
            <circle className="apex-hero-node" cx="980" cy="370" r="3.1" />
            <circle className="apex-hero-node" cx="1120" cy="320" r="2.7" />
            <circle className="apex-hero-node" cx="60" cy="420" r="2.9" />
            <circle className="apex-hero-node" cx="210" cy="390" r="3.2" />
            <circle className="apex-hero-node" cx="350" cy="470" r="3.8" />
            <circle className="apex-hero-node" cx="500" cy="420" r="2.8" />
            <circle className="apex-hero-node" cx="640" cy="500" r="3.4" />
            <circle className="apex-hero-node" cx="790" cy="450" r="2.6" />
            <circle className="apex-hero-node" cx="950" cy="520" r="3.2" />
            <circle className="apex-hero-node" cx="1100" cy="470" r="2.9" />
            <circle className="apex-hero-node" cx="120" cy="580" r="3" />
            <circle className="apex-hero-node" cx="270" cy="550" r="2.7" />
            <circle className="apex-hero-node" cx="410" cy="630" r="3.5" />
            <circle className="apex-hero-node" cx="560" cy="580" r="2.8" />
            <circle className="apex-hero-node" cx="700" cy="660" r="3.3" />
            <circle className="apex-hero-node" cx="850" cy="610" r="2.6" />
            <circle className="apex-hero-node" cx="1000" cy="690" r="3.1" />
            <circle className="apex-hero-node" cx="1140" cy="640" r="2.8" />
          </g>
        </svg>
        <span className="apex-hero-orb apex-hero-orb-a" />
        <span className="apex-hero-orb apex-hero-orb-b" />
        <span className="apex-hero-orb apex-hero-orb-c" />
        <span className="apex-hero-beam" />
      </div>

      <div className="apex-hero-inner">
        <div className="container-main">
          <div className="apex-hero-grid">
            <div className="apex-hero-copy apex-anim apex-anim-1">
              <p className="apex-hero-brand">{SITE_NAME}</p>

              <p className="apex-hero-eyebrow">TMS &amp; Spravato Treatments</p>

              <h1 id="hero-heading" className="apex-hero-title">
                Real Hope for Treatment-Resistant Depression, Anxiety &amp; OCD
              </h1>

              <p className="apex-hero-lede">
                Advanced, FDA-cleared TMS and FDA-approved Spravato care with a clinical team that
                meets you where you are. Clear next steps, without another guess.
              </p>

              <div className="apex-hero-actions">
                <a href={`#${FORM_SECTION_ID}`} className="btn btn-gold">
                  Find Out If You Qualify
                  <ArrowIcon />
                </a>
                <a href={`#${FINAL_CTA_SECTION_ID}`} className="btn btn-hero-ghost">
                  Get Started
                  <ArrowIcon />
                </a>
              </div>

              <a href={PHONE_HREF} className="apex-hero-call">
                <PhoneIcon />
                Or call {PHONE_DISPLAY}
              </a>
            </div>

            <div className="apex-hero-media apex-anim apex-anim-2">
              <div className="apex-hero-frame-glow" aria-hidden />
              <div className="apex-hero-frame">
                <Image
                  src={IMAGES.hero}
                  alt="A woman resting thoughtfully by a bright window, reflecting calm and renewed hope"
                  fill
                  priority
                  quality={95}
                  sizes="(max-width: 899px) 100vw, 46vw"
                  className="apex-hero-img"
                  unoptimized
                />
              </div>

              <div className="apex-hero-tabs" aria-hidden="true">
                <article className="apex-hero-tab apex-hero-tab-top">
                  <p className="apex-hero-tab-label">
                    <span className="apex-hero-tab-dot apex-hero-tab-dot-live" />
                    Care available
                  </p>
                  <p className="apex-hero-tab-title">TMS &amp; Spravato®</p>
                  <p className="apex-hero-tab-meta">In clinic + telehealth</p>
                </article>

                <article className="apex-hero-tab apex-hero-tab-bl">
                  <p className="apex-hero-tab-label">
                    <span className="apex-hero-tab-dot" />
                    Technology
                  </p>
                  <p className="apex-hero-tab-title">BrainsWay TMS</p>
                  <p className="apex-hero-tab-meta">FDA-cleared option</p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="apex-hero-trust" aria-label="Care highlights">
        <div className="container-main">
          <ul className="apex-hero-trust-list">
            {TRUST_ITEMS.map((item) => (
              <li key={item} className="apex-hero-trust-item">
                <span className="apex-hero-trust-icon" aria-hidden>
                  <TrustIcon label={item} />
                </span>
                <span className="apex-hero-trust-text">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-4 w-4 shrink-0"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-4 w-4 shrink-0"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.312a11.042 11.042 0 005.516 5.516l.312-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-7.456 0-13.5-6.044-13.5-13.5V3.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function TrustIcon({ label }: { label: string }) {
  if (label.includes("FDA")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 3v5c0 4.5-2.8 7.8-7 9-4.2-1.2-7-4.5-7-9V6l7-3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 12.2l1.7 1.7 3.5-3.6" />
      </svg>
    );
  }
  if (label.includes("BrainsWay")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.5 4.8c-2.4.4-4 2.5-4 5.1 0 2.2 1.1 3.8 2.6 5.1.8.7 1.4 1.5 1.4 2.5v1.3h5v-1.3c0-1 .6-1.8 1.4-2.5 1.5-1.3 2.6-2.9 2.6-5.1 0-2.6-1.6-4.7-4-5.1"
        />
        <path strokeLinecap="round" d="M10 20.8h4" />
      </svg>
    );
  }
  if (label.includes("Spravato")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.5c2.2 2.4 3.5 4.6 3.5 6.8a3.5 3.5 0 11-7 0c0-2.2 1.3-4.4 3.5-6.8z" />
        <path strokeLinecap="round" d="M12 14.5v6" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-4.4 7-10.2A4.8 4.8 0 0012 6.5a4.8 4.8 0 00-7 4.3C5 16.6 12 21 12 21z" />
      <circle cx="12" cy="11" r="1.6" />
    </svg>
  );
}
