import Image from "next/image";
import Reveal from "@/components/Reveal";
import {
  FORM_SECTION_ID,
  IMAGES,
  SPRAVATO_POINTS,
  SPRAVATO_SECTION_ID,
} from "@/lib/constants";

export default function SpravatoSection() {
  return (
    <section id={SPRAVATO_SECTION_ID} className="section-padding scroll-mt-24">
      <div className="container-main">
        <div className="apex-split apex-split--flip">
          <div className="apex-split-copy">
            <Reveal>
              <p className="section-label">Spravato® (Esketamine)</p>
              <h2 className="apex-split-title">
                An FDA-approved option for treatment-resistant depression.
              </h2>
              <p className="text-lead mt-4">
                Spravato® is a prescription nasal spray given in a supervised clinical setting. It
                may be considered when depression has not responded adequately to other
                antidepressants, as part of a carefully monitored care plan.
              </p>
              <ul className="apex-expect-list">
                {SPRAVATO_POINTS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="mt-8">
                <a href={`#${FORM_SECTION_ID}`} className="btn btn-primary">
                  See if Spravato® is right for you
                  <ArrowIcon />
                </a>
              </div>
            </Reveal>
          </div>

          <aside className="apex-split-media">
            <div className="apex-split-sticky">
              <Image
                src={IMAGES.spravato}
                alt="Spravato esketamine nasal spray administered in supervised care"
                width={1280}
                height={720}
                quality={95}
                sizes="(max-width: 900px) 100vw, 48vw"
                className="apex-split-img apex-img-spravato"
                unoptimized
              />
            </div>
          </aside>
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
