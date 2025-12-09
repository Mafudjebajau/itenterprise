import './Footer.css'
import { FaAt, FaLocationArrow, FaPhone, FaWhatsapp } from "react-icons/fa6"

const Footer = () => {
  return (
    <footer id="contato" className="footer">
      <div className="container">
        <div className="footer-content" data-aos="fade-up">
          <div className="footer-section">
            <h3>ITINTERPRISES</h3>
            <p>Inovação e excelência em diversos segmentos, construindo o futuro hoje.</p>
          </div>
          <div className="footer-section">
            <h4>Empresas</h4>
            <ul>
              <li><a href="#">ITSOFT</a></li>
              <li><a href="#">IC TRAVEL</a></li>
              <li><a href="#">MATRIX ENERGY</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contato</h4>
            <p><FaAt color='white' /> Email: itinterprises@gmail.com</p>
            <p><FaPhone color='green' /> Telefone: +245 955 066 969 / +245 965 336 699</p>
            <p><FaWhatsapp color='green' />Whatsapp: +245 955 066 969</p>
            <p><FaLocationArrow color='red' /> Endereço: Avenida Cidade de Lisboa, Bissau, Guiné-Bissau</p>
          </div>


          <div className="footer-section">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d976.1587979730562!2d-15.589182933849871!3d11.860789338255977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xee6c4d602b258d1%3A0x501eb8201184e2bf!2sVC66%2BGWC%2C%20Avenida%20Cidade%20de%20Lisboa%2C%20Bissau%201234%2C%20Guin%C3%A9-Bissau!5e0!3m2!1spt-PT!2s!4v1765290791428!5m2!1spt-PT!2s" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>


        <div className="footer-bottom" data-aos="fade-up" data-aos-delay="200">
          <p>&copy; {new Date().getFullYear()} ITINTERPRISES. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer