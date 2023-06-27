import Personagem from '../Personagem'
import './time.css'
import hexToRgba from 'hex-to-rgba'

const Time = ({ time, personagens, aoDeletar, mudarCor, aoFavoritar }) => {
    return (

        personagens.length > 0 && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba (time.cor, '0.6') }}>
            <input type='color' className='input-cor' value={time.cor} onChange={evento => { 
                mudarCor(evento.target.value, time.id);
            }} />
            <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
            <div className='personagens'>
                {personagens.map((personagem, indice) =>
                        <Personagem 
                            key={indice} 
                            personagem={personagem} 
                            corSecundaria={time.cor} 
                            aoDeletar={aoDeletar}
                            aoFavoritar={aoFavoritar}
                        />
                )}
            </div>
        </section>
    )
}

export default Time