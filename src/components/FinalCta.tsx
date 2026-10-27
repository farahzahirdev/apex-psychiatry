import {
  FINAL_CTA_SECTION_ID,
  FORM_SECTION_ID,
  PHONE_DISPLAY,
  PHONE_HREF,
  VIDEO_GET_STARTED,
} from "@/lib/constants";

export default function FinalCta() {
  return (
    <section id={FINAL_CTA_SECTION_ID} className="apex-final scroll-mt-24">
      <div className="apex-final-media" aria-hidden>
        <video
          className="apex-final-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={VIDEO_GET_STARTED} type="video/mp4" />
        </video>
        <div className="apex-final-veil" />
      </div>

      <div className="container-main apex-final-inner">
        <p className="apex-final-label">Get Started</p>
        <h2 className="apex-final-title">Ready to see if you qualify?</h2>
        <p className="apex-final-lede">
          Take the next step toward evidence-based options for treatment-resistant depression,
          anxiety, or OCD. Our team is here to help you understand what may fit.
        </p>
        <div className="apex-final-actions">
          <a href={`#${FORM_SECTION_ID}`} className="btn btn-primary">
            Get Started
            <ArrowIcon />
          </a>
          <a href={PHONE_HREF} className="btn btn-light">
            <PhoneIcon />
            Call {PHONE_DISPLAY}
          </a>
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
