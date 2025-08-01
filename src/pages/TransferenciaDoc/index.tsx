import { Link } from "react-router-dom";
import "./styles.css";
import Formulario from "../Formulario/form";

export default function TransfDoc() {
  return (
    <main>
      <section id="tf-doc-container">
        <div className="tf-doc-transf">
          <h1>Transferência de valores</h1>
        </div>
        <div className="tf-doc-detalhes ">
          <div className="tf-doc-detalhes-bottom">
            <h3>Transferência via Doc</h3>
            <p>Insira os dados bancarios:</p>
          </div>
        </div>
        <div>
          <Formulario />
        </div>
      </section>
      {
        <div className="tf-doc-btn-container">
          <Link to="/ConfirmaTransferencia">
            <button className="tf-doc-btn-envia" type="submit">
              Enviar
            </button>
          </Link>
          <Link to="/">
            <div className="tf-doc-btn-volta">Voltar</div>
          </Link>
        </div>
      }
    </main>
  );
}
