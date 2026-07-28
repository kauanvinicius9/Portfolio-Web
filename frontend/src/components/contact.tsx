import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import styles from "./contact.module.scss";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | "">("");

  useEffect(() => {
    if (statusMessage) {
      const timer = setTimeout(() => {
        setStatusMessage("");
        setStatusType("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [statusMessage]);

  async function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_a4q3tbp",
        "template_i30d3kk",
        {
          name: name,
          email: email,
          message: message,
        },
        "pOPPiKzktnr3je8st"
      );

      setStatusMessage("E-mail enviado com sucesso!");
      setStatusType("success");

      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.log("EMAILJS ERROR:", err);
      setStatusMessage("Erro ao enviar e-mail. Tente novamente.");
      setStatusType("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className={styles.form} onSubmit={sendEmail}>
      <div className={styles.form__group}>
        <input className={styles.form__input} type="text" placeholder="Seu nome" value={name} onChange={(e) => setName(e.target.value)} required/>
      </div>

      <div className={styles.form__group}>
        <input className={styles.form__input} type="email" placeholder="Seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)} required/>
      </div>

      <div className={styles.form__group}>
        <textarea className={`${styles.form__input} ${styles['form__input--textarea']}`} placeholder="Sua mensagem" rows={5} value={message} onChange={(e) => setMessage(e.target.value)} required/>
      </div>

      <button className={styles.form__button} type="submit" disabled={loading}>
        {loading ? "Enviando..." : "Enviar mensagem"}
      </button>

      {statusMessage && (
        <div
          className={`${styles.form__alert} ${
            statusType === "success"
              ? styles["form__alert--success"]
              : styles["form__alert--error"]
          }`}>
          {statusMessage}
        </div>
      )}
    </form>
  );
}