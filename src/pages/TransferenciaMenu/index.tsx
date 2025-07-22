import { Link } from 'react-router-dom';
import './styles.css';

export default function TransferenciaMenu(){
  return(
   
      <main>
        <section  id="tf-menuinicial-container">
          <div  className='tf-menuinicial'>
            <h1>Transferência de valores</h1>
          </div>
          <div className="tf-menuinicial-detalhes">
            
            <div className="tf-menuinicial-detalhes-bottom">
              <h2>Transferência</h2>
              <p>Escolha o tipo de Transferência.</p>
            </div>
          </div>
      
          <div className="tf-menuinicial-tipo-container">
            <div className="tf-menuinicial-btn-tipo">
              <Link to="/TransferenciaPix">
                <a href="#">Transferência via Pix</a>
              </Link>
             
            </div>
            <div className="tf-menuinicial-btn-tipo">
              <Link to="TransferenciaDoc">
                <a href="#">Transferência via Doc</a>
              </Link>
              
            </div>
          </div>
      </section>

      </main>
  );
}