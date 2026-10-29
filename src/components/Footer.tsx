import Image from "next/image";
import Link from "next/link";
import {
  EMAIL,
  EMAIL_HREF,
  FORM_SECTION_ID,
  LOCATIONS,
  LOGO_WHITE_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
  SITE_NAME,
  SPRAVATO_SECTION_ID,
  TEAM_SECTION_ID,
  TMS_SECTION_ID,
  WEBSITE_URL,
  WHY_SECTION_ID,
} from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="apex-footer">
      <div className="container-main grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Image
            src={LOGO_WHITE_URL}
            alt={SITE_NAME}
            width={220}
            height={168}
            className="h-16 w-auto object-contain object-left sm:h-[4.5rem]"
            unoptimized
          />
          <p className="apex-footer-body mt-5 max-w-md">
            Holistic, integrative psychiatry blending medication management, psychotherapy, and
            interventional treatments including TMS and Spravato®.
          </p>
        </div>

        <div>
          <p className="apex-footer-heading">Contact</p>
          <address className="apex-footer-body mt-3 space-y-3 not-italic">
            <p>
              <a href={PHONE_HREF} className="transition-colors hover:text-gold-soft">
                {PHONE_DISPLAY}
              </a>
            </p>
            <p>
              <a href={EMAIL_HREF} className="transition-colors hover:text-gold-soft">
                {EMAIL}
              </a>
            </p>
            {LOCATIONS.map((loc) => (
              <p key={loc.name}>
                <span className="apex-footer-loc-name">{loc.name}</span>
                {loc.address}
              </p>
            ))}
          </address>
        </div>

        <div>
          <p className="apex-footer-heading">Explore</p>
          <nav className="apex-footer-body mt-3 flex flex-col gap-2">
            <a href={`#${TMS_SECTION_ID}`} className="transition-colors hover:text-gold-soft">
              TMS Therapy
            </a>
            <a href={`#${SPRAVATO_SECTION_ID}`} className="transition-colors hover:text-gold-soft">
              Spravato®
            </a>
            <a href={`#${WHY_SECTION_ID}`} className="transition-colors hover:text-gold-soft">
              Why Apex
            </a>
            <a href={`#${TEAM_SECTION_ID}`} className="transition-colors hover:text-gold-soft">
              Our Team
            </a>
            <a href="#insurance" className="transition-colors hover:text-gold-soft">
              Insurance
            </a>
            <a href={`#${FORM_SECTION_ID}`} className="transition-colors hover:text-gold-soft">
              Find out if you Qualify
            </a>
            <Link
              href={WEBSITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-gold-soft"
            >
              Main Website
            </Link>
          </nav>
        </div>
      </div>

      <div className="container-main border-t border-white/12 pb-8 pt-8">
        <div className="apex-footer-legal max-w-4xl space-y-3">
          <p className="apex-footer-legal-title">Important information</p>
          <p>
            This page is for educational purposes and does not replace medical advice. Treatment
            decisions should be made with a qualified clinician. TMS and Spravato® are available by
            prescription only and may not be appropriate for everyone. Individual results vary.
            Spravato® is a registered trademark of its owner.
          </p>
          <p className="font-medium text-gold-soft">
            If you are in danger or having thoughts of suicide, call or text 988, or dial 911.
          </p>
        </div>

        <div className="apex-footer-meta mt-6 flex flex-col items-start justify-between gap-2 border-t border-white/12 pt-5 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Apex Interventional Psychiatry LLC. All rights reserved.</p>
          <p>TMS · Spravato® · Connecticut</p>
        </div>
      </div>
    </footer>
  );
}
