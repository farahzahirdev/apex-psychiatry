import Image from "next/image";
import {
  FINAL_CTA_SECTION_ID,
  FORM_SECTION_ID,
  IMAGES,
  PHONE_DISPLAY,
  PHONE_HREF,
  SITE_NAME,
} from "@/lib/constants";

export default function HeroBleed() {
  return (
    <section aria-labelledby="hero-heading" className="apex-hero">
      <div className="apex-hero-bg" aria-hidden>
        <Image
          src={IMAGES.hero}
          alt=""
          fill
          priority
          quality={95}
          sizes="100vw"
          className="apex-hero-img"
          unoptimized
        />
      </div>
      <div className="apex-hero-veil" aria-hidden />

      <div className="apex-hero-inner">
        <div className="container-main">
          <div className="apex-hero-copy apex-anim apex-anim-1">
            <p className="apex-hero-brand">{SITE_NAME}</p>

            <p className="apex-hero-eyebrow">TMS &amp; Spravato Treatments</p>

            <h1 id="hero-heading" className="apex-hero-title">
              Real Hope for Treatment-Resistant Depression, Anxiety &amp; OCD
            </h1>

            <p className="apex-hero-lede">
              Advanced, FDA-approved treatments like TMS and Spravato. Personalized,
              compassionate care so you can feel like yourself again.
            </p>

            <div className="apex-hero-actions">
              <a href={`#${FORM_SECTION_ID}`} className="btn btn-teal">
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
        </div>

        <div className="apex-hero-meta" aria-label="Care highlights">
          <div className="container-main">
            <ul className="apex-hero-meta-list">
              <li>FDA-approved care</li>
              <li>BrainsWay TMS</li>
              <li>Spravato®</li>
              <li>CT · NY · FL</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 shrink-0" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 shrink-0" aria-hidden="true">
      <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.312a11.042 11.042 0 005.516 5.516l.312-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-7.456 0-13.5-6.044-13.5-13.5V3.5z" clipRule="evenodd" />
    </svg>
  );
}
