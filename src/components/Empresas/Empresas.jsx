import { useNavigate } from 'react-router-dom'
import './Empresas.css'

const Empresas = () => {
  const empresas = [
    {
      id: 1,
      nome: "ITSOFT",
      descricao: "Soluções em tecnologia e desenvolvimento de software sob medida para seu negócio.",
      icone: "💻",
      cor: "linear-gradient(135deg, #E53935, #C62828)",
      detalhes: "Desenvolvimento de sistemas, aplicativos mobile, consultoria em TI e soluções em nuvem."
    },
    {
      id: 2,
      nome: "IC TRAVEL",
      descricao: "Agência de viagens especializada em experiências únicas e pacotes personalizados.",
      icone: "✈️",
      cor: "linear-gradient(135deg, #212121, #424242)",
      detalhes: "Pacotes nacionais e internacionais, hospedagem premium e roteiros exclusivos."
    },
    {
      id: 3,
      nome: "MATRIX ENERGY",
      descricao: "Postos de combustível com qualidade, preço justo e atendimento diferenciado.",
      icone: "⛽",
      cor: "linear-gradient(135deg, #D32F2F, #B71C1C)",
      detalhes: "Combustíveis de alta qualidade, conveniência 24h e serviços automotivos."
    }
  ]

  const navigate = useNavigate()

  return (
    <section id="empresas" className="section empresas">
      <div className="container">
        <div className="section-title">
          <h2 className='black'>Nossas <b className='danger'>Empresas</b></h2>
          <p style={{color:"black"}}>Diversidade de segmentos, mesma excelência em qualidade</p>
        </div>
        <div className="empresas-grid">
          {empresas.map(empresa => (
            <div key={empresa.id} className="empresa-card">
              <div 
                className="empresa-icone"
                style={{ background: empresa.cor }}
              >
                <span>{empresa.icone}</span>
              </div>
              <h3>{empresa.nome}</h3>
              <p className="empresa-descricao">{empresa.descricao}</p>
              <p className="empresa-detalhes">{empresa.detalhes}</p>
              <div className="empresa-actions">
                <a  className="btn btn-primary" onClick={(e)=>{
                  e.preventDefault();
                  navigate("/"+empresa.nome.toLowerCase().replace(" ",""))
                }}>Saiba Mais</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Empresas