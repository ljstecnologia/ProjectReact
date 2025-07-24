import { Link } from 'react-router-dom';
import './styles.css'

export default function TransfDoc(){
  return(
    
    <main>
      <section  id="tf-doc-container">
          <div  className='tf-doc-transf'>
            <h1>Transferência de valores</h1>
          </div>
          <div className="tf-doc-detalhes ">
            
            <div className="tf-doc-detalhes-bottom">
              <h3>Transferência via Doc</h3>
              <p>Insira os dados bancarios:</p>
            </div>
          </div>
      </section>
      <div className="tf-doc-btn-container">
        <div className="tf-doc-btn-envia">
          <Link to="/ConfirmaTransferencia">
            Enviar
          </Link>
        </div>
        <div className="tf-doc-btn-volta">
          <Link to="/">
            Voltar
          </Link>
        </div>
      </div>
    </main>

  );
}