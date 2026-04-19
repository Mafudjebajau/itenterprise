import { useState, useEffect } from 'react'
import './Itsoft.css'
import { FaClock, FaCloud, FaComputer, FaEnvelope, FaLock, FaPhone, FaRocket, FaShield, FaWhatsapp, FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import { FaWifi } from 'react-icons/fa'
import HeaderItsoft from '../../components/Header/HeaderItsoft'
import itsoftEquipe from '../../assets/it-team.webp'
import mulherAoTelephone from "../../assets/mulheraotelephone.jpeg"
import desenvolvimentodesoftware from "../../assets/desenvolimentodesoftware.jpg"
import logoTechSoft from '../../assets/techsoft-logo.png'
import techimg from '../../assets/bg-1.jpg'

import ToTopButton from '../../components/Adicionais/ToTopButton'
import { Link } from 'react-router-dom'

const Itsoft = () => {
    const [heroSlideAtivo, setHeroSlideAtivo] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    const [showButton, setShowButton] = useState(false)

    // Dados do Slider Hero
    const heroSlides = [
        {
            id: 1,
            titulo: "TECH SOFT",
            descricao: "A IT tech Soft atua na área das TI's e integra a prestação de serviços informática e consultoria informática, com a missão de desenvolver soluções que ajudem as empresas a crescer.",
            imagem: logoTechSoft,
            icone: "💼",
            corDestaque: "#E53935"
        },
        {
            id: 2,
            titulo: "Assistência Informática 24H",
            descricao: "Oferecemos assistência rápida e eficiente para resolver problemas técnicos comuns, como dificuldades com software, hardware, conectividade e outros incidentes diários.",
            imagem: desenvolvimentodesoftware,
            icone: "🔒",
            corDestaque: "#2563EB"
        },
        {
            id: 3,
            titulo: "Suporte de TI Local e Remota 24H",
            descricao: "O suporte de TI especialista ajuda na solução de qualquer problema com eficiência. Temos em nosso portfólio, expertises estratégicas para produção em escritórios, indústrias e qualquer tipo de seguimento.",
            imagem: techimg,
            icone: "💻",
            corDestaque: "#059669"
        },
        {
            id: 4,
            titulo: "Infraestrutura de Redes",
            descricao: "Implementamos redes robustas e seguras para garantir a conectividade do seu negócio.",
            imagem: mulherAoTelephone,
            icone: "🌐",
            corDestaque: "#7C3AED"
        },
        {
            id: 5,
            titulo: "Suporte em Nuvem 24/7",
            descricao: "Migração e gestão cloud para escalabilidade e flexibilidade do seu negócio.",
            imagem: mulherAoTelephone,
            icone: "☁️",
            corDestaque: "#DC2626"
        }
    ]

    // Auto-play do slider hero
    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            setHeroSlideAtivo((prev) => (prev + 1) % heroSlides.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [isAutoPlaying, heroSlides.length])

    const nextHeroSlide = () => {
        setHeroSlideAtivo((prev) => (prev + 1) % heroSlides.length)
    }

    const prevHeroSlide = () => {
        setHeroSlideAtivo((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    }

    const goToHeroSlide = (index) => {
        setHeroSlideAtivo(index)
    }

    const servicos = [
        {
            id: 1,
            icone: '💻',
            titulo: 'Desenvolvimento de Software',
            descricao:
                'Somos o parceiro estratégico que sua empresa precisa para soluções digitais de sucesso que resolvam problemas reais! Primeiramente, começamos com o entendimento do problema a ser resolvido. É muito importante que os resultados alcancem as expectativas para justificar o investimento, e isso é algo que nós, da IT Tech Soft, garantimos neste processo! Entender como funciona o processo de desenvolvimento e quais aspectos merecem atenção é imprescindível na hora de definir o foco do seu negócio e a empresa parceira que o guiará nesse caminho.',
            detalhes: [
                'Levantamento de Requisitos',
                'Definição de Arquitetura',
                'Implementação / Desenvolvimento',
                'Testes e Validações',
                'Sustentação e Manutenção da Aplicação',
            ],
            imagem: mulherAoTelephone,
        },
        {
            id: 2,
            icone: '🌐',
            titulo: 'Infraestrutura de Redes de TI',
            descricao:
                'Implementação e gestão de redes corporativas seguras e eficientes.',
            detalhes: [
                'Instalação e configuração de servidores',
                'Instalação de redes estruturadas',
                'Instalação de redes wireless gerenciadas',
                'Certificação de redes estruturadas',
                'Gestão de redes informáticas',
                'Instalação de redes Wi-Fi',
                'Projetos de redes',
                'Cabeamento de rede',
                'Implementação de Firewalls e VPNs',
                'Proteção de redes',
                'Proteção de servidores e internet',
                'Redundância de internet e segurança de firewalls e acessos remotos',
            ],
            imagem:
                'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop',
        },
        {
            id: 3,
            icone: '📞',
            titulo: 'Central IP PBX - Telefonia IP',
            descricao:
                'Sistemas de comunicação unificada com VoIP profissional.',
            detalhes: [
                'Instalação de servidor IP PBX',
                'Instalação de central telefônica IP PBX local ou em nuvem',
                'Telefones IP de mesa, Wi-Fi e aplicativos móveis',
                'Softwares para chamadas telefônicas em celulares e computadores',
                'Manutenção e suporte técnico em centrais telefônicas',
            ],
            imagem:
                'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
        },
        {
            id: 4,
            icone: '🎓',
            titulo: 'Curso de Informática – Básico ao Avançado',
            descricao:
                'O conhecimento em informática tornou-se fundamental na vida das pessoas e nas empresas. Saber utilizar um computador e dominar suas ferramentas básicas é essencial para diversas tarefas do dia a dia e do meio acadêmico — e pode fazer toda a diferença para se destacar no mercado.',
            detalhes: [
                'Windows, Pacote Office 365, Internet, E-mail e Segurança',
                'Microsoft Word',
                'Microsoft PowerPoint',
                'Excel, Writer',
                'Calc',
                'Impressão',
            ],
            imagem:
                'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=400&fit=crop',
        },
        {
            id: 5,
            icone: '🔒',
            titulo:
                'Serviços de Segurança Eletrônica (Institucional e Residencial)',
            descricao:
                'Instalação de câmeras de vigilância, cercas elétricas residenciais, fechaduras eletrônicas com câmeras e controle de acesso biométrico.',
            detalhes: [
                'Instalação de câmeras de vigilância CCTV',
                'Projetos e manutenção de sistemas CCTV',
                'Instalação de cerca elétrica residencial e projetos de segurança',
                'Sistemas de alarme e instalação de motores eletrônicos para portões',
                'Instalação de fechaduras eletrônicas com câmeras',
                'Controle de acesso biométrico',
                'Reconhecimento facial',
                'RFID (Identificação por Rádio Frequência)',
                'Cartões de proximidade',
                'Códigos QR e leitores magnéticos',
                'Controle de acesso por senha',
                'Autenticação multifator (MFA)',
                'Instalação de campainhas sem fio',
            ],
            imagem:
                'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop',
        },
        {
            id: 6,
            icone: '☁️',
            titulo: 'Suporte em Nuvem',
            descricao:
                'Oferecemos assistência rápida e eficiente para resolver problemas técnicos comuns — como dificuldades com software, hardware, conectividade e outros incidentes diários. Nosso suporte especializado em TI garante eficiência e produtividade. Temos expertise em ambientes corporativos, industriais e home office, com profissionais preparados para resolver e prevenir qualquer problema de TI.',
            detalhes: [
                'Soluções para problemas em servidores na nuvem',
                'Firewall de acesso a servidores em nuvem',
                'Suporte e manutenção de desktops em nuvem',
                'Backup em nuvem',
                'Migração de sites',
                'Monitoramento de sistemas em nuvem',
                'Microsoft Office 365',
            ],
            imagem:
                'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
        },
        {
            id: 7,
            icone: '📋',
            titulo: 'Comunicação Visual',
            descricao:
                'Criamos logotipos, paletas de cores, placas, painéis, indicadores e sistemas de sinalização eletrônica, como painéis de LED. Também desenvolvemos cartões de visita, crachás, materiais audiovisuais, banners, infográficos, e-mails marketing, animações e muito mais.',
            detalhes: [
                'Identidade visual',
                'Criação de logotipos',
                'Paletas de cores e tipografia',
                'Manual da marca',
                'Tratamento de imagem e fotos conceituais',
                'Ícones e ilustrações',
                'Sinalização digital e painéis eletrônicos',
                'Design gráfico',
                'Cartões de visita e crachás',
                'Cartão de serviço biométrico',
                'Envelopamento e adesivagem em veículos, fachadas e outras superfícies',
                'Web Design & UX Design',
                'Planejamento de interface, pesquisa, mapas, wireframes, mockups e prototipagem',
            ],
            imagem:
                'https://images.unsplash.com/photo-1563013541-fab15c843346?w=600&h=400&fit=crop',
        },
        {
            id: 8,
            icone: '💼',
            titulo: 'Consultoria em Informática',
            descricao:
                'Nossos serviços de consultoria profissional em TI são essenciais para ajudar organizações a navegar no complexo mundo da tecnologia. Realizamos análises completas do ambiente para identificar necessidades em hardware, software, serviços e metodologias. Nossa consultoria especializada em licenciamento garante conformidade e redução de custos, além de promover melhorias na produtividade. Auxiliamos parceiros na definição de estratégias tecnológicas alinhadas aos seus objetivos de negócio. Também oferecemos consultoria em gestão de projetos, processos e implantação de novas ferramentas, promovendo inovação e competitividade.',
            detalhes: [
                'Licenciamento de softwares',
                'Consultoria profissional de TI',
                'Avaliação de infraestruturas existentes',
                'Manutenção e suporte técnico',
                'Planejamento estratégico e operacional',
            ],
            imagem:
                'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
        },
        {
            id: 9,
            icone: '🔐',
            titulo: 'Segurança da Informação',
            descricao:
                'Nossa equipe especializada identifica vulnerabilidades, implementa correções e garante a disponibilidade, integridade e confidencialidade dos dados.',
            detalhes: [
                'Auditorias completas',
                'Monitoramento de servidores (locais e em nuvem)',
                'Proteção de e-mails',
                'Antivírus corporativo',
                'Firewall e backup de segurança',
                'Gestão de senhas e cofres digitais',
            ],
            imagem:
                'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop',
        },
        {
            id: 10,
            icone: '🧰',
            titulo: 'Suporte em Sistemas',
            descricao:
                'Oferecemos assistência rápida e eficiente para resolver problemas técnicos comuns — como falhas de software, hardware, conectividade e outros incidentes diários. Nosso suporte especializado garante eficiência e estabilidade. Atendemos escritórios, indústrias e home offices, com profissionais capacitados para prevenir e corrigir qualquer problema de TI.',
            detalhes: [
                'Correção de bugs em sistemas',
                'Correção de falhas de segurança',
                'Licenciamento de Windows, Office e outros sistemas',
                'Instalação e configuração de sistemas operacionais',
                'Configuração de acessos e permissões',
                'Diagnóstico de funcionamento',
                'Virtualização de servidores',
                'Backup e recuperação de dados',
            ],
            imagem:
                'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop',
        },
    ];


    const cases = [
        {
            empresa: 'Hotel Premium Lisbon',
            desafio: 'Sistema de segurança obsoleto e rede instável',
            solucao: 'Instalação de câmeras IP + rede estruturada + telefonia IP',
            resultado: '60% mais segurança e 40% menos chamadas de suporte',
            imagem: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop'
        },
        {
            empresa: 'Escola Secundária Tech',
            desafio: 'Falta de infraestrutura para aulas de informática',
            solucao: 'Laboratório completo + formação professores + suporte cloud',
            resultado: 'Capacitação de 200+ alunos em TI anualmente',
            imagem: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop'
        },
        {
            empresa: 'Clínica Médica Digital',
            desafio: 'Sistema de gestão inadequado e backup insuficiente',
            solucao: 'Software personalizado + backup cloud + segurança electrónica',
            resultado: '100% disponibilidade e compliance com RGPD',
            imagem: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=400&h=300&fit=crop'
        }
    ]

    const tecnologias = [
        { nome: 'Cisco & Ubiquiti', categoria: 'Redes e Telefonia' },
        { nome: 'Microsoft Azure & AWS', categoria: 'Cloud Computing' },
        { nome: 'Python & JavaScript', categoria: 'Desenvolvimento' },
        { nome: 'VMware & Docker', categoria: 'Virtualização' },
        { nome: 'Hikvision & Dahua', categoria: 'Segurança Eletrónica' },
        { nome: 'Microsoft 365 & Adobe', categoria: 'Licenciamento' }
    ]
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })

        const handleScroll = () => {
            setShowButton(window.scrollY > 200)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    // useEffect(()=>{
    //     console.log(servicos.filter(item => {
    //    return item.id === '1' 
    // }))
    // },[servicos])



    return (
        <><HeaderItsoft />
            {showButton && <ToTopButton />}

            <div className="itsoft-page">
                {/* Hero Section com Slider */}
                <section
                    className="itsoft-hero" id='home'
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                >
                    {/* Background Slides */}
                    <div className="hero-slides">
                        {heroSlides.map((slide, index) => (
                            <div
                                key={slide.id}
                                className={`hero-slide ${index === heroSlideAtivo ? 'active' : ''}`}
                                style={{
                                    backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${slide.imagem})`
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
                                        {String(heroSlideAtivo + 1).padStart(2, '0')}
                                    </span>
                                    <span className="slide-total">/{String(heroSlides.length).padStart(2, '0')}</span>
                                </div>

                                <h1>IT TECH SOFT</h1>

                                {/* Título e Descrição Dinâmicos */}
                                <div className="hero-slide-content" data-aos="fade-up" data-aos-delay="200">
                                    <h2 style={{ color: heroSlides[heroSlideAtivo]?.corDestaque }}>
                                        {heroSlides[heroSlideAtivo]?.titulo}
                                    </h2>
                                    <p style={{ width: "100%" }}>
                                        {heroSlides[heroSlideAtivo]?.descricao}
                                    </p>
                                </div>

                                {/* <div className="hero-buttons">

                                    <button className="btn">Suporte TI</button>
                                    <button className="btn">Suporte em Sistemas</button>
                                    <button className="btn">Suporte em nuvem</button>
                                </div> */}
                            </div>

                            {/* Visual do Slide Atual */}
                            <div className="hero-visual">
                                <div className="slide-preview">
                                    <div
                                        className="preview-image"
                                        style={{
                                            backgroundImage: `url(${heroSlides[heroSlideAtivo]?.imagem})`,
                                            borderColor: heroSlides[heroSlideAtivo]?.corDestaque
                                        }}
                                    >
                                        <div className="preview-overlay">
                                            <span className="preview-icon">{heroSlides[heroSlideAtivo]?.icone}</span>
                                            <span className="preview-text">TECH SOFT Solutions</span>
                                        </div>
                                    </div>

                                    {/* Indicadores de Slides */}
                                    <div className="slide-dots">
                                        {heroSlides.map((_, index) => (
                                            <button
                                                key={index}
                                                className={`dot ${index === heroSlideAtivo ? 'active' : ''}`}
                                                onClick={() => goToHeroSlide(index)}
                                                style={{
                                                    backgroundColor: index === heroSlideAtivo ? heroSlides[heroSlideAtivo]?.corDestaque : '#fff'
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Controles de Navegação */}
                        <div className="hero-controls">
                            <button className="control-btn prev" onClick={prevHeroSlide}>
                                <FaChevronLeft />
                            </button>
                            <button className="control-btn next" onClick={nextHeroSlide}>
                                <FaChevronRight />
                            </button>
                        </div>
                    </div>

                    <div className="hero-overlay"></div>
                </section>

                {/* Sobre */}
                <section className="itsoft-sobre section" id='sobre'>
                    <div className="container">
                        <div className="sobre-content">
                            <div className="sobre-text" data-aos="fade-right">
                                <h2>Sobre <b className="danger">IT tech soft</b></h2>
                                <p style={{ color: "#222", textAlign: "justify" }}>
                                    A IT_ENTERPRISE SARL (TECH & SOFT) é uma empresa de TI especializada em desenvolvimento de software, comunicação visual, infraestrutura e redes, além de segurança da informação e eletrônica.
                                    Nosso compromisso é oferecer soluções tecnológicas inovadoras e personalizadas que atendam às demandas do mercado atual, com o objetivo de melhorar os negócios dos nossos parceiros, reduzir inventários e diminuir os altos custos com aquisição de novos equipamentos e mão de obra técnica.

                                    Acreditamos firmemente que a integração das novas tecnologias da informação e comunicação nos processos de produção, venda e prestação de serviços gera um impacto positivo no mercado, contribuindo para melhorar significativamente a qualidade e a eficiência das atividades dos nossos parceiros.

                                    Para isso, concebemos, desenvolvemos e implementamos, em estreita colaboração com nossos parceiros, soluções tecnológicas e ferramentas voltadas à resolução de problemas de organizações, projetos empresariais e entidades públicas ou privadas. Também criamos programas de formação e consultoria em informática.

                                    Oferecemos aos nossos parceiros serviços de assistência em informática, apoio remoto, além de manutenção de servidores, redes, internet, e-mail corporativo, segurança e proteção de dados.

                                    Nossas avenças de suporte informático mensais ilimitadas são adaptadas às necessidades de cada empresa e de seus usuários, garantindo suporte permanente e resolução rápida de problemas técnicos, com tempos de resposta imediatos.
                                </p>
                            </div>

                            <div className="sobre-imagem" data-aos="fade-left">
                                <img
                                    src={itsoftEquipe}
                                    alt="Equipe TECH SOFT"
                                    className='itsoft-equipe-img'
                                    loading="lazy" />
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

                {/* Serviços - Versão Simplificada */}
                <section className="itsoft-servicos " id='services' >
                    <div className="container">
                        <div className="section-title1" data-aos="fade-up">
                            <h2 className='black'>Nossos <b className="danger">Serviços</b></h2>
                            <p className='black'>Soluções completas de TI para empresas de todos os tamanhos</p>
                        </div>

                        <div className="servicos-grid">
                            {servicos.map((servico, index) => (
                                <div
                                    key={servico.id}
                                    className="servico-card-dataroad"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <div className="card-header">
                                        <div className="servico-icone">
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
                                            {servico.detalhes.length > 3 && (
                                                <li className="mais-itens">+{servico.detalhes.length - 3} mais serviços</li>
                                            )}
                                        </ul>
                                    </div>

                                    <div className="card-footer">
                                        <Link
                                            to={`/servicos/${servico.id}`}
                                            state={{ servico }}
                                            className="servico-link"
                                        >
                                            <span className="link-text">
                                                Ver detalhes completos ›
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Cases de Sucesso */}
                <section className="itsoft-cases section" id='cases'>
                    <div className="container">
                        <div className="section-title" data-aos="fade-up">
                            <h2 className='black'>Casos de <b className="danger">Sucesso</b></h2>
                            <p style={{ color: "#222" }}>Resultados reais que entregamos para nossos clientes</p>
                        </div>

                        <div className="cases-grid">
                            {cases.map((caseItem, index) => (
                                <div key={index} className="case-card" data-aos="zoom-in" data-aos-delay={index * 150}>
                                    <div className="case-imagem">
                                        <img src={caseItem.imagem} alt={caseItem.empresa} loading="lazy" />
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
                                                <strong>Solução TECH SOFT:</strong>
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
                <section className="itsoft-tech section" id='tecnologias'>
                    <div className="container">
                        <div className="section-title" data-aos="fade-up">
                            <h2 className='black'>Tecnologias que <b className="danger">Trabalhamos</b></h2>
                            <p style={{ color: '#222' }}>Parcerias com os principais fabricantes e tecnologias do mercado</p>
                        </div>

                        <div className="tech-grid">
                            {tecnologias.map((tech, index) => (
                                <div key={index} className="tech-card" data-aos="flip-up" data-aos-delay={index * 100}>
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
                        <div className="section-title" data-aos="fade-up">
                            <h2 className='black'>Como <b className="danger">Trabalhamos</b></h2>
                            <p style={{ color: '#222' }}>Metodologia comprovada para garantir o sucesso do seu projeto</p>
                        </div>

                        <div className="processo-steps">
                            <div className="processo-item" data-aos="fade-up" data-aos-delay="0">
                                <div className="step-number">01</div>
                                <h4>Diagnóstico</h4>
                                <p>Análise detalhada das necessidades e infraestrutura atual</p>
                            </div>
                            <div className="processo-item" data-aos="fade-up" data-aos-delay="200">
                                <div className="step-number">02</div>
                                <h4>Proposta</h4>
                                <p>Plano personalizado com soluções e orçamento transparente</p>
                            </div>
                            <div className="processo-item" data-aos="fade-up" data-aos-delay="400">
                                <div className="step-number">03</div>
                                <h4>Implementação</h4>
                                <p>Execução com equipas especializadas e mínima interrupção</p>
                            </div>
                            <div className="processo-item" data-aos="fade-up" data-aos-delay="600">
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
                        <div className="cta-content" data-aos="zoom-in">
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
                                <p>📞 <strong>+245 00 000 00 00</strong> | <FaEnvelope color='white' /> <strong>itsoft@itinterprises.com</strong></p>
                            </div>
                        </div>
                    </div>
                </section>
            </div></>
    )
}

export default Itsoft