/**
 * Line icons drawn for the study, one per topic, used as large faint
 * imprints behind a square's text (the reference puts a small icon over
 * each card; here the icon is the card's ground). 24-unit grid, 1.5 stroke,
 * currentColor; decorative, so aria-hidden where placed.
 */
export type IconName = "pay" | "file" | "records" | "ein" | "withhold" | "amend" | "account" | "guest" | "bank" | "card" | "wallet" | "wire" | "check" | "cash" | "time" | "later" | "less" | "refund" | "notice" | "plans" | "balance" | "forms" | "profile" | "auth" | "access" | "news" | "alert" | "disaster" | "law" | "volunteer" | "help";

const PATHS: Record<IconName, string> = {
  pay: "M12 3v18M8 7.5c0-1.4 1.8-2.5 4-2.5s4 1.1 4 2.5-1.8 2.5-4 2.5-4 1.1-4 2.5 1.8 2.5 4 2.5 4-1.1 4-2.5",
  file: "M6 3h8l5 5v13H6zM14 3v5h5M9 13h7M9 17h7",
  records: "M3 7h6l2 2h10v11H3zM3 11h18",
  ein: "M4 8h16v12H4zM9 8V5h6v3M4 13h16",
  withhold: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",
  amend: "M5 19l3.5-.7L19 7.8 15.2 4 4.7 14.5 4 18zM13 6l4 4",
  account: "M12 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM4 21c0-4 3.6-7 8-7s8 3 8 7",
  guest: "M12 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM4 21c0-4 3.6-7 8-7M17 15l5 5M22 15l-5 5",
  bank: "M3 10l9-6 9 6zM5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 20h18",
  card: "M3 6h18v12H3zM3 10h18M7 15h4",
  wallet: "M3 7h15a3 3 0 0 1 3 3v8H3zM3 7V5h13M16 13h5v3h-5z",
  wire: "M4 8h13l-3-3M20 16H7l3 3",
  check: "M3 6h18v12H3zM3 10h18M15 15h3M6 15h5",
  cash: "M3 7h15v9H3zM6 10h15v9H6M10.5 11.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z",
  time: "M4 5h16v15H4zM4 10h16M8 3v4M16 3v4M8 14h3M13 14h3M8 17h3",
  later: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5h4M3 3l3 3",
  less: "M4 12h16M12 4l-8 8 8 8",
  refund: "M20 12a8 8 0 1 1-2.3-5.7M20 4v5h-5",
  notice: "M3 6h18v12H3zM3 6l9 7 9-7",
  plans: "M4 19V5M4 19h16M7 15l4-4 3 3 6-6M20 8v3h-3",
  balance: "M4 20h16M7 20V10M12 20V4M17 20v-8",
  forms: "M6 3h12v18H6zM9 8h6M9 12h6M9 16h4",
  profile: "M12 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM4 21c0-4 3.6-7 8-7s8 3 8 7M9 10l-1 3M15 10l1 3",
  auth: "M14 3a5 5 0 1 0 2.6 9.3L21 16.6V21h-4v-3h-3v-3h-1.4A5 5 0 0 0 14 3z",
  access: "M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
  news: "M3 10v4l5 1 9 5V4L8 9zM19 9a4 4 0 0 1 0 6",
  alert: "M12 3L2 20h20zM12 9v5M12 17v.5",
  disaster: "M3 12a9 9 0 0 1 18 0zM12 12v7a2 2 0 0 0 4 0",
  law: "M12 3v18M5 7h14M5 7l-3 6a3 3 0 0 0 6 0zM19 7l-3 6a3 3 0 0 0 6 0zM8 21h8",
  volunteer: "M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z",
  help: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 1-1 1.7M12 17v.5",
};

export function Imprint({ name, className = "box__imprint" }: { name: IconName; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d={PATHS[name]} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
