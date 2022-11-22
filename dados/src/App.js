import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ArmazenarDados from './components/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://avatars.githubusercontent.com/u/78830679?v=4" 
          nome="Nathalia Dionizio" 
          descricao="Oi, me chamo Nathalia. Trabalho atualmente como Qa Testes . Mas estudo front end para imigrar de área."
        />

        <div className='Dados'>
          <ArmazenarDados
          imagem="https://cdn-icons-png.flaticon.com/512/552/552486.png"
          email="E-mail: nathalia@emailfake.com"
          /> 

          <ArmazenarDados
          imagem="https://i.pinimg.com/564x/cf/00/e9/cf00e9dbd04b0619b8a3b0a8bf9f7051.jpg"
          endereco="Endereço: Rua fake, número 10, bairro fake, estado fake."
          />
          </div>
        
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Axenya" 
          descricao="Analista QA, testes automatizados com Robot framework, metodologia ágil." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
          texto="Linkedin" 
        />        

        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/25/25231.png" 
          texto="GitHub" 
        />        
      </div>
    </div>
  );
}

export default App;
