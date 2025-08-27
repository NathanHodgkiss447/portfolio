import styles from "./ProjectCard.module.css";
import type { Project } from "@/types/project";
import Image from "next/image";

export default function ProjectCard({ item }: { item: Project }) {
  return (
    <article className={styles.card} aria-labelledby={`${item.slug}-title`}>
      {item.cover && (
        <Image
          className={styles.cover}
          src={item.cover}
          alt=""
          width={800}
          height={450}
          priority={false}
        />
      )}
      <h3 id={`${item.slug}-title`} className={styles.title}>{item.title}</h3>
      <p>{item.summary}</p>
      <p className={styles.stack}>{item.stack.join(" • ")}</p>
      <div className={styles.row} role="group" aria-label="Links">
        {item.links.live && <a className={styles.link} href={item.links.live}>Live</a>}
        {item.links.repo && <a className={styles.link} href={item.links.repo}>GitHub</a>}
      </div>
    </article>
  );
}
