import React from "react";
import styles from "../styles/skills.module.scss";
import { Icon } from "@iconify-icon/react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <>
      <section className={styles.skills}>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
        >
          Habilidades y herramientas
        </motion.h2>
        <div className={styles.skillsContainer}>
          <span className={styles.icons}>
            <motion.span
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeInOut", duration: 1.9 }}
              viewport={{ once: true }}
            >
              <Icon icon="akar-icons:html-fill" />
            </motion.span>

            <motion.span
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeInOut", duration: 1.6 }}
              viewport={{ once: true }}
            >
              <Icon icon="akar-icons:css-fill" />
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeInOut", duration: 1.3 }}
              viewport={{ once: true }}
            >
              <Icon icon="akar-icons:javascript-fill" />
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeInOut", duration: 1 }}
              viewport={{ once: true }}
            >
              <Icon icon="fontisto:sass" />
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeInOut", duration: 1 }}
              viewport={{ once: true }}
            >
              <Icon icon="simple-icons:react" />
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeInOut", duration: 1.3 }}
              viewport={{ once: true }}
            >
              <Icon icon="cib:git" />
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeInOut", duration: 1.6 }}
              viewport={{ once: true }}
            >
              <Icon icon="devicon-plain:vscode-wordmark" />
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeInOut", duration: 1.9 }}
              viewport={{ once: true }}
            >
              <Icon icon="fontisto:redux" />
            </motion.span>
          </span>
          <span className={styles.interests}>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeInOut", delay: 1, duration: 1 }}
              viewport={{ once: true }}
            >
              interesado en aprender:
            </motion.h3>
            <span className={styles.interestsIcons}>
              <motion.span
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeInOut", delay: 1.3, duration: 1 }}
                viewport={{ once: true }}
              >
                <Icon icon="ri:tailwind-css-fill" />
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeInOut", delay: 1.3, duration: 1 }}
                viewport={{ once: true }}
              >
                <Icon icon="akar-icons:typescript-fill" />
              </motion.span>
            </span>
          </span>
        </div>
      </section>
    </>
  );
};

export default Skills;
