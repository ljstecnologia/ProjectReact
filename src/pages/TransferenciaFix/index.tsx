import './styles.css'
import Header from "../../components/Header";

export default function TransfPix(){
  return(
    <>
    <Header />
      <main>
      <section id="tf-pix-container">
        <div  className='tf-pix-transf'>
          <h1>Transferência de valores</h1>
        </div>
        <div className="tf-pix-detalhes ">
          <div className="tf-pix-detalhes-bottom">
            <h3>Transferência vias Pix</h3>
            <p>Insira os dados do Pix:</p>
          </div>
        </div>
      </section>

    </main>

    </>

  );
}