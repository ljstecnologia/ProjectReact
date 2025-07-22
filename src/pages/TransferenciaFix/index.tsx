import { Link } from 'react-router-dom';
import './styles.css'

export default function TransfPix(){
  return(
    
    <main>
      <section  id="tf-pix-container">
          <div  className='tf-pix-transf'>
            <h1>Transferência de valores</h1>
          </div>
          <div className="tf-pix-detalhes ">
            
            <div className="tf-pix-detalhes-bottom">
              <h3>Transferência via Pix</h3>
              <p>Insira as informações para o Pix:</p>
            </div>
          </div>
      </section>
      <div className="tf-pix-btn-container">
        <div className="tf-pix-btn-envia">
          <Link to="/ConfirmaTransferencia">
            <a href="#">Enviar</a>
          </Link>
        </div>
        <div className="tf-pix-btn-volta">
          <Link to="/">
            <a href="#">Voltar</a>
          </Link>
        </div>
      </div>
    </main>

  );
}