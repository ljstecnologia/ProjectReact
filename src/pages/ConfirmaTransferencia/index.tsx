import "../TransferenciaDoc";
import { Link } from "react-router-dom";
import "./styles.css";
export default function ConfirmaTransferencia() {
  return (
    <main>
      <section id="tf-confirm-container">
        <div className="tf-confirm-transf">
          <h1>Confirmação de Transferência</h1>
        </div>
        <div className="tf-confirm-detalhes ">
          <div className="tf-confirm-detalhes-bottom">
            <h3>Transferência via Doc</h3>
            <p>Insira os dados bancarios:</p>
          </div>
        </div>
      </section>
      <div className="tf-confirm-container">
        <div className="tf-confirm-btn-conclui">Conclui</div>
        <Link to="/">
          <div className="tf-confirm-btn-cancela">Cancela</div>
        </Link>
      </div>
    </main>
  );
}
