import './Footer.css'
import {FaAt, FaLocationArrow, FaPhone} from "react-icons/fa6"

const Footer = () => {
  return (
    <footer id="contato" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>ITINTERPRISES</h3>
            <p>Inovação e excelência em diversos segmentos, construindo o futuro hoje.</p>
          </div>
          <div className="footer-section">
            <h4>Empresas</h4>
            <ul>
              <li><a href="#">ITSOFT</a></li>
              <li><a href="#">IT TRAVEL</a></li>
              <li><a href="#">IT FUEL</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contato</h4>
            <p><FaAt color='white'/> Email: itinterprises@gmail.com</p>
            <p><FaPhone color='green'/> Telefone: (+245) 000 00 00</p>
            <p><FaLocationArrow color='red'/> Endereço: Rua de Embaixada de Portugal, Bissau, Guiné-Bissau</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} ITINTERPRISES. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer