"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import { FAQ_ITEMS, IMAGES } from "@/lib/constants";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding scroll-mt-24 apex-faq">
      <div className="container-main">
        <Reveal>
          <div className="apex-faq-head">
            <p className="section-label">FAQ</p>
            <h2 className="apex-faq-title">Common questions</h2>
            <p className="apex-faq-lede">
              Clear answers about eligibility, insurance, and how to begin. Individual suitability
              is always determined with a clinician.
            </p>
          </div>
        </Reveal>

        <div className="apex-faq-layout">
          <aside className="apex-faq-aside">
            <div className="apex-faq-sticky">
              <div className="apex-faq-media">
                <Image
                  src={IMAGES.faq}
                  alt="Patients connecting during a calm conversation at Apex Interventional Psychiatry"
                  fill
                  sizes="(max-width: 1023px) 100vw, 46vw"
                  className="apex-faq-img"
                  unoptimized
                />
              </div>
            </div>
          </aside>

          <div className="apex-faq-main">
            <div className="apex-faq-list">
              {FAQ_ITEMS.map((item, index) => {
                const open = openIndex === index;
                return (
                  <div
                    key={item.question}
                    className={`apex-faq-item${open ? " is-open" : ""}`}
                  >
                    <button
                      type="button"
                      className="apex-faq-trigger"
                      aria-expanded={open}
                      onClick={() => setOpenIndex(open ? null : index)}
                    >
                      <span>{item.question}</span>
                      <span className="apex-faq-icon" aria-hidden>
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.25"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            d="M12 5v14M5 12h14"
                            className="apex-faq-plus-h"
                          />
                        </svg>
                      </span>
                    </button>
                    <div className="apex-faq-panel" aria-hidden={!open}>
                      <div className="apex-faq-panel-inner">
                        <p className="apex-faq-answer">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
