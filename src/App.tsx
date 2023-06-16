import { useState } from 'react'
import './App.css'

import logoImg from './assets/logo.png'

function App() {
  const [textoFrase, setTextoFrase] = useState("")
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0)

  const allFrases = [
    {
      id: 1,
      nome: <strong>Motivação</strong>,
      frases: [
        'Siga os bons e aprenda com eles.',
        'O bom-senso vale mais do que muito conhecimento.',
        'O riso é a menor distância entre duas pessoas.', 
        'Deixe de lado as preocupações e seja feliz.',
        'Realize o óbvio, pense no improvável e conquiste o impossível.',
        'Acredite em milagres, mas não dependa deles.',
        'A maior barreira para o sucesso é o medo do fracasso.'
      ]
    },
    {
      id: 2,
      nome: <strong>Bíblicas</strong>,
      frases: [
      'Seca-se a erva, e murcha a flor; mas a palavra de nosso Deus subsiste eternamente.', 
      'Porque a palavra de Deus é viva e eficaz, e mais cortante do que qualquer espada de dois gumes, e penetra até a divisão de alma e espírito, e de juntas e medulas, e é apta para discernir os pensamentos e intenções do coração.', 
      'O Senhor é o meu pastor, nada me faltará.',
      'Bem-aventurado o homem que põe no Senhor a sua confiança, e que não respeita os soberbos nem os que se desviam para a mentira.',
      'Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia.',
      'O Senhor dos Exércitos está conosco; o Deus de Jacó é o nosso refúgio.',
      'Aquietai-vos, e sabei que eu sou Deus; serei exaltado entre os gentios; serei exaltado sobre a terra.',
      ]
    },
  ]


  function handleSwitchCategory(index: number){
    setCategoriaSelecionada(index);
  }

  function gerarFrase(){
    let numeroAleatorio = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length)
    setTextoFrase(`"${allFrases[categoriaSelecionada].frases[numeroAleatorio]}"`)
  }

  return (
    <div className="container">
      <img
        alt="Logo frases"
        src={logoImg}
        className="logo"
      />

      <h2 className="title">Categorias</h2>
      <section className="category-area">
        {allFrases.map( (item, index) => (
          <button 
          key={item.id}
          className="category-button"
          style={{ 
            borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 2 : 0,
            borderColor: "#1fa4db"
           }}

          onClick={ () => handleSwitchCategory(index) }
          >
            {item.nome}
          </button>
        ) )}
      </section>

      <button className="button-frase" onClick={gerarFrase}>Gerar frase</button>

      {textoFrase !== '' && <p className="textoFrase">{textoFrase}</p> }

    </div>
  )
}

export default App
