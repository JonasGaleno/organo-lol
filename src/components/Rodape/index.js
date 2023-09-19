import './index.css';

const Rodape = () => {

    return (
        <footer className='footer'>
            <div className='redes'>
                <img src="/images/fb.png" alt="Facebook"></img>
                <img src="/images/tw.png" alt="Twitter"></img>
                <a href='https://www.instagram.com/jonas_galeno/'>
                    <img src="/images/ig.png" alt="Instagram"></img>
                </a>
            </div>
            <div className='logo'>
                <img src="/images/logo.png" alt="Logo da aplicação organo"></img>
            </div>
            <div className='autor'>
                Desenvolvido por Jonas
            </div>
        </footer>
    );
}

export default Rodape;
