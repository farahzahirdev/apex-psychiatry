import Image from "next/image";
import Reveal from "@/components/Reveal";
import {
  DEVICE_NAME,
  FORM_SECTION_ID,
  IMAGES,
  TMS_POINTS,
  TMS_SECTION_ID,
} from "@/lib/constants";

export default function TmsSection() {
  return (
    <section id={TMS_SECTION_ID} className="section-padding scroll-mt-24">
      <div className="container-main">
        <div className="apex-split">
          <aside className="apex-split-media">
            <div className="apex-split-sticky">
              <Image
                src={IMAGES.tms}
                alt={`${DEVICE_NAME} TMS therapy session at Apex Interventional Psychiatry`}
                width={1365}
                height={768}
                quality={95}
                sizes="(max-width: 900px) 100vw, 52vw"
                className="apex-split-img apex-img-tms"
                unoptimized
              />
            </div>
          </aside>

          <div className="apex-split-copy">
            <Reveal>
              <p className="section-label">TMS Therapy · {DEVICE_NAME}</p>
              <h2 className="apex-split-title">
                Non-invasive brain stimulation when medication alone isn&apos;t enough.
              </h2>
              <p className="text-lead mt-4">
                Transcranial Magnetic Stimulation uses focused magnetic pulses to activate nerve
                cells involved in mood. It is FDA-approved and may help adults with depression,
                anxiety, or OCD who have not found full relief from traditional treatments.
              </p>
              <ul className="apex-expect-list">
                {TMS_POINTS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="mt-8">
                <a href={`#${FORM_SECTION_ID}`} className="btn btn-primary">
                  See if TMS is right for you
                  <ArrowIcon />
                </a>
              </div>
            </Reveal>
          </div>
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
