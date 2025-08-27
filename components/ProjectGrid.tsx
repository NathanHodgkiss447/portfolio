"use client";
import { motion } from "framer-motion";
import styles from "./ProjectGrid.module.css";
import ProjectCard from "./ProjectCard";
import type { Project } from "@/types/project";

export default function ProjectGrid({ items }: { items: Project[] }) {
  return (
    <motion.div
      className={styles.grid}
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.08 } }
      }}
    >
      {items.map((p) => (
        <motion.div
          key={p.slug}
          variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <ProjectCard item={p} />
        </motion.div>
      ))}
    </motion.div>
  );
}
