"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";
import {
  TEAM_MEMBERS,
  TEAM_PAGE_URL,
  TEAM_SECTION_ID,
} from "@/lib/constants";

export default function TeamSection() {
  const owner = TEAM_MEMBERS.find((m) => m.featured) ?? TEAM_MEMBERS[0];
  const team = TEAM_MEMBERS.filter((m) => m.id !== owner.id);
  const railRef = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = useCallback(() => {
    const el = railRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < max - 4);
  }, []);

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows]);

  const scrollByDir = (dir: -1 | 1) => {
    const el = railRef.current;
    if (!el) return;
    const amount = Math.max(el.clientWidth * 0.7, 220);
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section id={TEAM_SECTION_ID} className="apex-team scroll-mt-24">
      <div className="container-main">
        <Reveal>
          <div className="apex-team-head">
            <p className="section-label">Meet our team</p>
            <h2 className="apex-team-title">Our clinical leadership</h2>
            <p className="text-lead apex-team-lede">
              Board-certified nurse practitioners, counselors, and social workers providing
              compassionate, evidence-based care.
            </p>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <article className="apex-team-owner">
            <div className="apex-team-owner-frame">
              <Image
                src={owner.image}
                alt={`${owner.name}, ${owner.role}`}
                width={640}
                height={640}
                quality={95}
                sizes="(max-width: 768px) 70vw, 280px"
                className="apex-team-photo"
                unoptimized
              />
            </div>
            <div className="apex-team-owner-body">
              <p className="apex-team-badge">Owner &amp; CEO</p>
              <h3 className="apex-team-name apex-team-name-lg">
                {owner.name}
                <span className="apex-team-creds">, {owner.credentials}</span>
              </h3>
              <p className="apex-team-role">{owner.role}</p>
              <p className="apex-team-bio">{owner.bio}</p>
            </div>
          </article>
        </Reveal>

        <Reveal delay={2}>
          <div className="apex-team-rail-wrap">
            <p className="apex-team-rail-label">Care team</p>
            <div className="apex-team-carousel">
              <button
                type="button"
                className="apex-team-side-arrow apex-team-side-arrow-prev"
                aria-label="Previous clinicians"
                disabled={!canPrev}
                onClick={() => scrollByDir(-1)}
              >
                <ArrowIcon dir="left" />
              </button>

              <ul
                ref={railRef}
                className="apex-team-rail"
                aria-label="Care team members"
              >
                {team.map((member) => (
                  <li key={member.id} className="apex-team-rail-item">
                    <article className="apex-team-person">
                      <div className="apex-team-frame">
                        <Image
                          src={member.image}
                          alt={`${member.name}, ${member.role}`}
                          width={480}
                          height={480}
                          quality={95}
                          sizes="200px"
                          className="apex-team-photo"
                          unoptimized
                        />
                      </div>
                      <div className="apex-team-meta">
                        <h3 className="apex-team-name">
                          {member.name}
                          <span className="apex-team-creds">, {member.credentials}</span>
                        </h3>
                        <p className="apex-team-role">{member.role}</p>
                        <p className="apex-team-focus">{member.focus}</p>
                      </div>
                    </article>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className="apex-team-side-arrow apex-team-side-arrow-next"
                aria-label="Next clinicians"
                disabled={!canNext}
                onClick={() => scrollByDir(1)}
              >
                <ArrowIcon dir="right" />
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={3} className="apex-team-foot">
          <Link
            href={TEAM_PAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="apex-team-link"
          >
            View full profiles
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function ArrowIcon({ dir }: { dir: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" aria-hidden>
      {dir === "left" ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 6l-6 6 6 6" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
      )}
    </svg>
  );
}
