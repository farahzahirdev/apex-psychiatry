import Image from "next/image";
import {
  FORM_SECTION_ID,
  INSURANCE_EXTRA,
  INSURANCE_LOGOS,
  INSURANCE_SECTION_ID,
} from "@/lib/constants";
import Reveal from "@/components/Reveal";

function LogoTrack({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <ul
      className="apex-insurance-track"
      aria-hidden={ariaHidden || undefined}
    >
      {INSURANCE_LOGOS.map((logo) => (
        <li
          key={`${ariaHidden ? "dup-" : ""}${logo.alt}`}
          className="apex-insurance-logo"
        >
          <Image
            src={logo.src}
            alt={ariaHidden ? "" : logo.alt}
            width={logo.width}
            height={logo.height}
            className="apex-insurance-img"
            loading="lazy"
            unoptimized
          />
        </li>
      ))}
      {INSURANCE_EXTRA.map((name) => (
        <li
          key={`${ariaHidden ? "dup-" : ""}${name}`}
          className="apex-insurance-logo"
        >
          <span className="apex-insurance-text">{name}</span>
        </li>
      ))}
    </ul>
  );
}

export default function InsuranceBar() {
  return (
    <section
      id={INSURANCE_SECTION_ID}
      className="apex-insurance scroll-mt-24"
      aria-labelledby="insurance-heading"
    >
      <div className="container-main">
        <Reveal>
          <div className="apex-insurance-head">
            <p className="section-label">Insurance</p>
            <h2 id="insurance-heading">We accept major insurance plans</h2>
            <p className="text-lead">
              Coverage verification is part of getting started.{" "}
              <a href={`#${FORM_SECTION_ID}`} className="apex-insurance-link">
                Contact us
              </a>{" "}
              to confirm your benefits.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="apex-insurance-marquee" aria-label="Accepted insurance plans">
        <div className="apex-insurance-fade apex-insurance-fade--left" aria-hidden />
        <div className="apex-insurance-fade apex-insurance-fade--right" aria-hidden />
        <div className="apex-insurance-marquee-track">
          <LogoTrack />
          <LogoTrack ariaHidden />
        </div>
      </div>
    </section>
  );
}
