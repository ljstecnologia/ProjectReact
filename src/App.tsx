import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../src/pages/TransferenciaMenu/styles.css';
import './App.css'
import TransfDoc from './pages/TransferenciaDoc';
import Home from './pages';
import TransfPix from './pages/TransferenciaFix';
import TransferenciaMenu from './pages/TransferenciaMenu';
import ConfirmaTransferencia from './pages/ConfirmaTransferencia';


export default function App() {

  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<TransferenciaMenu />}></Route>
        <Route path='transferenciamenu' element={<TransferenciaMenu />}></Route>
        <Route path='transferenciadoc' element={<TransfDoc />}></Route>
        <Route path='transferenciapix' element={<TransfPix />}></Route>
        <Route path='confirmatransferencia' element={<ConfirmaTransferencia />}></Route>
        
      </Route>
    </Routes>
  </BrowserRouter>
    
  );
}

