import '../styles.css';
import Header from "../../components/Header";

export default function Transferência(){
  return(
    <>
      <Header />
      <main>
        <section  id="menu-inicia-tf-container">
          <div  className='menu-inicial-tf'>
            <h1>Transferência de valores</h1>
          </div>
          <div className="menu-inicial-tf-detalhes">
            
            <div className="menu-inicial-tf-detalhes-bottom">
              <h2>Transferência</h2>
              <p>Escolha o tipo de Transferência.</p>
            </div>
          </div>
      
          <div className="menu-inicial-tipo-tf-container">
            <div className="menu-inicial-btn-tipo-tf">
              <a href="area-pix.html">Transferência via Pix</a>
            </div>
            <div className="menu-inicial-btn-tipo-tf">
              <a href="area-doc.html">Transferência via Doc</a>
            </div>
          </div>
      </section>

      </main>
    </>
  );
}