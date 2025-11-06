import { useState } from 'react'
import './Itsoft.css'
import { FaClock, FaCloud, FaComputer, FaEnvelope, FaLock, FaPhone, FaRocket, FaShield, FaWhatsapp } from 'react-icons/fa6'
import { FaWifi } from 'react-icons/fa'
import HeaderItsoft from '../../components/Header/HeaderItsoft'
import itsoftEquipe from '../../assets/it-team.webp'

const Itsoft = () => {
    const [servicoAtivo, setServicoAtivo] = useState(0)

    const servicos = [
        {
            id: 1,
            icone: '💼',
            titulo: 'Consultoria em TI',
            descricao: 'Assessoria especializada para otimizar sua infraestrutura tecnológica.',
            detalhes: [
                'Análise completa da infraestrutura atual',
                'Plano de modernização tecnológica',
                'Otimização de processos e custos',
                'Roadmap de transformação digital'
            ],
            imagem: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop'
        },
        {
            id: 2,
            icone: '🌐',
            titulo: 'Configurações de Rede',
            descricao: 'Implementação e gestão de redes corporativas seguras e eficientes.',
            detalhes: [
                'Configuração de redes LAN/WAN',
                'Implementação de VLANs e VPNs',
                'Otimização de performance',
                'Segurança e monitoramento de rede'
            ],
            imagem: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop'
        },
        {
            id: 3,
            icone: '📞',
            titulo: 'Telefonia IP',
            descricao: 'Sistemas de comunicação unificada com VoIP profissional.',
            detalhes: [
                'Instalação de PABX IP',
                'Integração com sistemas existentes',
                'Videoconferência e colaboração',
                'Mobilidade e remote working'
            ],
            imagem: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop'
        },
        {
            id: 4,
            icone: '🎓',
            titulo: 'Aulas Informática Avançada',
            descricao: 'Formação especializada para equipas técnicas e desenvolvedores.',
            detalhes: [
                'Programação e desenvolvimento',
                'Administração de sistemas',
                'Cibersegurança',
                'Cloud computing e DevOps'
            ],
            imagem: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=400&fit=crop'
        },
        {
            id: 5,
            icone: '🔒',
            titulo: 'Segurança Eletrónica',
            descricao: 'Proteção completa dos seus ativos digitais e físicos.',
            detalhes: [
                'Firewalls e sistemas de deteção',
                'Gestão de identidade e acesso',
                'Backup e recuperação de dados',
                'Auditoria de segurança'
            ],
            imagem: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop'
        },
        {
            id: 6,
            icone: '☁️',
            titulo: 'Suporte em Nuvem',
            descricao: 'Migração e gestão de infraestruturas cloud.',
            detalhes: [
                'Migração para AWS, Azure, Google Cloud',
                'Gestão e monitorização 24/7',
                'Otimização de custos cloud',
                'Backup e disaster recovery'
            ],
            imagem: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop'
        },
        {
            id: 7,
            icone: '📋',
            titulo: 'Licenciamento de Softwares',
            descricao: 'Gestão completa de licenças e compliance.',
            detalhes: [
                'Auditoria de licenças existentes',
                'Aquisição de novas licenças',
                'Gestão de renovação',
                'Otimização de custos com software'
            ],
            imagem: 'https://images.unsplash.com/photo-1563013541-fab15c843346?w=600&h=400&fit=crop'
        },
        {
            id: 8,
            icone: '💻',
            titulo: 'Desenvolvimento de Software',
            descricao: 'Soluções personalizadas para o seu negócio.',
            detalhes: [
                'Aplicações web e mobile',
                'Sistemas de gestão empresarial',
                'Integração com APIs',
                'Manutenção e suporte'
            ],
            imagem: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop'
        },
        {
            id: 9,
            icone: '📹',
            titulo: 'Instalação de Câmeras Segurança',
            descricao: 'Sistemas de videovigilância de última geração.',
            detalhes: [
                'Câmeras IP e analógicas',
                'Sistemas de gravação DVR/NVR',
                'Monitorização remota',
                'Manutenção preventiva'
            ],
            imagem: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop'
        }
    ]

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

    return (
        <><HeaderItsoft />
        <div className="itsoft-page">
            {/* Hero Section */}
            <section className="itsoft-hero">
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <h1>ITSOFT</h1>
                            <h2>Soluções Tecnológicas Completas</h2>
                            <p style={{ width: "100%" }}>
                                Especialistas em consultoria TI, redes, segurança electrónica e desenvolvimento
                                de software. Oferecemos soluções integradas que impulsionam a eficiência
                                e segurança do seu negócio.
                            </p>
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
                                    <span className="feature-icon"><FaShield color='dodgerblue' /></span>
                                    <span>Segurança Garantida</span>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-icon"><FaRocket color='red' /></span>
                                    <span>Soluções Personalizadas</span>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
                <div className="hero-overlay"></div>
            </section>

            {/* Sobre */}
            <section className="itsoft-sobre section">
                <div className="container">
                    <div className="sobre-content">
                        <div className="sobre-text">
                            <h2>Especialistas em <b className="danger">Tecnologia</b></h2>
                            <p style={{ color: "#222" }}>
                                A ITSOFT é a empresa do grupo ITINTERPRISES dedicada a soluções tecnológicas
                                completas. Desde consultoria estratégica até implementação prática, cobrimos
                                todas as necessidades de TI da sua organização.
                            </p>
                            <div className="stats-grid">
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
                        <div className="sobre-imagem">
                            <img
                                src={itsoftEquipe}
                                alt="Equipe ITSOFT" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Serviços */}
            <section className="itsoft-servicos section">
                <div className="container">
                    <div className="section-title">
                        <h2 className='black'>Nossos <b className="danger">Serviços</b></h2>
                        <p style={{ color: "#222" }}>Soluções completas de TI para empresas de todos os tamanhos</p>
                    </div>

                    <div className="servicos-content">
                        <div className="servicos-lista">
                            {servicos.map((servico, index) => (
                                <div
                                    key={servico.id}
                                    className={`servico-item ${servicoAtivo === index ? 'active' : ''}`}
                                    onClick={() => setServicoAtivo(index)}
                                >
                                    <div className="servico-icone">{servico.icone}</div>
                                    <div className="servico-info">
                                        <h4>{servico.titulo}</h4>
                                        <p>{servico.descricao}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="servico-detalhe">
                            {servicos[servicoAtivo] && (
                                <div className="detalhe-content">
                                    <div className="detalhe-imagem">
                                        <img
                                            src={servicos[servicoAtivo].imagem}
                                            alt={servicos[servicoAtivo].titulo} />
                                    </div>
                                    <div className="detalhe-texto">
                                        <h3>{servicos[servicoAtivo].titulo}</h3>
                                        <p>{servicos[servicoAtivo].descricao}</p>
                                        <ul className="detalhe-lista">
                                            {servicos[servicoAtivo].detalhes.map((detalhe, idx) => (
                                                <li key={idx}>{detalhe}</li>
                                            ))}
                                        </ul>
                                        <div className="detalhe-actions">
                                            <button className="btn-primary">Solicitar Orçamento</button>
                                            <button className="btn ">Marcar Consulta</button>
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
                                <FaPhone color='green'/> Ligar Agora
                            </button>
                            <button className="btn-outline">
                                <FaEnvelope color='white'/> Enviar Email
                            </button>
                            <button className="btn-outline">
                                <FaWhatsapp color='lime'/> WhatsApp
                            </button>
                        </div>
                        <div className="cta-info">
                            <p>📞 <strong>+245 00 000 00 00</strong> |  <FaEnvelope color='white'/><strong>itsoft@itinterprises.com</strong></p>
                        </div>
                    </div>
                </div>
            </section>
        </div></>
    )
}

export default Itsoft