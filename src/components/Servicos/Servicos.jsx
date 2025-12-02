import { useNavigate } from 'react-router-dom'
import './Servicos.css'

const Servicos = () => {
  const servicos = [
    {
      empresa: "ITSOFT",
      icone: "💻",
      cor: "#E53935",
      servicos: [
        { nome: "Desenvolvimento de Software", descricao: "Sistemas personalizados para seu negócio" },
        { nome: "Aplicativos Mobile", descricao: "Apps nativos e híbridos para iOS e Android" },
        { nome: "Consultoria em TI", descricao: "Otimização de processos e infraestrutura" },
        { nome: "Soluções em Nuvem", descricao: "Migração e gestão de ambientes cloud" }
      ]
    },
    {
      empresa: "IC TRAVEL",
      icone: "✈️",
      cor: "#212121",
      servicos: [
        { nome: "Pacotes de Viagem", descricao: "Nacionais e internacionais com melhor custo" },
        { nome: "Reserva de Hotéis", descricao: "Parcerias com redes hoteleiras mundiais" },
        { nome: "Passagens Aéreas", descricao: "Melhores rotas e companhias aéreas" },
        { nome: "Roteiros Personalizados", descricao: "Experiências únicas sob medida" }
      ]
    },
    {
      empresa: "MATRIX ENERGY",
      icone: "⛽",
      cor: "#C62828",
      servicos: [
        { nome: "Combustível Premium", descricao: "Gasolina, etanol e diesel de qualidade" },
        { nome: "Conveniência 24h", descricao: "Produtos e serviços a qualquer hora" },
        { nome: "Lava Rápido", descricao: "Limpeza completa e cuidados especiais" },
        { nome: "Assistência Veicular", descricao: "Manutenção e reparos especializados" }
      ]
    }
  ]
  const navigate = useNavigate();

  return (
    <section id="servicos" className="section servicos">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Nossos <b className='danger'>Serviços</b></h2>
          <p>Excelência e qualidade em cada segmento de atuação</p>
        </div>
        <div className="servicos-grid">
          {servicos.map((grupo, index) => (
            <div
              key={index}
              className="servico-grupo"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="servico-header">
                <div
                  className="servico-icone"
                  style={{ backgroundColor: grupo.cor }}
                >
                  <span>{grupo.icone}</span>
                </div>
                <h3 className='danger'>{grupo.empresa}</h3>
              </div>
              <ul className="servico-lista">
                {grupo.servicos.map((servico, idx) => (
                  <li key={idx} className="servico-item">
                    <div className="servico-info">
                      <h4>{servico.nome}</h4>
                      <p className='black'>{servico.descricao}</p>

                    </div>
                    <div className="servico-dot"></div>
                  </li>
                ))}
              </ul>
              <div className="empresa-actions" style={{ marginTop: '10px' }}>
                <a className="btn btn-primary" onClick={(e) => {
                  e.preventDefault();
                  navigate("/" + grupo.empresa.toLowerCase().replace(" ", ""))
                }}>Saiba Mais</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Servicos