import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import styles from "./services.module.scss";

export function Services() {
  const [serviceType, setServiceType] = useState("Desenvolvimento de Site");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
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

  async function handleQuoteRequest(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_a4q3tbp",
        "template_i30d3kk",
        {
          name: name,
          email: email,
          message: `Solicitação de Orçamento - ${serviceType.toUpperCase()}\n\nDetalhes:\n${details}`,
        },
        "pOPPiKzktnr3je8st"
      );

      setStatusMessage("Solicitação de orçamento enviada");
      setStatusType("success");

      setName("");
      setEmail("");
      setDetails("");
    } catch (err) {
      
      console.log("EMAILJS ERROR:", err);
      setStatusMessage("Erro ao enviar solicitação");
      setStatusType("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Serviços & Encomendas</h2>
        <p className={styles.sectionSubtitle}>
          Precisa de uma solução sob medida? Escolha o serviço e peça seu orçamento.
        </p>

        <div className={styles.servicesGrid}>
          <div
            className={`${styles.serviceCard} ${
              serviceType === "Desenvolvimento de Site" ? styles["serviceCard--active"] : ""
            }`}
            onClick={() => setServiceType("Desenvolvimento de Site")}>

            <h3 className={styles.serviceCard__title}>Criação de Sites</h3>
            <p className={styles.serviceCard__desc}>
              Landing pages, portfólios e sites institucionais modernos, responsivos,
              otimizados e com visual profissional.
            </p>
            <span className={styles.serviceCard__badge}>Selecionar para orçamento</span>
          </div>

          <div
            className={`${styles.serviceCard} ${
              serviceType === "Design de Slides / Apresentações" ? styles["serviceCard--active"] : ""
            }`}
            onClick={() => setServiceType("Design de Slides / Apresentações")}>

            <h3 className={styles.serviceCard__title}>Slides para Apresentações</h3>
            <p className={styles.serviceCard__desc}>
              Design visual impactante para TCCs, projetos acadêmicos, pitching de negócios
              e apresentações corporativas.
            </p>
            <span className={styles.serviceCard__badge}>Selecionar para orçamento</span>
          </div>
        </div>

        <div className={styles.quoteFormWrapper}>
          <h3 className={styles.quoteFormTitle}>
            Solicitar orçamento: <span>{serviceType}</span>
          </h3>

          <form className={styles.form} onSubmit={handleQuoteRequest}>
            <div className={styles.form__group}>
              <input className={styles.form__input} type="text" placeholder="Seu nome completo" value={name} onChange={(e) => setName(e.target.value)} required/>
            </div>

            <div className={styles.form__group}>
              <input className={styles.form__input} type="email" placeholder="Seu e-mail de contato" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            </div>

            <div className={styles.form__group}>
              <textarea className={`${styles.form__input} ${styles["form__input--textarea"]}`} placeholder="Descreva o que você precisa (ex: quantidade de telas/slides, prazo ideal, referências...)" rows={4} value={details} onChange={(e) => setDetails(e.target.value)} required/>
            </div>

            <button className={styles.form__button} type="submit" disabled={loading || !details.trim() || !email.trim() || !name.trim()}>
              {loading ? "Enviando..." : "Pedir orçamento"}
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
        </div>
      </div>
    </section>
  );
}