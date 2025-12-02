import { useLocation, Link } from 'react-router-dom'
import HeaderItsoft from '../../components/Header/HeaderItsoft'
import './Booking.css'
import { useState, useEffect } from 'react'

const Booking = () => {
    const location = useLocation()
    const { servico } = location.state || {}

    // console.log('Servico recebido no Booking:', servico)
    // console.log('Detalhes do servico:', servico?.detalhes)
    // console.log('Tipo de detalhes:', typeof servico?.detalhes)
    // console.log('É array?', Array.isArray(servico?.detalhes))

    const [servicosSelecionados, setServicosSelecionados] = useState([])
    const [dadosCliente, setDadosCliente] = useState({
        nome: '',
        email: '',
        telefone: '',
        empresa: '',
        mensagem: ''
    })

    // Debug adicional
    useEffect(() => {
        // console.log('Servicos selecionados:', servicosSelecionados)
    }, [servicosSelecionados])

    // Se não há serviço, mostrar mensagem de erro
    if (!servico) {
        return (
            <div className="booking-not-found">
                <HeaderItsoft />
                <div className="container">
                    <div className="not-found-content">
                        <h1>Serviço não encontrado</h1>
                        <p>Por favor, volte à página de serviços e selecione um serviço válido.</p>
                        <Link to="/itsoft" className="btn-primary">
                            Voltar para Serviços
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    // Verificar se detalhes existe e é um array
    const detalhesServico = Array.isArray(servico.detalhes) ? servico.detalhes : []
    // console.log('detalhesServico para render:', detalhesServico)

    // Manipular seleção dos serviços
    const handleServicoChange = (detalhe) => {
        // console.log('Checkbox alterado:', detalhe)
        if (servicosSelecionados.includes(detalhe)) {
            setServicosSelecionados(servicosSelecionados.filter(item => item !== detalhe))
        } else {
            setServicosSelecionados([...servicosSelecionados, detalhe])
        }
    }

    // Manipular dados do formulário
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setDadosCliente(prev => ({
            ...prev,
            [name]: value
        }))
    }

    // Gerar email formatado
    const gerarEmail = () => {
        const assunto = `Solicitação de Orçamento - ${servico.titulo}`

        const corpo = `
Olá IT Tech Soft,

Gostaria de solicitar um orçamento para os seguintes serviços:

SERVIÇO PRINCIPAL: ${servico.titulo}

SERVIÇOS SELECIONADOS:
${servicosSelecionados.map((serv, index) => `${index + 1}. ${serv}`).join('\n')}

MEUS DADOS:
- Nome: ${dadosCliente.nome}
- Empresa: ${dadosCliente.empresa}
- Email: ${dadosCliente.email}
- Telefone: ${dadosCliente.telefone}

MENSAGEM ADICIONAL:
${dadosCliente.mensagem}

Aguardo vosso contacto.

Atenciosamente,
${dadosCliente.nome}
        `.trim()

        return `mailto:example@mail.com?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`
    }

    // Validar formulário
    const isFormValido = () => {
        return dadosCliente.nome &&
            dadosCliente.email &&
            dadosCliente.telefone &&
            servicosSelecionados.length > 0
    }

    console.log(servico.imagem);
    console.log("DETAILS")
    return (
        <>
            <HeaderItsoft />
            <div className="booking-page" >
                <div className="booking-container container">
                    {/* Cabeçalho */}
                    <div className="booking-header" style={{ background: `url(${servico.imagem})  white`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', color: 'white' }} data-aos="fade-down">
                        <div className="booking-hero-overlay">
                            <div className="booking-breadcrumb">
                                <span>IT TECH SOFT</span> / <span>Serviços</span> / <span>Solicitar Orçamento</span>
                            </div>
                            <div className="servico-info">
                                <h2>{servico.titulo}</h2>
                                <p >{servico.descricao}</p>
                            </div>
                        </div>
                    </div>

                    {/* Debug visual */}
                    {/* <div style={{ 
                        background: '#f0f8ff', 
                        padding: '10px', 
                        margin: '10px 0', 
                        border: '1px solid #007bff',
                        borderRadius: '5px'
                    }}>
                        <strong>Debug:</strong> {detalhesServico.length} serviços encontrados para renderização
                    </div> */}

                    <marquee className='black' behavior="" direction="left">Respondemos o seu e-mail em menos de 30 minutos!</marquee>
                    <div className="booking-content" data-aos="fade-up">
                        {/* Coluna de Serviços */}
                        <div className="servicos-coluna">
                            <h3>Selecione os serviços desejados:</h3>

                            {detalhesServico.length > 0 ? (
                                <>
                                    <div className="servicos-list">
                                        {detalhesServico.map((detalhe, index) => {
                                            // console.log('Renderizando detalhe:', detalhe, 'index:', index)
                                            return (
                                                <div key={index} className="servico-item">
                                                    <label className="checkbox-label">
                                                        <input
                                                            type="checkbox"
                                                            checked={servicosSelecionados.includes(detalhe)}
                                                            onChange={() => handleServicoChange(detalhe)}
                                                            className="checkbox-input"
                                                        />
                                                        <span className="checkmark"></span>
                                                        <span className="servico-texto">{detalhe}</span>
                                                    </label>
                                                </div>
                                            )
                                        })}
                                    </div>

                                    {/* Resumo em tempo real */}
                                    {servicosSelecionados.length > 0 && (
                                        <div className="resumo-selecionados">
                                            <h4>Serviços selecionados ({servicosSelecionados.length}):</h4>
                                            <ul>
                                                {servicosSelecionados.map((serv, index) => (
                                                    <li key={index}>{serv}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <div className="sem-detalhes">
                                    <p>Nenhum serviço detalhado disponível para este pacote.</p>
                                </div>
                            )}
                        </div>

                        {/* Coluna de Dados do Cliente */}
                        <div className="dados-coluna">
                            <h3>Seus dados de contacto</h3>
                            <form className="dados-form" onSubmit={(e) => e.preventDefault()}>
                                <div className="form-group">
                                    <label htmlFor="nome">Nome completo *</label>
                                    <input
                                        type="text"
                                        id="nome"
                                        name="nome"
                                        value={dadosCliente.nome}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Digite seu nome completo"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="empresa">Empresa</label>
                                    <input
                                        type="text"
                                        id="empresa"
                                        name="empresa"
                                        value={dadosCliente.empresa}
                                        onChange={handleInputChange}
                                        placeholder="Nome da sua empresa"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={dadosCliente.email}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="seu@email.com"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="telefone">Telefone *</label>
                                    <input
                                        type="tel"
                                        id="telefone"
                                        name="telefone"
                                        value={dadosCliente.telefone}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="(00) 00000-0000"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="mensagem">Mensagem adicional</label>
                                    <textarea
                                        id="mensagem"
                                        name="mensagem"
                                        value={dadosCliente.mensagem}
                                        onChange={handleInputChange}
                                        rows="4"
                                        placeholder="Descreva brevemente suas necessidades..."
                                    />
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Botão de Confirmação */}
                    <div className="booking-actions" data-aos="fade-up" data-aos-delay="200">
                        <button
                            className={`btn-confirmar ${!isFormValido() ? 'btn-disabled' : ''}`}
                            disabled={!isFormValido()}
                            onClick={() => {
                                // console.log('Botão clicado, email gerado')
                                window.open(gerarEmail(), '_blank')
                            }}
                        >
                            {!isFormValido() ? 'Preencha todos os campos obrigatórios' : 'Confirmar e Enviar por Email'}
                        </button>

                        {!isFormValido() && (
                            <p className="campos-obrigatorios">* Campos obrigatórios: Nome, Email, Telefone e pelo menos um serviço selecionado</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Booking