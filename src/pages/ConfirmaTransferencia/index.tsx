import Header from "../../components/Header";

export default function ConfirmaTransferencia(){
  return (
  <>
<Header />

    <div id="tf-confim-container" className="tf-confirm-detalhes">
      <div className="menu-transf-detalhes-top">
        
      </div>
      <div className="tf-confirm-info">
        <h4>Confirme as informações inseridas em seguida clique em Concluir!</h4>
      </div>
          
      <fieldset>
        <div className="tf-confirm-dados" id="dados"></div>
      </fieldset>
      <form className="tf-confirm-btn-form">
        <button className="tf-confim-btn-conclui" type="submit">Concluir</button>
          
      </form>
          
    </div>
  </>

);
}
