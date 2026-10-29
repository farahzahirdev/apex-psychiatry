import Image from "next/image";
import {
  FINAL_CTA_SECTION_ID,
  FORM_SECTION_ID,
  IMAGES,
  PHONE_DISPLAY,
  PHONE_HREF,
  SITE_NAME,
} from "@/lib/constants";

/**
 * Inset split hero (v2, archived). Full-bleed version lives in HeroBleed.tsx.
 * Swap imports in page.tsx to compare.
 */
export default function HeroInset() {
  return (
    <section aria-labelledby="hero-heading" className="apex-hero-inset">
      <div className="apex-hero-inset-atmosphere" aria-hidden />

      <div className="container-main apex-hero-inset-shell">
        <div className="apex-hero-inset-grid">
          <div className="apex-hero-inset-copy apex-anim apex-anim-1">
            <p className="apex-hero-inset-brand">{SITE_NAME}</p>

            <p className="apex-hero-inset-eyebrow">TMS &amp; Spravato Treatments</p>

            <h1 id="hero-heading" className="apex-hero-inset-title">
              Real Hope for Treatment-Resistant Depression, Anxiety &amp; OCD
            </h1>

            <p className="apex-hero-inset-lede">
              Advanced, FDA-cleared TMS and FDA-approved Spravato. Personalized,
              compassionate care so you can feel like yourself again.
            </p>

            <div className="apex-hero-inset-actions">
              <a href={`#${FORM_SECTION_ID}`} className="btn btn-teal">
                Find Out If You Qualify
                <ArrowIcon />
              </a>
              <a href={`#${FINAL_CTA_SECTION_ID}`} className="btn btn-teal-outline">
                Get Started
                <ArrowIcon />
              </a>
            </div>

            <a href={PHONE_HREF} className="apex-hero-inset-call">
              <PhoneIcon />
              Or call {PHONE_DISPLAY}
            </a>
          </div>

          <div className="apex-hero-inset-media apex-anim apex-anim-2">
            <div className="apex-hero-inset-frame">
              <Image
                src={IMAGES.hero}
                alt="Hopeful view over mountains at sunrise, reflecting Apex Interventional Psychiatry care"
                fill
                priority
                quality={95}
                sizes="(max-width: 899px) 100vw, 48vw"
                className="apex-hero-inset-img"
                unoptimized
              />
            </div>
            <div className="apex-hero-inset-accent" aria-hidden />
          </div>
        </div>

        <ul className="apex-hero-inset-meta" aria-label="Care highlights">
          <li>FDA-cleared TMS</li>
          <li>BrainsWay TMS</li>
          <li>Spravato®</li>
          <li>Connecticut care</li>
        </ul>
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
