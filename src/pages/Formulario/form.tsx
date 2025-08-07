import { useState } from "react";
import "./styles.css";

type FormData = {
  nome: string;
  valor: string;
  agencia: string;
  banco: string;
  conta: string;
};
function App() {
  const [fullName, setFullName] = useState<string>();
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    valor: "",
    agencia: "",
    banco: "",
    conta: "",
  });

  function handleInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  }
  function handleFormSubmit(event: any) {
    event.preventDefault();
    setFullName(formData.nome + " " + formData.valor);
  }

  return (
    <>
      <fieldset className="doc-formulario">
        <form onSubmit={handleFormSubmit}>
          <div className="doc-favorecido">
            <label>Nome: </label>
            <input
              name="nome"
              value={formData.nome}
              type="text"
              placeholder="Nome do favorecido"
              onChange={handleInputChange}
            />
          </div>
          <div className="doc-favorecido-valor">
            <label>Valor: </label>
            <input
              name="valor"
              value={formData.valor}
              type="text"
              onChange={handleInputChange}
            />
          </div>
          <div className="doc-favorecido-bancos">
            <label>Banco: </label>
            <select name="banco" value={formData.banco} id="banco" />
          </div>
          <div className="doc-favorecido-ag">
            <label>Agencia: </label>
            <input
              name="agencia"
              value={formData.agencia}
              type="text"
              onChange={handleInputChange}
            />
          </div>
          <div className="doc-favorecido-conta">
            <label>Conta: </label>
            <input
              name="conta"
              value={formData.conta}
              type="text"
              onChange={handleInputChange}
            />
          </div>
        </form>
      </fieldset>
    </>
  );
}
export default App;
