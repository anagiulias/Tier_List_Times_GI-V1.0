import './Personagem.css'
import { RiCloseCircleFill } from 'react-icons/ri';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const Personagem = ({ personagem, corSecundaria, aoDeletar, aoFavoritar }) => {
    function favoritar() {
        aoFavoritar(personagem.id);
    }
    return (<div className='personagem'>
        <RiCloseCircleFill 
            size={25} 
            className="deletar" 
            onClick={() => aoDeletar(personagem.id)}
        />
        <div className='cabecalho' style={{ backgroundColor: corSecundaria }}>
            <img src={personagem.imagem} alt={personagem.nome} />
        </div>
        <div className='rodape'>
            <h4>{personagem.nome}</h4>
            <h5>{personagem.classe}</h5>
            <div className='favoritar'>
                {personagem.favorito 
                    ? <AiFillHeart color='#ff0000' size={25} onClick={favoritar} /> 
                    : <AiOutlineHeart size={25} onClick={favoritar} />
                }
            </div>
        </div>
    </div>)
}

export default Personagem