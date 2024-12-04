import Skills from "./components/Skills";
import Proyects from "./components/Proyects";
import styles from "./styles/main.module.scss";
import { Icon } from "@iconify-icon/react";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <section className={styles.main}>
        <div className={styles.profileContact}>
          <motion.div
            className={styles.greeting}
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1 }}
          >
            <img
              className={styles.avatar}
              src="/avatar.png"
            />
            <h1>
              Hola, soy Alejandro
              <br /> Desarrollador web front end
            </h1>
          </motion.div>
          <div className={styles.contact}>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "backIn", duration: 1 }}
            >
              Contactame
            </motion.h2>
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "backIn", duration: 1.3 }}
              target="_blank"
              href="/"
            >
              <Icon icon="devicon:linkedin" />
              <span className={styles.social}>Linkedin</span>
            </motion.a>
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "backIn", duration: 1.6 }}
              target="_blank"
              href="https://github.com/AlejandroRojas1"
            >
              <Icon icon="icomoon-free:github" />
              <span className={styles.social}>Github</span>
            </motion.a>
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "backIn", duration: 1.9 }}
            >
              <Icon icon="cib:whatsapp" />
              <span className={styles.social}>3705-035504</span>
            </motion.a>

            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "backIn", duration: 2.2 }}
              action="https://formsubmit.co/alejandrofabianrojas64@gmail.com"
              method="POST"
              className={styles.sendEmail}
            >
              <label>Enviame un email:</label>
              <input
                className={styles.email}
                type="email"
                placeholder="email"
                name="mail"
                required
              />
              <textarea
                className={styles.message}
                placeholder="mensaje"
                name="mensaje"
                required
              />
              <input className={styles.submit} type="submit" value="Enviar" />
              <input type="hidden" name="_next" value="http://localhost:5173" />
              <input type="hidden" name="_captcha" value="false" />
            </motion.form>
          </div>
        </div>
        <motion.div
          className={styles.aboutMe}
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
        >
          <h2>Sobre Mi</h2>
          <p>
            Programador autodidacta y entusiasta de la informática. Me apasionan
            los videojuegos y la informática en general. Desde chico, siempre
            sentí mucha curiosidad por cómo se construían los programas y
            páginas web. Esta curiosidad me llevó a descubrir el mundo de la
            programación, desde entonces quedé completamente fascinado.
            <br />
            <br />
            Me gusta aprender cosas nuevas y tambien disfruto mucho compartiendo
            mis conocimientos con los demas.
          </p>
          <img src="/react-logo.svg" alt="logo-react" />
        </motion.div>
      </section>
      <Skills />
      <Proyects />
    </>
  );
}

export default App;
