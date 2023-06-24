import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Rodape from "./componentes/Rodape";
import Time from './componentes/Time';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Pyro',
      cor: '#E06B69'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Hydro',
      cor: '#82CFFA'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Cryo',
      cor: '#A8C8DB'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Anemo',
      cor: '#8BE0D6'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Geo',
      cor: '#FFBA05'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Dendro',
      cor: '#A6D157'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Electro',
      cor: '#A934FA'
    },
  ]);

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Hu tao',
      classe: 'Lança',
      imagem: 'https://i.pinimg.com/originals/09/fd/32/09fd324fb6c5f5c9a477ab71c1f63f32.jpg',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Venti',
      classe: 'Arco',
      imagem: 'https://i.pinimg.com/originals/f9/55/9c/f9559cdc526c83259cc4122d125fcd75.jpg',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Zhongli',
      classe: 'Lança',
      imagem: 'https://i.pinimg.com/originals/bd/5e/c1/bd5ec17665976c5bdd8e2341c8fb54f9.jpg',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Nahida',
      classe: 'Catalisador',
      imagem: 'https://i.pinimg.com/originals/f5/ba/17/f5ba173ab0da94c3458bc39fef8db39e.jpg',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Raiden Mei',
      classe: 'Lança',
      imagem: 'https://i.pinimg.com/originals/7f/c1/2c/7fc12c9fae08650a08d6d2ed22d6116a.jpg',
      time: times[6].nome
    },
  ]

  const [personagens, setPersonagens] = useState(inicial)

  const aoNovoPersonagemAdicionado = (personagem) => {
    setPersonagens([...personagens, personagem])
  }

  function deletarPersonagem(id) {
    setPersonagens(personagens.filter(personagem => personagem.id !== id));
  }

  function mudarCorDoTime(cor, id) {
    setTimes(times.map(time => {
      if(time.id === id) {
        time.cor = cor;
      }
      return time;
    }));
  }

  function resolverFavorito(id) {
    setPersonagens(personagens.map(personagem => {
      if(personagem.id === id) personagem.favorito = !personagem.favorito;
      return personagem;
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoPersonagemCadastrado={personagem => aoNovoPersonagemAdicionado([...personagens, personagem])} />
      <section className='times'>
      {times.map((time, indice) => 
        <Time
          mudarCor={mudarCorDoTime}
          key={indice}
          time={time}
          personagens={personagens.filter(personagem => personagem.time === time.nome)}
          aoDeletar={deletarPersonagem}
          aoFavoritar={resolverFavorito}
        />)}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
