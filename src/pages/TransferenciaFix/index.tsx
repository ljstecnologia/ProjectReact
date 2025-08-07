import { Link } from "react-router-dom";
import "./styles.css";
import { useState } from "react";
import PixForm from "../PixForm";

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
      <div>
        <PixForm />
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
