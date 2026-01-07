/* Componentização de um formulário real de e-mail, onde a mensagem será realmente enviada
ao meu e-mail pessoal */

import { useState } from "react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); 
  

  async function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    try {
      // Formulário de email, conectada ao site do EmailJS
      await emailjs.send(
        "service_bu2b5bx",
        "template_mganp5c",
        { 
          name: name,
          email: email,
          message: message, 
        },
        "UDeyd973nxgS5hG4l" // Chave pública
      );

      alert("Mensagem enviada");
      setName("");
      setEmail("");
      setMessage("");

    } catch (err) {
      console.log("EMAILJS ERROR:", err);
      alert("Erro ao enviar");
      
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={sendEmail}>
      <div className="mb-3">
        <input className="form-control" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} required/>
      </div>

      <div className="mb-3">
        <input className="form-control"type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
      </div>

      <div className="mb-3">
        <textarea className="form-control" placeholder="Mensagem" rows={4} value={message} onChange={(e) => setMessage(e.target.value)} required/>
      </div>

      <button className="btn btn-primary btn-size" type="submit" disabled={loading}>
        {loading ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
}