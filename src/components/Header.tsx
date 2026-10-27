"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  FORM_SECTION_ID,
  LOGO_URL,
  PHONE_NUMBER,
  PHONE_HREF,
  SITE_NAME,
  SPRAVATO_SECTION_ID,
  TEAM_SECTION_ID,
  TMS_SECTION_ID,
  WHY_SECTION_ID,
} from "@/lib/constants";

const NAV_ITEMS = [
  { href: `#${TMS_SECTION_ID}`, label: "TMS Therapy" },
  { href: `#${SPRAVATO_SECTION_ID}`, label: "Spravato" },
  { href: `#${WHY_SECTION_ID}`, label: "Why Apex" },
  { href: `#${TEAM_SECTION_ID}`, label: "Our Team" },
  { href: "#locations", label: "Locations" },
  { href: "#insurance", label: "Insurance" },
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [panelTop, setPanelTop] = useState(72);
  const [headerHeight, setHeaderHeight] = useState(0);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const scrollLockY = useRef(0);
  const pendingHash = useRef<string | null>(null);

  const measureHeader = () => {
    if (!headerRef.current) return;
    const rect = headerRef.current.getBoundingClientRect();
    setHeaderHeight(Math.ceil(rect.height));
    setPanelTop(Math.ceil(rect.bottom + 8));
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    measureHeader();
    const onResize = () => {
      if (window.innerWidth >= 1100) setOpen(false);
      measureHeader();
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!open) return;

    measureHeader();

    scrollLockY.current = window.scrollY;
    const { body, documentElement } = document;
    const prev = {
      overflow: body.style.overflow,
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      htmlOverflow: documentElement.style.overflow,
      scrollBehavior: documentElement.style.scrollBehavior,
    };

    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollLockY.current}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    documentElement.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        pendingHash.current = null;
        setOpen(false);
      }
    };

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (panelRef.current?.contains(target)) return;
      if (toggleRef.current?.contains(target)) return;
      pendingHash.current = null;
      setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);

    return () => {
      const y = scrollLockY.current;
      const hash = pendingHash.current;
      pendingHash.current = null;

      // Instant restore so smooth scroll does not animate through the whole page.
      documentElement.style.scrollBehavior = "auto";
      body.style.overflow = prev.overflow;
      body.style.position = prev.position;
      body.style.top = prev.top;
      body.style.left = prev.left;
      body.style.right = prev.right;
      body.style.width = prev.width;
      documentElement.style.overflow = prev.htmlOverflow;

      window.scrollTo({ top: y, left: 0, behavior: "auto" });

      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);

      requestAnimationFrame(() => {
        documentElement.style.scrollBehavior = prev.scrollBehavior;
        if (!hash) return;
        const el = document.getElementById(hash.replace(/^#/, ""));
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    };
  }, [open]);

  const close = () => {
    pendingHash.current = null;
    setOpen(false);
  };

  const goToHash = (href: string) => {
    pendingHash.current = href;
    setOpen(false);
  };

  const mobileMenu =
    mounted &&
    open &&
    createPortal(
      <>
        <button
          type="button"
          className="mobile-nav-backdrop"
          aria-label="Close menu"
          onClick={close}
        />
        <div
          ref={panelRef}
          id="mobile-nav"
          className="mobile-nav-panel"
          style={{ top: panelTop }}
          aria-label="Mobile navigation"
        >
          <p className="mobile-nav-label">Menu</p>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="mobile-nav-link"
              onClick={(event) => {
                event.preventDefault();
                goToHash(item.href);
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href={`#${FORM_SECTION_ID}`}
            className="mobile-nav-cta"
            onClick={(event) => {
              event.preventDefault();
              goToHash(`#${FORM_SECTION_ID}`);
            }}
          >
            Find Out If You Qualify
          </a>
          <a
            href={PHONE_HREF}
            className="mt-1 rounded-md px-3 py-3 text-center text-sm font-semibold text-navy"
            onClick={close}
          >
            Call {PHONE_NUMBER}
          </a>
        </div>
      </>,
      document.body,
    );

  return (
    <>
      {open ? (
        <div className="site-header-spacer" style={{ height: headerHeight }} aria-hidden />
      ) : null}
      <header
        ref={headerRef}
        className={`site-header${solid ? " is-solid" : ""}${open ? " is-menu-open" : ""}`}
      >
        <div className="container-main relative flex items-center justify-between gap-3 py-2 sm:gap-4 sm:py-2.5">
          <Link href="/" className="apex-logo-link relative z-[80] shrink-0" onClick={close}>
            <Image
              src={LOGO_URL}
              alt={SITE_NAME}
              width={220}
              height={168}
              className="apex-logo-img"
              priority
              unoptimized
            />
          </Link>

          <nav
            className="hidden items-center gap-5 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-navy/80 min-[1100px]:flex xl:gap-6 xl:text-[0.72rem] xl:tracking-[0.14em]"
            aria-label="Main"
          >
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} className="apex-nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center gap-2.5 min-[1100px]:flex">
            <a href={PHONE_HREF} className="btn btn-phone-pill whitespace-nowrap">
              <PhoneIcon />
              {PHONE_NUMBER}
            </a>
            <a
              href={`#${FORM_SECTION_ID}`}
              className="btn btn-teal btn-header-cta whitespace-nowrap"
            >
              Find Out If You Qualify
            </a>
          </div>

          <button
            ref={toggleRef}
            type="button"
            className="mobile-nav-toggle relative z-[80] min-[1100px]:hidden"
            onClick={() => {
              pendingHash.current = null;
              setOpen((prev) => !prev);
            }}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>

      {mobileMenu}
    </>
  );
}

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-3.5 w-3.5 shrink-0"
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

function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
