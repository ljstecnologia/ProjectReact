import { Link } from 'react-router-dom';
import barraPgw from '../../assets/barra_pgw.jpg';
import logoPgw from '../../assets/logo_pgw.jpg';
export default function Header (){
  return(
    <header>
        <div className='tf-container'>
          <div>
            <img className='imagem-barra' src={barraPgw} alt="Barra vermelha" />
          </div>
          <div className="logo-Pgw">
            <Link to="/">
                <img src={logoPgw} alt="Logo pgwpay" />
            </Link>
            
          </div>
        </div>
    </header>
  );
}