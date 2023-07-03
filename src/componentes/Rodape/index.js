import './rodape.css'

const Rodape = () => {
    return (<footer className='footer'>
        <section>
        <ul>
            <li className='redes__sociais'>
                <a href="google.com" target="_blank">
                    <img src="/imagens/fb.png" alt="" />
                </a>
            </li>
            <li className='redes__sociais'>
                <a href="google.com" target="_blank">
                    <img src="/imagens/tw.png" alt="" />
                </a>
            </li>
            <li className='redes__sociais'>
                <a href="google.com" targent="_blank">
                    <img src="/imagens/ig.png" alt="" />
                </a>
            </li>
        </ul>
        </section>
        <section>
            <p>
                Desenvolvido por Ana Giulia.
            </p>
        </section>
        </footer>)
}

export default Rodape