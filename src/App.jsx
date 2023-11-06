// icons
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";

// componentes
import UserForm from "./components/UserForm/UserForm";
import ReviewForm from "./components/ReviewForm/ReviewForm";
import Thank from "./components/Thank/Thank";

// hooks
import { useForm } from "./hooks/UseForm";

// css
import "./App.css";
import Steps from "./components/Steps/Steps";
import { useState } from "react";

function App() {
  const formTemplate = {
    name: "",
    email: "",
    review: "",
    comment: "",
  };
  
  const [data, setData] = useState(formTemplate);

 

  const updateFieldHandle = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formComponents = [
    <UserForm data={data} updateField={updateFieldHandle}/>,
    <ReviewForm data={data} updateField={updateFieldHandle}/>,
    <Thank data={data} />,
  ];

  const { currentComponent, currentStep, changeStep, isLastStep, isFirstStep } =
    useForm(formComponents);

  return (
    <div className="app">
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>
          Ficamos felizes com a sua compra, utilize o formulário abaixo para
          avaliar o produto.
        </p>
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep} />

        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="input-container">{currentComponent}</div>

          <div className="actions">
            {!isFirstStep && (
              <button type="button" onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
            )}

            {!isLastStep ? (
              <button type="submit">
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type="submit">
                <span>Enviar</span>
                <FiSend />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

//  fazer a estrutura das outras paginas

export default App;
