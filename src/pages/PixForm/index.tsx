import "./styles.css";
import React, { useState } from "react";

export default function PixForm() {
  const [mostraInput, setmostraInput] = useState(false);
  const [celular, setCelular] = useState("");
  const [email, setEmail] = useState("");
  const [cpf_cnpj, setCpf_Cnpj] = useState("");
  const [chave_aleatoria, setChave_Aleatoria] = useState("");

  const handleLabelClick = () => {
    setmostraInput(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    console.log("celular:", celular);
    console.log("Email:", email);
    console.log("cpf_cnpj:", cpf_cnpj);
    console.log("chave_aleatoria:", chave_aleatoria);
    // Limpar os campos após o envio, se desejar
    setcelular("");
    setEmail("");
    setcpf_cnpj("");
    setchave_aleatoria("");
    setmostraInput(false); // Ocultar o formulário após o envio
  };

  return (
    <div className="tf-tipo-pix">
      <div onClick={handleLabelClick}>
        <label>Celular:</label>
        <label>Email:</label>
        <label>CPF/CNPJ:</label>
        <label>Chave aleatória</label>
      </div>

      {mostraInput && (
        <fieldset className="container-tipo-pix forma-pix">
          <form onSubmit={handleSubmit}>
            <div className="forma-pix-nome">
              <label htmlFor="celular">Nome do Favorecido:</label>
              <input
                className="tf-input-pix"
                type="text"
                id="nomefav"
                value={celular}
                onChange={(e) => setCelular(e.target.value)}
              />
            </div>
            <div className="forma-pix-valor">
              <label htmlFor="email">Valor do Pix:</label>
              <input
                className="tf-input-pix"
                type="text"
                id="valor"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="forma-pix-chave">
              <label htmlFor="chave_aleatoria">Chave Pix:</label>
              <input
                className="tf-input-pix"
                type="text"
                id="chave_aleatoria"
                value={chave_aleatoria}
                onChange={(e) => setChave_Aleatoria(e.target.value)}
              />
            </div>
          </form>
        </fieldset>
      )}
    </div>
  );
}
