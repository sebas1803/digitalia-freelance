import Button from 'react-bootstrap/Button';
import image from "../resources/receipt.png"
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='home-container'>
      <h1 className='home-title'>Bienvenido freelancer!</h1>
      <h1 className='home-title'>Sistema de registro de recibos</h1>
      <img className='home-image' src={image} aria-label="receipt-menu" />
      <Link to="/register-receipt"><Button className='home-button' variant="primary" size='lg'>Ingresar</Button></Link>
    </div>
  );
}

export default Home;