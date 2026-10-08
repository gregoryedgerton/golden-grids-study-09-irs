/**
 * Three pages of IRS.gov — the home page, Payments, and Online account for
 * individuals — as captured on October 7, 2026 (captures/reference-*.txt
 * hold each page's main text). The text is the IRS's own and is in the
 * public domain as a work of the United States government (17 U.S.C. §105);
 * it is used here shortened and rearranged, each page linked where it
 * appears. The shell is GIFcommit's, a layout study's, and says so: this
 * is not a government website, nothing here signs anyone in, and no
 * payment can be made.
 */

export const CAPTURED = "October 7, 2026";
export const SOURCE = {
  home: { label: "IRS.gov home", url: "https://www.irs.gov/" },
  payments: { label: "IRS.gov, Make a payment", url: "https://www.irs.gov/payments", reviewed: "18-Sep-2026" },
  account: { label: "IRS.gov, Online account for individuals", url: "https://www.irs.gov/payments/online-account-for-individuals", reviewed: "26-Sep-2026" },
};

/** A fact that fits a square. */
export interface Fact { label?: string; line: string; fitClass?: string; body?: string; long?: string; href?: string; cta?: string }

/** The site's primary navigation, as the reference names it. */
export const NAV: [string, string][] = [["File", "#"], ["Pay", "./payments.html"], ["Refunds", "#"], ["Credits & Deductions", "#"], ["Forms", "#"], ["Report Fraud", "#"]];
export const UTILITY: string[] = ["Help", "News", "English", "Tax Pros", "Sign in"];

// --- Home ------------------------------------------------------------------

export const NOTICE = { title: "Trump Accounts", body: "Jumpstart your child's financial future.", link: { label: "Visit trumpaccounts.gov", url: "https://trumpaccounts.gov" } };

export const HERO = {
  title: "Do more with an account",
  body: "Access your tax information with an Individual, Business or Tax Pro Account.",
  cta: "Create account",
  features: [
    { label: "Refund status", line: "Refund\nstatus", body: "Check where a refund stands, for the current year and prior years." },
    { label: "Tax records", line: "Tax\nrecords", body: "Transcripts, key return information, notices and information returns." },
    { label: "Payments", line: "Payments", body: "Pay by bank account, schedule a payment, see history and set up a plan." },
    { label: "Notices", line: "Notifi-\ncations", body: "Go paperless for certain notices and get email when there is activity." },
  ],
  app: { title: "All your info in one app", body: "Access your tax records, check refund status, make payments, view balance and opt in to digital notices.", cta: "Get the official app" },
};

export const DEBT_HELP = { title: "Find tax debt help", body: "Answer a few questions to find your options to resolve a tax debt.", cta: "Try the tax debt help tool" };

export const TOPICS: Fact[] = [
  { label: "Popular topic", line: "Payments", body: "Make a payment, apply for a payment plan, and find other options to pay a tax debt.", href: "./payments.html", cta: "Make a payment" },
  { label: "Popular topic", line: "Free File", body: "Explore your free filing options. IRS Free File is open until Oct. 15.", long: "Free File is a partnership between the IRS and tax software companies: guided preparation for taxpayers under an income limit, and fillable forms for anyone." },
  { label: "Popular topic", line: "Tax\nrecords", body: "Get your tax return transcripts and other tax records from current and prior years.", href: "./account.html#records", cta: "In your account" },
  { label: "Popular topic", line: "EIN", body: "Get an Employer ID number, free and direct from the IRS in minutes.", long: "An Employer Identification Number identifies a business entity. The IRS issues it at no charge; third parties that charge for it are not the IRS." },
  { label: "Popular topic", line: "With-\nholding", body: "Check the amount of tax you want withheld from your pay with the Estimator." },
  { label: "Popular topic", line: "Amended\nreturn", body: "Submit an amended tax return or check the status of your amended return." },
];

export const HELP_TABS = ["Individuals", "Businesses", "Tax professionals", "Tax-exempt organizations", "Government entities"];
export const HELP: { title: string; body: string }[] = [
  { title: "Your account", body: "Sign in to view your balance, payment history, tax records and notices, or create an account with photo identification ready." },
  { title: "Amended return", body: "File Form 1040-X to correct a return, and check an amended return's status about three weeks after filing." },
  { title: "Identity protection PIN (IP PIN)", body: "A six-digit number that prevents someone else from filing a return with your Social Security number. Get one in your account." },
  { title: "Transcripts and tax records", body: "Return, account and wage-and-income transcripts, online in your account or by mail; each account transcript covers one tax year." },
  { title: "Tax scam, fraud or identity theft", body: "The IRS does not initiate contact by email, text or social media to ask for personal or financial information. Report suspected scams." },
  { title: "Resources for individuals", body: "Filing, credits and deductions, life events, and help for students, parents, members of the military, seniors and retirees." },
  { title: "Contact", body: "Phone assistance for individuals at 800-829-1040, 7 a.m. to 7 p.m. local time; local offices by appointment." },
];

export const NEWS: Fact[] = [
  { label: "Announcement", line: "Volunteers\nneeded", body: "Learn to prepare taxes and help your community.", cta: "Sign up now" },
  { label: "Alert", line: "Scams and\nschemes", body: "Find the latest information on trending scams and schemes.", cta: "Get the latest updates" },
  { label: "Announcement", line: "Disaster\nrelief", body: "Information on recent tax relief for taxpayers affected by disasters.", cta: "Find tax relief information" },
  { label: "News", line: "Topics in\nthe news", body: "Current news, recent guidance, and timely updates.", cta: "Stay informed" },
  { label: "Law", line: "Working\nFamilies\nTax Cuts", body: "The Working Families Tax Cuts significantly affect federal taxes, credits and deductions.", cta: "Find out more" },
];

// --- Payments ----------------------------------------------------------------

export const PAY = {
  title: "Make a payment",
  intro: "Pay your federal taxes by bank account, debit or credit card, digital wallet and more. Find options if you can't pay now.",
  tabs: ["Individual payments", "Business payments"],
  side: ["Bank account (Direct Pay)", "Debit or credit card", "Your online account", "Business tax payment (EFTPS)", "Payment plan", "Tax debt help", "Penalties", "Interest", "Tax withholding", "Foreign electronic payments", "User fees"],
  bank: {
    title: "Pay individual taxes by bank account",
    body: "Free, fast and secure with the IRS. Pay your balance due, estimated tax, amended return, extension and more.",
    account: { title: "Pay in your account", tag: "Preferred", features: ["Pay by bank account and save it to your profile", "View your balance due, payment history, more", "Set up, change or pay on a payment plan", "Make up to 20 payments a day"], accepted: "Most payment types accepted", cta: "Sign in or create account" },
    guest: { title: "Pay as guest", sub: "Use Direct Pay", features: ["Pay by bank account without signing in", "Look up payments by confirmation number", "Make payments on a payment plan", "Make up to 5 payments a day"], accepted: "All payment types accepted", cta: "Pay through Direct Pay" },
  },
  methods: {
    title: "All payment methods",
    body: "Choose a method that works for you. Not all tax payments are accepted by all payment methods.",
    list: [
      { label: "Method", line: "Bank\naccount", body: "All tax payments accepted. Free." },
      { label: "Method", line: "Debit or\ncredit card", body: "Most tax payments accepted. Fees apply.", long: "Card payments go through third-party processors, which set the fee; the IRS receives none of it." },
      { label: "Method", line: "Digital\nwallet", body: "Most tax payments accepted. Fees apply." },
      { label: "Method", line: "Same-day\nwire", body: "All tax payments accepted. Fees may apply.", long: "A wire is arranged through your bank, which may charge for it; the IRS does not." },
      { label: "Method", line: "Check or\nmoney order", body: "All tax payments accepted." },
      { label: "Method", line: "Cash", body: "All tax payments accepted.", long: "Cash is accepted at participating retail partners and at some IRS offices by appointment." },
    ] as Fact[],
  },
  cant: {
    title: "If you can't pay now",
    body: "Don't worry. You have options. Try the new tool to get help with your tax debt.",
    list: [
      { label: "Option", line: "Pay over\ntime", body: "Payment plans let you pay your taxes over time.", long: "If you're an individual, set up a payment plan in your Individual Account. If you're a business, contact the phone number on your notice or call 800-829-4933. We're here 7 a.m. to 7 p.m. local time." },
      { label: "Option", line: "Pay later", body: "You can ask the IRS to delay the collection process.", long: "If paying would leave you unable to meet basic living expenses, the IRS may report the account as currently not collectible; penalties and interest continue to accrue." },
      { label: "Option", line: "Pay less", body: "You can request an offer in compromise (OIC). This lets you settle your tax debt for less than the full amount.", long: "Request an OIC in your Individual Account. If you're a business, follow the steps to submit an application." },
    ] as Fact[],
  },
  numbers: [
    { label: "Account", line: "20", fitClass: "fit--num", body: "Payments a day from a signed-in account." },
    { label: "Direct Pay", line: "5", fitClass: "fit--num", body: "Payments a day as a guest." },
    { label: "Bank account", line: "Free", body: "No fee to pay from a bank account, signed in or as a guest." },
    { label: "Business help", line: "7–7", fitClass: "fit--num", body: "800-829-4933, 7 a.m. to 7 p.m. local time." },
  ] as Fact[],
};

// --- Online account for individuals -----------------------------------------------

