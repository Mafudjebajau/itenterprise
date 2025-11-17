import { useState, useEffect } from 'react'
import { FaClock, FaShield, FaRocket, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Itsoft = () => {
    const [servicoAtivo, setServicoAtivo] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    // Dados do Slider
    const heroSlides = [
        {
            id: 1,
            titulo: "Consultoria em TI Especializada",
            descricao: "Otimizamos sua infraestrutura tecnológica com soluções personalizadas que aumentam a eficiência e reduzem custos.",
            imagem: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
            icone: "💼",
            corDestaque: "#E53935"
        },
        {
            id: 2,
            titulo: "Segurança Eletrónica Avançada",
            descricao: "Proteção completa para seu negócio com sistemas de vigilância e segurança de última geração.",
            imagem: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop",
            icone: "🔒",
            corDestaque: "#2563EB"
        },
        {
            id: 3,
            titulo: "Desenvolvimento de Software",
            descricao: "Soluções personalizadas que transformam suas ideias em aplicações poderosas e eficientes.",
            imagem: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop",
            icone: "💻",
            corDestaque: "#059669"
        },
        {
            id: 4,
            titulo: "Infraestrutura de Redes",
            descricao: "Implementamos redes robustas e seguras para garantir a conectividade do seu negócio.",
            imagem: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&h=600&fit=crop",
            icone: "🌐",
            corDestaque: "#7C3AED"
        },
        {
            id: 5,
            titulo: "Suporte em Nuvem",
            descricao: "Migração e gestão cloud para escalabilidade e flexibilidade do seu negócio.",
            imagem: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop",
            icone: "☁️",
            corDestaque: "#DC2626"
        }
    ]

    // Auto-play do slider
    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            setServicoAtivo((prev) => (prev + 1) % heroSlides.length)
        }, 5000) // Muda a cada 5 segundos

        return () => clearInterval(interval)
    }, [isAutoPlaying, heroSlides.length])

    const nextSlide = () => {
        setServicoAtivo((prev) => (prev + 1) % heroSlides.length)
    }

    const prevSlide = () => {
        setServicoAtivo((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    }

    const goToSlide = (index) => {
        setServicoAtivo(index)
    }

    return (
        <div className="itsoft-page">
            {/* Hero Section com Slider */}
            <section
                className="itsoft-hero"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
            >
                {/* Background Slides */}
                <div className="hero-slides">
                    {heroSlides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`hero-slide ${index === servicoAtivo ? 'active' : ''}`}
                            style={{
                                backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${slide.imagem})`
                            }}
                        />
                    ))}
                </div>

                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text">
                            {/* Indicador do Slide Atual */}
                            <div className="slide-indicator">
                                <span className="slide-number">
                                    {String(servicoAtivo + 1).padStart(2, '0')}
                                </span>
                                <span className="slide-total">/{String(heroSlides.length).padStart(2, '0')}</span>
                            </div>

                            <h1>ITSOFT</h1>

                            {/* Título e Descrição Dinâmicos */}
                            <div className="hero-slide-content">
                                <h2 style={{ color: heroSlides[servicoAtivo]?.corDestaque }}>
                                    {heroSlides[servicoAtivo]?.titulo}
                                </h2>
                                <p style={{ width: "100%" }}>
                                    {heroSlides[servicoAtivo]?.descricao}
                                </p>
                            </div>

                            <div className="hero-buttons">
                                <button className="btn-primary">Solicitar Diagnóstico</button>
                                <button className="btn-outline">Falar com Especialista</button>
                            </div>

                            <div className="hero-features">
                                <div className="feature-item">
                                    <span className="feature-icon"><FaClock /></span>
                                    <span>Suporte 24/7</span>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-icon"><FaShield style={{ color: 'dodgerblue' }} /></span>
                                    <span>Segurança Garantida</span>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-icon"><FaRocket style={{ color: 'red' }} /></span>
                                    <span>Soluções Personalizadas</span>
                                </div>
                            </div>
                        </div>

                        {/* Visual do Slide Atual */}
                        <div className="hero-visual">
                            <div className="slide-preview">
                                <div
                                    className="preview-image"
                                    style={{
                                        backgroundImage: `url(${heroSlides[servicoAtivo]?.imagem})`,
                                        borderColor: heroSlides[servicoAtivo]?.corDestaque
                                    }}
                                >
                                    <div className="preview-overlay">
                                        <span className="preview-icon">{heroSlides[servicoAtivo]?.icone}</span>
                                        <span className="preview-text">ITSOFT</span>
                                    </div>
                                </div>

                                {/* Indicadores de Slides */}
                                <div className="slide-dots">
                                    {heroSlides.map((_, index) => (
                                        <button
                                            key={index}
                                            className={`dot ${index === servicoAtivo ? 'active' : ''}`}
                                            onClick={() => goToSlide(index)}
                                            style={{
                                                backgroundColor: index === servicoAtivo ? heroSlides[servicoAtivo]?.corDestaque : '#fff'
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Controles de Navegação */}
                    <div className="hero-controls">
                        <button className="control-btn prev" onClick={prevSlide}>
                            <FaChevronLeft />
                        </button>
                        <button className="control-btn next" onClick={nextSlide}>
                            <FaChevronRight />
                        </button>
                    </div>
                </div>

                <div className="hero-overlay"></div>
            </section>

            {/* Sobre */}
            <section className="itsoft-sobre section">
                <div className="container">
                    <div className="sobre-content">
                        <div className="sobre-text">
                            <h2>Sobre <b className="danger">ITtech soft</b></h2>
                            <p style={{ color: "#222", textAlign: "justify" }}>
                                A IT_ENTERPRISE SARL (TECH & SOFT) é uma empresa de TI especializada em desenvolvimento de software, Comunicação visual, infraestruturas e redes, em segurança de informação e eletrônica.
                                Nosso compromisso é oferecer soluções tecnológicas inovadoras e personalizadas que atendam às demandas do mercado atual, com o objetivo de melhorar os negócios dos nossos parceiros, reduzir inventários e altos custos com aquisição de novos equipamentos e mão de obra técnica. Acreditamos convictamente que a integração das novas tecnologias da informação e comunicação nos processos de produção, venda e prestação de serviços possibilita um impacto positivo no mercado com o intuito de melhorar significativamente a qualidade e a eficiência das atividades dos nossos parceiros.
                                Para tal concebemos, desenvolvemos e implementamos, em estreita colaboração com os nossos parceiros, soluções tecnológicas e ferramentas para resolução dos problemas das organizações/projetos empresariais e entidades públicas e privadas, também criamos programas de formação e Consultadoria Informática.

                                Oferecemos aos nossos parceiros serviços de assistência informática, apoio remoto, assim como manutenção de servidores, redes e todos os serviços inerentes aos mesmos, internet, correio eletrônico, segurança e proteção.

                                As avenças de suporte informático mensais ilimitadas adaptam-se às necessidades das empresas e dos seus usuários, garantindo suporte permanente e uma resolução rápida dos problemas informáticos com tempos de resposta imediatos.
                            </p>

                        </div>

                        <div className="sobre-imagem">
                            <img
                                src={itsoftEquipe}
                                alt="Equipe ITSOFT" />
                            <div className="stats-grid pt-2">
                                <div className="stat-item">
                                    <div className="stat-number">500+</div>
                                    <div className="stat-label">Projetos Concluídos</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number">99.9%</div>
                                    <div className="stat-label">Uptime Garantido</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number">24/7</div>
                                    <div className="stat-label">Suporte Técnico</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number">15min</div>
                                    <div className="stat-label">Tempo Médio de Resposta</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Serviços */}
            {/* Serviços */}
            <section className="itsoft-servicos section">
                <div className="container">
                    <div className="section-title">
                        <h2 className='black'>Nossos <b className="danger">Serviços</b></h2>
                        <p style={{ color: "#222" }}>Soluções completas de TI para empresas de todos os tamanhos</p>
                    </div>

                    <div className="servicos-content">
                        {/* Grid de Serviços - Estilo Dataroad */}
                        <div className="servicos-grid-dataroad">
                            {servicos.map((servico, index) => (
                                <div
                                    key={servico.id}
                                    className={`servico-card-dataroad ${servicoAtivo === index ? 'active' : ''}`}
                                    onClick={() => setServicoAtivo(index)}
                                >
                                    <div className="card-header">
                                        <div className="servico-icone-dataroad">
                                            {servico.icone}
                                        </div>
                                        <h3>{servico.titulo}</h3>
                                    </div>
                                    <div className="card-body">
                                        <p>{servico.descricao}</p>
                                        <ul className="servico-features">
                                            {servico.detalhes.slice(0, 3).map((detalhe, idx) => (
                                                <li key={idx}>✓ {detalhe}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="card-footer">
                                        <span className="saiba-mais">
                                            Saiba mais ›
                                        </span>
                                    </div>
                                    <div className="card-hover-effect"></div>
                                </div>
                            ))}
                        </div>

                        {/* Detalhe do Serviço Selecionado */}
                        <div className="servico-detalhe-dataroad">
                            {servicos[servicoAtivo] && (
                                <div className="detalhe-container">
                                    <div className="detalhe-header">
                                        <div className="detalhe-icone">{servicos[servicoAtivo].icone}</div>
                                        <div className="detalhe-titulo">
                                            <h3>{servicos[servicoAtivo].titulo}</h3>
                                            <p>{servicos[servicoAtivo].descricao}</p>
                                        </div>
                                    </div>

                                    <div className="detalhe-content-grid">
                                        <div className="detalhe-imagem">
                                            <img
                                                src={servicos[servicoAtivo].imagem}
                                                alt={servicos[servicoAtivo].titulo}
                                            />
                                            <div className="imagem-overlay">
                                                <span>ITSOFT Solutions</span>
                                            </div>
                                        </div>

                                        <div className="detalhe-info">
                                            <div className="info-section">
                                                <h4>O que oferecemos:</h4>
                                                <ul className="detalhe-lista-completa">
                                                    {servicos[servicoAtivo].detalhes.map((detalhe, idx) => (
                                                        <li key={idx}>
                                                            <span className="check-icon">✓</span>
                                                            {detalhe}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="info-section">
                                                <h4>Benefícios:</h4>
                                                <div className="beneficios-grid">
                                                    <div className="beneficio-item">
                                                        <span className="beneficio-icone">⚡</span>
                                                        <div>
                                                            <strong>Eficiência</strong>
                                                            <span>Otimização de processos</span>
                                                        </div>
                                                    </div>
                                                    <div className="beneficio-item">
                                                        <span className="beneficio-icone">🛡️</span>
                                                        <div>
                                                            <strong>Segurança</strong>
                                                            <span>Proteção garantida</span>
                                                        </div>
                                                    </div>
                                                    <div className="beneficio-item">
                                                        <span className="beneficio-icone">💰</span>
                                                        <div>
                                                            <strong>Economia</strong>
                                                            <span>Redução de custos</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="detalhe-actions">
                                                <button className="btn-primary-dataroad">
                                                    <span className="btn-icon">📋</span>
                                                    Solicitar Orçamento
                                                </button>
                                                <button className="btn-secondary-dataroad">
                                                    <span className="btn-icon">💬</span>
                                                    Falar com Especialista
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Cases de Sucesso */}
            <section className="itsoft-cases section">
                <div className="container">
                    <div className="section-title">
                        <h2 className='black'>Casos de <b className="danger">Sucesso</b></h2>
                        <p style={{ color: "#222" }}>Resultados reais que entregamos para nossos clientes</p>
                    </div>

                    <div className="cases-grid">
                        {cases.map((caseItem, index) => (
                            <div key={index} className="case-card">
                                <div className="case-imagem">
                                    <img src={caseItem.imagem} alt={caseItem.empresa} />
                                    <div className="case-overlay">
                                        <span className="case-empresa">{caseItem.empresa}</span>
                                    </div>
                                </div>
                                <div className="case-content">
                                    <div className="case-info">
                                        <div className="case-item">
                                            <strong>Desafio:</strong>
                                            <p>{caseItem.desafio}</p>
                                        </div>
                                        <div className="case-item">
                                            <strong>Solução ITSOFT:</strong>
                                            <p>{caseItem.solucao}</p>
                                        </div>
                                        <div className="case-item">
                                            <strong>Resultado:</strong>
                                            <p className="resultado">{caseItem.resultado}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tecnologias */}
            <section className="itsoft-tech section">
                <div className="container">
                    <div className="section-title">
                        <h2 className='black'>Tecnologias que <b className="danger">Trabalhamos</b></h2>
                        <p style={{ color: '#222' }}>Parcerias com os principais fabricantes e tecnologias do mercado</p>
                    </div>

                    <div className="tech-grid">
                        {tecnologias.map((tech, index) => (
                            <div key={index} className="tech-card">
                                <div className="tech-categoria">{tech.categoria}</div>
                                <h4>{tech.nome}</h4>
                                <div className="tech-certificacoes">
                                    <span className="cert-badge">Certificado</span>
                                    <span className="cert-badge">Parceiro Oficial</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Processo de Trabalho */}
            <section className="itsoft-processo section">
                <div className="container">
                    <div className="section-title">
                        <h2 className='black'>Como <b className="danger">Trabalhamos</b></h2>
                        <p style={{ color: '#222' }}>Metodologia comprovada para garantir o sucesso do seu projeto</p>
                    </div>

                    <div className="processo-steps">
                        <div className="processo-item">
                            <div className="step-number">01</div>
                            <h4>Diagnóstico</h4>
                            <p>Análise detalhada das necessidades e infraestrutura atual</p>
                        </div>
                        <div className="processo-item">
                            <div className="step-number">02</div>
                            <h4>Proposta</h4>
                            <p>Plano personalizado com soluções e orçamento transparente</p>
                        </div>
                        <div className="processo-item">
                            <div className="step-number">03</div>
                            <h4>Implementação</h4>
                            <p>Execução com equipas especializadas e mínima interrupção</p>
                        </div>
                        <div className="processo-item">
                            <div className="step-number">04</div>
                            <h4>Suporte</h4>
                            <p>Acompanhamento contínuo e manutenção preventiva</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="itsoft-cta section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Precisa de Soluções em TI?</h2>
                        <p>Entre em contacto para uma consultoria gratuita e sem compromisso</p>
                        <div className="cta-buttons">
                            <button className="btn-primary">
                                <FaPhone color='green' /> Ligar Agora
                            </button>
                            <button className="btn-outline">
                                <FaEnvelope color='white' /> Enviar Email
                            </button>
                            <button className="btn-outline">
                                <FaWhatsapp color='lime' /> WhatsApp
                            </button>
                        </div>
                        <div className="cta-info">
                            <p>📞 <strong>+245 00 000 00 00</strong> |  <FaEnvelope color='white' /><strong>itsoft@itinterprises.com</strong></p>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Itsoft