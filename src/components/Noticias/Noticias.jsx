import { useState, useEffect, useRef } from 'react'
import './Noticias.css'
import { FaCalendar } from 'react-icons/fa6'

const Noticias = () => {
  const [noticiaAtiva, setNoticiaAtiva] = useState(0)
  const [pausado, setPausado] = useState(false)
  const carrosselRef = useRef(null)

  const noticias = [
    {
      id: 1,
      empresa: 'ITSOFT',
      titulo: 'Sistema de Gestão Empresarial com IA é Lançado',
      resumo: 'Plataforma integrada utiliza inteligência artificial para otimizar processos de negócios e aumentar eficiência operacional em 40%.',
      conteudo: 'A ITSOFT anunciou hoje o lançamento do ITSmart Suite, uma plataforma completa de gestão empresarial alimentada por inteligência artificial. A solução integra departamentos como RH, Financeiro e Operações, utilizando algoritmos de machine learning para prever tendências e automatizar tarefas repetitivas.',
      data: '15 Jan 2024',
      autor: 'Carlos Silva - Diretor de Tecnologia',
      categoria: 'Lançamento',
      imagem: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
      tags: ['Tecnologia', 'IA', 'Gestão']
    },
    {
      id: 2,
      empresa: 'IT TRAVEL',
      titulo: 'Expansão Internacional com 12 Novos Destinos na Europa',
      resumo: 'Empresa amplia portfólio com destinos premium e pacotes personalizados para famílias.',
      conteudo: 'A IT TRAVEL consolidou sua expansão no mercado europeu com a adição de 12 novos destinos, incluindo Portugal, Espanha e Itália. A estratégia inclui parcerias com redes hoteleiras premium e operadoras locais para oferecer experiências autênticas.',
      data: '12 Jan 2024',
      autor: 'Ana Costa - Diretora Comercial',
      categoria: 'Expansão',
      imagem: 'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=800&h=400&fit=crop',
      tags: ['Turismo', 'Europa', 'Expansão']
    },
    {
      id: 3,
      empresa: 'IT FUEL',
      titulo: 'Tecnologia de Pagamento por Biometria Implementada',
      resumo: 'Sistema de reconhecimento facial reduz tempo de transação em 70% e aumenta segurança.',
      conteudo: 'Todos os postos IT FUEL agora contam com tecnologia de pagamento por reconhecimento facial. O sistema, desenvolvido em parceria com startups de fintech, permite que clientes cadastrados realizem pagamentos em menos de 3 segundos.',
      data: '10 Jan 2024',
      autor: 'Roberto Santos - Gerente de Inovação',
      categoria: 'Inovação',
      imagem: 'https://images.unsplash.com/photo-1627637454032-ffc8b3dc5c40?w=800&h=400&fit=crop',
      tags: ['Tecnologia', 'Pagamentos', 'Segurança']
    },
    {
      id: 4,
      empresa: 'ITSOFT',
      titulo: 'Workshop Gratuito: Transformação Digital para PMEs',
      resumo: 'Evento online ensina estratégias práticas de digitalização com cases reais de sucesso.',
      conteudo: 'A ITSOFT realizará nos dias 25 e 26 de Janeiro um workshop online e gratuito sobre transformação digital para pequenas e médias empresas. O evento contará com cases de clientes que aumentaram sua receita em até 200%.',
      data: '08 Jan 2024',
      autor: 'Mariana Lima - Líder de Treinamento',
      categoria: 'Evento',
      imagem: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop',
      tags: ['Educação', 'Digital', 'Workshop']
    },
    {
      id: 5,
      empresa: 'IT TRAVEL',
      titulo: 'Pacotes de Lua de Mel com Experiências Exclusivas',
      resumo: 'Novos roteiros incluem jantares privativos, spa para casal e traslados de helicóptero.',
      conteudo: 'A IT TRAVEL lançou uma linha exclusiva de pacotes para lua de mel com experiências premium em destinos como Maldivas, Santorini e Bali. Os pacotes incluem hospedagem em resorts 5 estrelas.',
      data: '05 Jan 2024',
      autor: 'João Pereira - Gerente de Produto',
      categoria: 'Lançamento',
      imagem: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=400&fit=crop',
      tags: ['Luxo', 'Romântico', 'Premium']
    }
  ]

  const eventos = [
    {
      data: '25 JAN',
      titulo: 'Workshop: IA para Negócios',
      local: 'Online - ITSOFT',
      horario: '14h às 18h'
    },
    {
      data: '02 FEV',
      titulo: 'Feira de Turismo 2024',
      local: 'Centro de Convenções - IT TRAVEL',
      horario: '09h às 20h'
    },
    {
      data: '15 FEV',
      titulo: 'Inauguração IT FUEL Express',
      local: 'Zona Sul - IT FUEL',
      horario: '10h às 22h'
    }
  ]

  // Auto-play do carrossel
  useEffect(() => {
    if (pausado) return

    const intervalo = setInterval(() => {
      setNoticiaAtiva((prev) => (prev + 1) % noticias.length)
    }, 5000) // Muda a cada 5 segundos

    return () => clearInterval(intervalo)
  }, [pausado, noticias.length])

  const proximaNoticia = () => {
    setNoticiaAtiva((prev) => (prev + 1) % noticias.length)
  }

  const noticiaAnterior = () => {
    setNoticiaAtiva((prev) => (prev - 1 + noticias.length) % noticias.length)
  }

  const irParaNoticia = (index) => {
    setNoticiaAtiva(index)
  }

  return (
    <section id="noticias" className="section noticias">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2 className='black'>Notícias em <b className="danger">Destaque</b> </h2>
          <p>Acompanhe as últimas atualizações do grupo ITINTERPRISES</p>
        </div>

        <div className="noticias-content">
          {/* Carrossel Principal */}
          <div className="carrossel-container" data-aos="fade-right">
            <div
              className="carrossel-track"
              ref={carrosselRef}
              style={{ transform: `translateX(-${noticiaAtiva * 100}%)` }}
            >
              {noticias.map((noticia, index) => (
                <div
                  key={noticia.id}
                  className={`carrossel-slide ${index === noticiaAtiva ? 'active' : ''}`}
                  onMouseEnter={() => setPausado(true)}
                  onMouseLeave={() => setPausado(false)}
                >
                  <div className="slide-imagem">
                    <img
                      src={noticia.imagem}
                      alt={noticia.titulo}
                      loading="lazy"
                    />
                    <div className="slide-overlay">
                      <span className="empresa-tag">{noticia.empresa}</span>
                      <span className="categoria-tag">{noticia.categoria}</span>
                    </div>
                  </div>

                  <div className="slide-conteudo">
                    <div className="slide-meta">
                      <span className="slide-data">{noticia.data}</span>
                      <span className="slide-tempo">3 min leitura</span>
                    </div>

                    <h3>{noticia.titulo}</h3>
                    <p>{noticia.resumo}</p>

                    <div className="slide-tags">
                      {noticia.tags.map(tag => (
                        <span key={tag} className="tag">#{tag}</span>
                      ))}
                    </div>

                    <div className="slide-actions">
                      <button className="btn-ler-mais">
                        Ler Notícia Completa
                      </button>
                      <div className="controles-manuais">
                        <button
                          className="btn-controle"
                          onClick={() => setPausado(!pausado)}
                        >
                          {pausado ? '▶' : '⏸'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Controles do Carrossel */}
            <button
              className="carrossel-controle controle-anterior"
              onClick={noticiaAnterior}
              aria-label="Notícia anterior"
            >
              ‹
            </button>
            <button
              className="carrossel-controle controle-proximo"
              onClick={proximaNoticia}
              aria-label="Próxima notícia"
            >
              ›
            </button>

            {/* Indicadores */}
            <div className="carrossel-indicadores">
              {noticias.map((_, index) => (
                <button
                  key={index}
                  className={`indicador ${index === noticiaAtiva ? 'active' : ''}`}
                  onClick={() => irParaNoticia(index)}
                  aria-label={`Ir para notícia ${index + 1}`}
                />
              ))}
            </div>

            {/* Contador */}
            <div className="carrossel-contador">
              <span className="contador-atual">{noticiaAtiva + 1}</span>
              <span className="contador-total">/{noticias.length}</span>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="noticias-sidebar" data-aos="fade-left">
            <div className="sidebar-card">
              <h3><FaCalendar /> Próximos Eventos</h3>
              <div className="eventos-lista">
                {eventos.map((evento, index) => (
                  <div key={index} className="evento-item">
                    <div className="evento-data">
                      <strong>{evento.data}</strong>
                    </div>
                    <div className="evento-info">
                      <h4>{evento.titulo}</h4>
                      <span>{evento.local}</span>
                      <small>{evento.horario}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>


          </aside>
        </div>

      </div>
    </section>
  )
}

export default Noticias