export const ACCOUNT = {
  title: "Online account for individuals",
  crumbs: ["Home", "File", "Individuals", "Your information"],
  notice: { title: "New: Submit Form 4547, Trump Account Election(s)", body: "You can submit a Trump Account election with Form 4547 and check your election status in your account." },
  intro: "Access your individual account information including balance, payments, tax records and more.",
  cta: "Sign in or create account",
  identity: "If you're a new user, have your photo identification ready. More information about identity verification is available on the sign-in page.",
  side: ["Who should file", "Steps to file your taxes", "File your tax return", "Get an extension", "Amend return", "Your information", "Life events", "Students", "Employees", "Parents", "Military", "Seniors and retirees"],
  features: [
    { id: "records", title: "Access tax records", line: "Tax\nrecords", items: ["View key tax return information, including your adjusted gross income, and access transcripts or tax compliance report", "Check the status of your refund or amended return", "View digital notices from the IRS", "View your audit status (currently available for certain audits conducted by mail)", "View available information return documents, such as Forms W-2 and certain 1099s"] },
    { id: "payments", title: "Make and view payments", line: "Make and\nview\npayments", items: ["Make a same-day payment or schedule payments up to 365 days in advance from your bank account", "Cancel payments before their scheduled date", "Make a guest payment without logging in, or pay by debit or credit card", "View up to 5 years of payment history, including your estimated tax payments", "View pending and scheduled payments"] },
    { id: "plans", title: "View or create payment plans", line: "Payment\nplans", items: ["Learn about payment plan options and apply for a new payment plan", "View and revise details of your existing payment plan", "Create a payment plan for the amount you expect to owe in the current tax year"] },
    { id: "balance", title: "View your balance", line: "Balance", items: ["View balances owed to the IRS by tax year"] },
    { id: "forms", title: "Submit forms", line: "Submit\nforms", items: ["Complete, sign and submit select IRS forms", "Submit Form 4547, Trump Account Election(s), and view status"] },
    { id: "profile", title: "Manage profile", line: "Profile", items: ["Go paperless for certain IRS notices", "Get email notifications for new account information or activity", "Get an Identity Protection PIN (IP PIN)"] },
    { id: "authorizations", title: "View authorizations", line: "Authori-\nzations", items: ["View authorization requests from lenders", "Approve and electronically sign Power of Attorney and Tax Information Authorization from your tax professional"] },
    { id: "accessibility", title: "Accessibility", line: "Access-\nibility", items: ["There are compatibility issues with some assistive technologies. Refer to the accessibility guide for help if you use a screen reader, screen magnifier or voice command software."] },
  ],
  numbers: [
    { label: "Schedule ahead", line: "365\ndays", fitClass: "fit--num", body: "Schedule a bank-account payment up to a year in advance." },
    { label: "History", line: "5\nyears", fitClass: "fit--num", body: "Of payment history, including estimated tax payments." },
    { label: "Transcript by mail", line: "1\nyear", fitClass: "fit--num", body: "Each account transcript covers a single tax year." },
  ] as Fact[],
  related: ["Online account for individuals – Frequently asked questions", "Independent Office of Appeals", "Topic no. 653, IRS notices and bills, penalties and interest charges"],
  asides: [
    { label: "Need to pay?", line: "Need to\npay?", body: "See your payment options.", href: "./payments.html", cta: "Payment options" },
    { label: "What if I can't pay?", line: "Can't\npay?", body: "Check if you can settle your debt for less than you owe with an offer in compromise.", href: "./payments.html#cant", cta: "Offer in compromise" },
    { label: "What if I don't pay?", line: "Don't\npay?", body: "The IRS can take certain actions to collect unpaid taxes.", href: "https://www.irs.gov/payments/online-account-for-individuals", cta: "Collection, on IRS.gov" },
  ] as Fact[],
  other: {
    title: "Other ways to find your account information",
    items: ["You can request an account transcript by mail. Note that each account transcript only covers a single tax year, and may not show the most recent penalties, interest, changes or pending actions.", "If you're a business, or an individual who filed a form other than 1040, you can obtain a transcript by submitting Form 4506-T, Request for Transcript of Tax Return."],
  },
};

export const FOOTER: [string, string[]][] = [
  ["Our agency", ["About IRS", "Careers", "Financial and Budget Reports", "Tax Statistics", "Help", "Find a Local Office"]],
  ["Know your rights", ["Taxpayer Bill of Rights", "Taxpayer Advocate Service", "Independent Office of Appeals", "Civil Rights", "FOIA", "No FEAR Act Data", "Reliance on Guidance"]],
  ["Resolve an issue", ["IRS Notices and Letters", "Identity Theft", "Tax scams", "Tax Fraud", "Criminal Investigation", "Whistleblower Office"]],
  ["Languages", ["Español", "中文 (简体)", "中文 (繁體)", "한국어", "Русский", "Tiếng Việt", "Kreyòl ayisyen", "English"]],
];
