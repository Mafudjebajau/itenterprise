import './Hero.css'
import { FaPhone } from 'react-icons/fa6'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content1">
          
          <h1 className='font'><sup >IT</sup>INTERPRISES</h1>
          <h2>Inovação em Diversos Segmentos</h2>
          <p>
            Um conglomerado de excelência, unindo tecnologia, turismo e energia 
            para construir o futuro hoje. Com três empresas especializadas, 
            oferecemos soluções completas e inovadoras.
          </p>
          <div className="hero-buttons">
            <a href="#empresas" className="btn btn-primary"> Conheça Nossas Empresas</a>
            <a href="#contato" className="btn btn-outline" style={{background:'#2c2c2cff'}}><FaPhone color='lime'/> Entre em Contato</a>
          </div>
        </div>
      </div>
      {/* <div className="hero-overlay"></div> */}
    </section>
  )
}

export default Hero