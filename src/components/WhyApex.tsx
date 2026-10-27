import Image from "next/image";
import Reveal from "@/components/Reveal";
import {
  FORM_SECTION_ID,
  IMAGES,
  WHY_ITEMS,
  WHY_SECTION_ID,
} from "@/lib/constants";

export default function WhyApex() {
  return (
    <section id={WHY_SECTION_ID} className="section-padding scroll-mt-24 apex-why">
      <div className="container-main">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            <Reveal>
              <p className="section-label">Why Apex</p>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.65rem]">
                Our holistic and integrative approach to psychiatry.
              </h2>
              <p className="text-lead mt-4">
                At Apex Interventional Psychiatry, we blend psychotherapy, medication management,
                and complementary therapies for mood disorders, anxiety, and more. Care is tailored
                in person or via telehealth.
              </p>
            </Reveal>

            <Reveal delay={2}>
              <ul className="apex-why-grid list-none p-0">
                {WHY_ITEMS.map((item) => (
                  <li key={item.title} className="apex-why-item">
                    <span className="apex-why-check" aria-hidden>
                      <CheckIcon />
                    </span>
                    <span>
                      <span className="block font-semibold text-navy">{item.title}</span>
                      <span className="apex-why-desc">
                        {item.description}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={3} className="mt-8">
              <a href={`#${FORM_SECTION_ID}`} className="btn btn-navy">
                Find out if you Qualify
              </a>
            </Reveal>
          </div>

          <Reveal delay={2}>
            <div className="apex-why-media">
              <Image
                src={IMAGES.why}
                alt="Mountain summit reflecting the Apex commitment to elevated psychiatric care"
                fill
                quality={95}
                sizes="(max-width: 1024px) 100vw, 520px"
                className="apex-why-img apex-img-mountain"
                unoptimized
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-3.5 w-3.5"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
        clipRule="evenodd"
      />
    </svg>
  );
}
