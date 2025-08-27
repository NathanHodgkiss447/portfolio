"use client";

import styles from "./page.module.css";
import projects from "@/content/projects.json";
import ProjectGrid from "@/components/ProjectGrid";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import Image from "next/image";
import timeline from "@/content/timeline.json";
import Timeline from "@/components/Timeline";

export default function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroProfile}>
          <Image
            className={styles.heroAvatar}
            src="/images/avatar.jpg"
            alt="Nathan Hodgkiss"
            width={80}
            height={80}
          />
          <div className={styles.heroInfo}>
            <span className={styles.kicker}>Web Developer · Dublin</span>
            <motion.h1
              id="hero-title"
              className={styles.heading}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              Nathan Hodgkiss
            </motion.h1>
          </div>
        </div>
        <p className={styles.heroDescription}>
          I build fast, minimal, and elegant web apps — with a focus on
          performance, DX, and clean UI. I love TypeScript, React/Next.js, and
          thoughtful animations that respect users.
        </p>
        <div className={styles.heroTech}>
          <span className={styles.techChip}>TypeScript</span>
          <span className={styles.techChip}>Next.js</span>
          <span className={styles.techChip}>Node</span>
          <span className={styles.techChip}>CSS Modules</span>
          <span className={styles.techChip}>Framer Motion</span>
        </div>
        <div className={styles.ctaRow}>
          <a className="button primary" href="#projects">
            View Projects
          </a>
          <a className="button" href="#contact">
            Contact
          </a>
        </div>
      </section>

      <section>
        <article className={styles.card} aria-labelledby="experience-title">
          <h2 id="experience-title">Experience</h2>
          <Timeline items={timeline as any} />
        </article>
      </section>
      <section
        id="projects"
        className={styles.section}
        aria-labelledby="projects-title"
      >
        <div className={styles.headingRow}>
          <h2 id="projects-title">Projects</h2>
          <span className="muted">Selected work</span>
        </div>
        <ProjectGrid items={projects} />
      </section>

      <section
        id="contact"
        className={styles.contact}
        aria-labelledby="contact-title"
      >
        <h2 id="contact-title">Contact</h2>
        <p className="muted">
          Want to collaborate or have a role in mind? Drop a message.
        </p>
        <ContactForm />
      </section>
    </>
  );
}
