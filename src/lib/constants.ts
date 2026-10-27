/** Bump when replacing files in public/images so caches refresh */
const IMG_V = "20261027c";

const img = (publicPath: string) => `${publicPath}?v=${IMG_V}`;
const imgPath = (publicPath: string) => publicPath;

export const SITE_NAME = "Apex Interventional Psychiatry";
export const SITE_SHORT = "Apex Psychiatry";

/** Full-color logo (white plate) for light header */
export const LOGO_URL = imgPath("/images/logo.png");
/** White mark for dark footer surfaces */
export const LOGO_WHITE_URL = imgPath("/images/logo-white.png");
export const LOGO_MARK_URL = imgPath("/images/logo-mark.png");
/** Emblem only (no wordmark) for hero badge */
export const LOGO_EMBLEM_URL = imgPath("/images/logo-emblem.png");
export const FAVICON = img("/images/favicon.png");

export const IMAGES = {
  hero: imgPath("/images/hero.jpg"),
  mountain: imgPath("/images/mountain.jpg"),
  tms: imgPath("/images/tms.jpg"),
  spravato: imgPath("/images/spravato.jpg"),
  why: imgPath("/images/mountain.jpg"),
  faq: imgPath("/images/faq.jpg"),
} as const;

/** Background video for Get Started final CTA */
export const VIDEO_GET_STARTED = imgPath("/videos/get-started.mp4");

export const FORM_SECTION_ID = "qualify";
export const TMS_SECTION_ID = "tms";
export const SPRAVATO_SECTION_ID = "spravato";
export const WHY_SECTION_ID = "why-apex";
export const INSURANCE_SECTION_ID = "insurance";
export const LOCATIONS_SECTION_ID = "locations";
export const FINAL_CTA_SECTION_ID = "get-started";

export const FORM_ID = "WrgtS55txBl13oFX83zO";
export const FORM_IFRAME_ID = "inline-WrgtS55txBl13oFX83zO";
export const FORM_NAME = "TMS: New Web Inquiry + Params";
export const FORM_HEIGHT = "2239";

export const PHONE_NUMBER = "860-799-8344";
export const PHONE_DISPLAY = "(860) 799-8344";
export const PHONE_HREF = "tel:+18607998344";
export const EMAIL = "info@apex-psych.com";
export const EMAIL_HREF = "mailto:info@apex-psych.com";
export const WEBSITE_URL = "https://www.apex-psych.com";

export const DEVICE_NAME = "BrainsWay";

export const LOCATIONS = [
  {
    name: "New Milford, CT",
    address: "30 Bridge Street, STE 2, New Milford, CT 06776",
  },
  {
    name: "Southbury, CT",
    address: "1449 Old Waterbury Road, STE 306, Southbury, CT 06488",
  },
  {
    name: "Torrington, CT",
    address: "507 East Main Street, STE 104, Torrington, CT 06790",
  },
  {
    name: "Beacon, NY",
    address: "Serving Beacon and the greater New York area",
  },
] as const;

export const SERVICE_AREAS =
  "Licensed and serving patients in Connecticut, New York, and Florida. In-person and telehealth.";

export const INSURANCE_LOGOS = [
  {
    src: imgPath("/images/insurance/anthem.png"),
    alt: "Anthem Blue Cross Blue Shield",
    width: 180,
    height: 48,
  },
  {
    src: imgPath("/images/insurance/cigna.png"),
    alt: "Cigna",
    width: 150,
    height: 56,
  },
  {
    src: imgPath("/images/insurance/united.png"),
    alt: "UnitedHealthcare",
    width: 170,
    height: 56,
  },
  {
    src: imgPath("/images/insurance/magellan.png"),
    alt: "Magellan",
    width: 150,
    height: 52,
  },
  {
    src: imgPath("/images/insurance/medicare.png"),
    alt: "Medicare",
    width: 150,
    height: 56,
  },
  {
    src: imgPath("/images/insurance/aetna.png"),
    alt: "Aetna",
    width: 150,
    height: 40,
  },
  {
    src: imgPath("/images/insurance/blue-cross.png"),
    alt: "Blue Cross Blue Shield",
    width: 160,
    height: 56,
  },
] as const;

export const INSURANCE_EXTRA = ["Medicaid"] as const;

export const TMS_POINTS = [
  "Non-invasive, FDA-approved magnetic stimulation",
  "Used for depression, anxiety, and OCD when medications fall short",
  "No anesthesia. Most people return to their day afterward",
  `Delivered with ${DEVICE_NAME} TMS technology`,
] as const;

export const SPRAVATO_POINTS = [
  "FDA-approved nasal spray for treatment-resistant depression",
  "Administered in-clinic under licensed supervision",
  "Designed when other antidepressants have not brought enough relief",
  "Part of an integrative psychiatric care plan",
] as const;

export const WHY_ITEMS = [
  {
    title: "Integrative by design",
    description:
      "We blend psychotherapy, psychiatric medication management, and complementary therapies around your distinct needs.",
  },
  {
    title: "Advanced treatments, carefully guided",
    description:
      "FDA-approved TMS and Spravato® are offered with compassionate evaluation so you know what may fit.",
  },
  {
    title: "Multi-location access plus telehealth",
    description:
      "Offices in New Milford, Southbury, Torrington, and Beacon, with virtual care when appropriate.",
  },
  {
    title: "Insurance-aware support",
    description:
      "We accept major plans including Anthem BCBS, Cigna, United Healthcare, Magellan, Medicare, and Medicaid.",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Who may qualify for TMS or Spravato®?",
    answer:
      "Both options are typically considered for adults with treatment-resistant depression, often after trying medications without lasting relief. TMS may also be discussed for certain anxiety and OCD presentations. A clinical evaluation confirms candidacy, safety considerations, and insurance options.",
  },
  {
    question: "What is BrainsWay TMS?",
    answer:
      "Apex Psychiatry offers TMS using BrainsWay technology. TMS uses focused magnetic pulses to stimulate mood-related brain circuits. Sessions are non-invasive and do not require anesthesia.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "Yes. We accept Anthem Blue Cross Blue Shield, Cigna, United Healthcare, Magellan, Medicare, and Medicaid. Call us to verify your specific plan and benefits.",
  },
  {
    question: "Where do you see patients?",
    answer:
      "We have offices in New Milford, Southbury, and Torrington, Connecticut, and Beacon, New York. We also offer telehealth and are licensed to serve patients in CT, NY, and FL.",
  },
  {
    question: "How do I get started?",
    answer:
      'Use the "Find out if you Qualify" form on this page, or call (860) 799-8344. Our team will help with eligibility screening and next steps.',
  },
] as const;
