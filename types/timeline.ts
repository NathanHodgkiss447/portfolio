export type TimelineItem = {
  start: string; // "YYYY-MM"
  end?: string | null; // "YYYY-MM" | null for Present
  title: string;
  org?: string;
  location?: string;
  bullets?: string[];
  stack?: string[];
};
