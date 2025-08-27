"use client";

import { motion } from "framer-motion";
import styles from "./Timeline.module.css";
import type { TimelineItem } from "@/types/timeline";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

function formatYM(ym?: string | null) {
  if (!ym) return "Present";
  const [y, m] = ym.split("-").map(Number);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${months[(m || 1) - 1]} ${y}`;
}

export default function Timeline({ items }: { items: TimelineItem[] }) {
  const reduced = usePrefersReducedMotion();

  // Sort newest first
  const sorted = [...items].sort((a, b) => (b.start > a.start ? 1 : -1));

  return (
    <ol className={styles.wrap} aria-label="Timeline">
      {sorted.map((it, idx) => {
        const dateRange = `${formatYM(it.start)} — ${formatYM(it.end ?? null)}`;
        return (
          <motion.li
            key={`${it.title}-${it.start}-${it.org ?? ""}`}
            className={styles.item}
            initial={reduced ? undefined : { opacity: 0, y: 8 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.25, ease: "easeOut", delay: idx * 0.05 }}
          >
            <span className={styles.dot} aria-hidden="true"></span>
            <article className={styles.card}>
              <div className={styles.titleRow}>
                <h3 className={styles.title}>{it.title}</h3>
                {it.org && <span className={styles.meta}>· {it.org}</span>}
              </div>
              <div className={styles.meta}>
                <time>{dateRange}</time>
                {it.location ? ` · ${it.location}` : ""}
              </div>

              {it.bullets && it.bullets.length > 0 && (
                <ul className={styles.bullets}>
                  {it.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}

              {it.stack && it.stack.length > 0 && (
                <div className={styles.chips}>
                  {it.stack.map((s) => (
                    <span key={s} className={styles.chip}>
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </article>
          </motion.li>
        );
      })}
    </ol>
  );
}
