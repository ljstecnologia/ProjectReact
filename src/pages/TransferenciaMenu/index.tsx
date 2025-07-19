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
              <a href="#">Transferência via Pix</a>
            </div>
            <div className="tf-menuinicial-btn-tipo">
              <a href="#">Transferência via Doc</a>
            </div>
          </div>
      </section>

      </main>
  );
}