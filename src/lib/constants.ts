/** Bump when replacing files in public/images so caches refresh */
const IMG_V = "20261028a";

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
  mountain: imgPath("/images/why-home.jpg"),
  tms: imgPath("/images/tms.jpg"),
  spravato: imgPath("/images/spravato.jpg"),
  why: imgPath("/images/why-home.jpg"),
  faq: imgPath("/images/faq.jpg"),
} as const;

/** Background video for Get Started final CTA */
export const VIDEO_GET_STARTED = imgPath("/videos/get-started.mp4");

export const FORM_SECTION_ID = "qualify";
export const TMS_SECTION_ID = "tms";
export const SPRAVATO_SECTION_ID = "spravato";
export const WHY_SECTION_ID = "why-apex";
export const TEAM_SECTION_ID = "team";
export const INSURANCE_SECTION_ID = "insurance";
export const LOCATIONS_SECTION_ID = "locations";
export const FINAL_CTA_SECTION_ID = "get-started";

export const TEAM_PAGE_URL = "https://www.apex-psych.com/meet-our-team";

export const TEAM_MEMBERS = [
  {
    id: "perry-githens",
    name: "Perry Githens",
    credentials: "APRN",
    role: "Psychiatric Mental Health Nurse Practitioner",
    focus: "Mood, trauma, ADHD, and substance use",
    image: imgPath("/images/team/perry-githens.jpg"),
    featured: true,
    bio: "Perry is the Owner and CEO of Apex Interventional Psychiatry LLC and Connecticut TMS LLC. He holds a master's degree in psychiatric nursing from Wilkes University and board certification through ANCC in psychiatry. His expertise spans medication management for depression, bipolar disorder, PTSD, ADHD, autism spectrum disorder, and substance use disorders including alcoholism and opioid use disorder.",
  },
  {
    id: "basia-murzynski",
    name: "Basia Murzynski",
    credentials: "MSN, APRN, PMHNP-BC",
    role: "Psychiatric Mental Health Nurse Practitioner",
    focus: "Mood disorders, anxiety, substance use",
    image: imgPath("/images/team/basia-murzynski.jpg"),
    featured: false,
    bio: "Basia is a board-certified Psychiatric Mental Health Nurse Practitioner specializing in evaluation, diagnosis, and treatment across the lifespan. She brings extensive inpatient and outpatient experience, with a compassionate, patient-centered approach that integrates biological, psychological, and social aspects of mental health.",
  },
  {
    id: "chinedu-ibemadu",
    name: "Chinedu Ibemadu",
    credentials: "PMHNP-BC",
    role: "Psychiatric Mental Health Nurse Practitioner",
    focus: "Pediatric, adolescent, and adult care",
    image: imgPath("/images/team/chinedu-ibemadu.jpg"),
    featured: false,
    bio: "Chinedu provides compassionate, holistic psychiatric care across age groups. His clinical experience includes The Institute of Living, Connecticut DMHAS, Albert J. Solnit Psychiatric Center, and other respected Connecticut behavioral health organizations. He earned his Advanced Nursing Practitioner degree in Psychiatric/Mental Health Nursing from the University of Saint Joseph.",
  },
  {
    id: "vincenzo-torizzo",
    name: "Vincenzo Torizzo",
    credentials: "LPC",
    role: "Licensed Professional Counselor",
    focus: "CBT, DBT, and trauma-informed counseling",
    image: imgPath("/images/team/vincenzo-torizzo.jpg"),
    featured: false,
    bio: "Vincenzo is board-certified by the ACA and NBCC. He supports clients facing depression, anxiety, OCD, bipolar disorder, PTSD, ADHD, and stress. His approach blends client-centered care with evidence-based modalities including CBT, DBT, ACT, and ERP. He offers virtual and in-person appointments in New Milford and Torrington.",
  },
  {
    id: "meghan-komaromi",
    name: "Meghan Komaromi",
    credentials: "LCSW",
    role: "Licensed Clinical Social Worker",
    focus: "Anxiety, grief, and life transitions",
    image: imgPath("/images/team/meghan-komaromi.jpg"),
    featured: false,
    bio: "Meghan has more than 25 years of experience helping adults navigate anxiety, depression, stress, grief, trauma, and major life transitions. She integrates CBT, Motivational Interviewing, strengths-based therapy, and trauma-informed care in a warm, collaborative space.",
  },
  {
    id: "margaret-scalia",
    name: "Margaret Scalia",
    credentials: "APRN",
    role: "Advanced Practice Registered Nurse",
    focus: "Psychopharmacology and geriatric psychiatry",
    image: imgPath("/images/team/margaret-scalia.jpg"),
    featured: false,
    bio: "Margaret is a board-certified Advanced Nurse Practitioner with over twenty years in medicine. Her clinical focus is psychopharmacology, with particular interest in geriatric psychiatry and the intersections of aging, chronic medical conditions, and mental health.",
  },
  {
    id: "laura-motasky",
    name: "Laura Motasky",
    credentials: "LMSW",
    role: "Licensed Master Social Worker",
    focus: "Geriatrics, aging, and grief counseling",
    image: imgPath("/images/team/laura-motasky.jpg"),
    featured: false,
    bio: "Laura believes therapy is a collaborative, non-judgmental space for healing and growth. With over 12 years of experience and specialized knowledge in geriatrics and grief counseling, she walks alongside clients as they build resilience and lasting well-being.",
  },
  {
    id: "aurora-tafuto",
    name: "Aurora Tafuto",
    credentials: "APRN",
    role: "Psychiatric Mental Health Nurse Practitioner",
    focus: "Anxiety, OCD, and trauma-related care",
    image: imgPath("/images/team/aurora-tafuto.jpg"),
    featured: false,
    bio: "Aurora is a board-certified PMHNP with 10 years of nursing experience across acute care and trauma settings. She completed a postgraduate PMHNP Residency with the U.S. Department of Veterans Affairs. Her interests include anxiety, OCD, trauma, substance use, perinatal mental health, and complex psychiatric needs.",
  },
] as const;

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
