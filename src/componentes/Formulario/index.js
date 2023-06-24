import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = ({ aoPersonagemCadastrado, times }) => {

    const [nome, setNome] = useState('') 
    const [classe, setClasse] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) =>{
        evento.preventDefault()
        console.log('form enviado', nome, classe, imagem, time )
        aoPersonagemCadastrado({
            nome,
            classe,
            imagem,
            time
        })
        setNome('')
        setClasse('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o seu card</h2>
                <CampoTexto 
                    obrigatorio 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio
                    label="Classe/Arma" 
                    placeholder="Digite sua classe"
                    valor={classe}
                    aoAlterado={valor => setClasse(valor)} 
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio
                    label="Elemento" 
                    itens={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao texto='Criar card' />
            </form>
        </section>
    )
}

export default Formulario