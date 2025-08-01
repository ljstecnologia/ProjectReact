import { Link } from "react-router-dom";
import "./styles.css";
import { useState } from "react";

export default function TransfPix() {
  const [visibleInput, setVisibleInput] = useState(null);

  const handleLabelClick = (inputId) => {
    setVisibleInput(inputId === visibleInput ? null : inputId);
  };

  return (
    <>
      <main>
        <section id="tf-pix-container">
          <div className="tf-pix-transf">
            <h1>Transferencia de valores</h1>
          </div>
          <div className="tf-pix-detalhes">
            <div className="tf-pix-detalhes-bottom">
              <h3>Transferência via Pix</h3>
              <p>Insira as informações para o Pix:</p>
            </div>
          </div>
        </section>
      </main>
      <div className="tf-tipo-pix">
        <label onClick={() => handleLabelClick("input1")}>Celular</label>
        {visibleInput === "input1" && (
          <input
            type="text"
            id="input1"
            placeholder=" Informe o celular com DDD"
          />
        )}

        <label onClick={() => handleLabelClick("input2")}>E-mail</label>
        {visibleInput === "input2" && (
          <input type="text" id="input2" placeholder=" Informe o E-mail" />
        )}

        <label onClick={() => handleLabelClick("input3")}>CPF/CNPJ</label>
        {visibleInput === "input3" && (
          <input type="text" id="input3" placeholder=" Insira o CPF ou CNPJ" />
        )}

        <label onClick={() => handleLabelClick("input4")}>
          Chave aleatória
        </label>
        {visibleInput === "input4" && (
          <input
            type="text"
            id="input4"
            placeholder=" Informe a chave aleatória"
          />
        )}
      </div>

      <div className="tf-pix-btn-container">
        <Link to="/ConfirmaTransferencia">
          <div className="tf-doc-btn-envia">Enviar</div>
        </Link>
        <Link to="/">
          <div className="tf-doc-btn-volta">Voltar</div>
        </Link>
      </div>
    </>
  );
}
