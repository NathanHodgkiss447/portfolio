"use client";
import styles from "./ContactForm.module.css";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      // Replace with your endpoint or service (e.g., Formspree)
      await new Promise((r) => setTimeout(r, 600));
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input className={styles.input} id="name" name="name" autoComplete="name" required />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input className={styles.input} id="email" type="email" name="email" autoComplete="email" required />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea className={styles.textarea} id="message" name="message" required />
      </div>
      <button className="button primary" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send"}
      </button>
      <div role="status" aria-live="polite">
        {status === "sent" && <p>Thanks! I'll reply soon.</p>}
        {status === "error" && <p>Something went wrong. Please try again.</p>}
      </div>
    </form>
  );
}
