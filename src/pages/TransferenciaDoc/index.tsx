import './styles.css'
import Header from "../../components/Header";

export default function TransfDoc(){
  return(
    <>
    <Header />
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
    </main>

    </>

  );
}