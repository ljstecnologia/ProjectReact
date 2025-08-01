import { Link } from "react-router-dom";
import "./styles.css";

export default function TransferenciaMenu() {
  return (
    <main>
      <section id="tf-menuinicial-container">
        <div className="tf-menuinicial">
          <h1>Transferência de valores</h1>
        </div>
        <div className="tf-menuinicial-detalhes">
          <div className="tf-menuinicial-detalhes-bottom">
            <h2>Transferência</h2>
            <p>Escolha o tipo de Transferência.</p>
          </div>
        </div>

        <div className="tf-menuinicial-tipo-container">
          <Link to="/TransferenciaPix">
            <div className="tf-menuinicial-btn-tipo">
              {" "}
              Transferência via Pix
            </div>
          </Link>
          <Link to="TransferenciaDoc">
            <div className="tf-menuinicial-btn-tipo">Transferência via Doc</div>
          </Link>
        </div>
      </section>
    </main>
  );
}
