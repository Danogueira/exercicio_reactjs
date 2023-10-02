import React, { useState } from 'react';
import './App.css';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    const alturaMetros = altura / 100;
    const imcCalculado = peso / (alturaMetros * alturaMetros);
    setImc(imcCalculado.toFixed(2));

    // Definir classificação com base no IMC
    if (imcCalculado < 18.5) {
      setClassificacao('Abaixo do Peso');
    } else if (imcCalculado >= 18.5 && imcCalculado < 24.9) {
      setClassificacao('Peso Normal');
    } else if (imcCalculado >= 25 && imcCalculado < 29.9) {
      setClassificacao('Sobrepeso');
    } else {
      setClassificacao('Obesidade');
    }
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <div className="form">
        <input
          type="text"
          placeholder="Altura (cm)"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
        <input
          type="text"
          placeholder="Peso (kg)"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
        <button onClick={calcularIMC}>Calcular</button>
      </div>
      {imc && (
        <div className="resultado">
          <h2>Seu IMC é {imc}</h2>
          <p>Classificação: {classificacao}</p>
        </div>
      )}
    </div>
  );
}

export default App;

