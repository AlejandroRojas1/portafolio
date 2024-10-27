import React from "react";
import styles from "../styles/proyects.module.scss";
import { delay, motion } from "framer-motion";

const variants = {
  inView: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeInOut",
      delay: 1,
      duration: 1,
    },
  },
  hover: {
    scale: 1.2,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    scale: 1,
    transition: {
      duration: 1,
    },
  },
};

const Proyects = () => {
  return (
    <>
      <section className={styles.proyectsContainer}>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1.5 }}
          viewport={{ once: true }}
        >
          Proyectos
        </motion.h2>
        <div className={styles.proyects}>
          <motion.a
            href="https://product-page333.netlify.app/"
            target="_blank"
            className={styles.proyect}
            initial={{ opacity: 0, x: -200 }}
            whileInView="inView"
            whileHover="hover"
            exit="exit"
            variants={variants}
            viewport={{ once: true }}
          >
            <img src="proyect1.jpg" />
            <a
              target="_blank"
              href="https://github.com/alejandroRojasx64/ecommerce-product-page"
            >
              ver en github
            </a>
          </motion.a>
          <motion.a
            href="https://marvelous-cannoli-487362.netlify.app/"
            target="_blank"
            className={styles.proyect}
            initial={{ opacity: 0 }}
            whileInView="inView"
            whileHover="hover"
            exit="exit"
            variants={variants}
            viewport={{ once: true }}
          >
            <img src="proyect2.jpg" />
            <a
              target="_blank"
              href="https://github.com/alejandroRojasx64/news-homepage.git"
            >
              ver en github
            </a>
          </motion.a>
          <motion.div
            className={styles.proyect}
            initial={{ opacity: 0, x: 200 }}
            whileInView="inView"
            whileHover="hover"
            exit="exit"
            variants={variants}
            viewport={{ once: true }}
          >
            <img src="proyect3.jpg" />
            <a
              target="_blank"
              href="https://github.com/alejandroRojasx64/multi-step-form-page.git"
            >
              ver en github
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Proyects;
