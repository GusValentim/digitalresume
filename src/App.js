

import React from 'react';
import './App.css';


function App() {
  // Estado para formulário de contato
  const [formData, setFormData] = React.useState({ nome: "", email: "", mensagem: "" });
  const [loading, setLoading] = React.useState(false);
  const [status, setStatus] = React.useState(null);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch("http://localhost:5000/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (res.ok) {
        setStatus({ success: true, message: data.message });
        setFormData({ nome: "", email: "", mensagem: "" });
      } else {
        setStatus({ success: false, message: data.message || "Erro ao enviar." });
      }
    } catch (err) {
      setStatus({ success: false, message: "Erro de conexão com o servidor." });
    }
    setLoading(false);
  }

  // Estado para modo dark
  const [darkMode, setDarkMode] = React.useState(false);

  function toggleDarkMode() {
    setDarkMode((prev) => !prev);
  }

  React.useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div className="portfolio-container">
      <button
        style={{
          position: 'fixed', top: 18, right: 18, zIndex: 1000,
          background: darkMode ? '#222' : '#eee',
          color: darkMode ? '#fff' : '#222',
          border: 'none', borderRadius: 8, padding: '10px 18px', cursor: 'pointer', fontWeight: 'bold', boxShadow: '0 1px 6px rgba(0,0,0,0.08)'
        }}
        onClick={toggleDarkMode}
        aria-label="Alternar modo escuro"
      >
        {darkMode ? 'Modo Claro' : 'Modo Escuro'}
      </button>

      <section className="about-section">
        <h1>Meu Currículo Digital</h1>
        <p>Olá! Eu sou Gustavo Valentim, desenvolvedor front-end apaixonado por criar interfaces modernas e funcionais.</p>
      </section>

      <section className="resume-section">
        <h2>Sobre Mim</h2>
        <div className="resume-contact">
          <strong>GUSTAVO DE PAULA</strong><br />
          Rua Sebastião Teberatti. 04830-250 | (11) 988256762 | <a href="mailto:gustavo.valentimjp@hotmail.com">gustavo.valentimjp@hotmail.com</a>
        </div>
        <p>Profissional admirador de tecnologias, com experiência em desenvolvimento web, marketing digital e soluções inovadoras. Focado em entregar valor e aprender continuamente.<br />
        Procuro atuar e produzir garantindo que as necessidades entre a companhia e clientes sejam solucionadas através de metodologias ágeis e experiências únicas.</p>

        <div className="resume-links">
          <a href="https://github.com/GusValentim" target="_blank" rel="noopener noreferrer">GitHub</a><br></br>
          <a href="https://www.linkedin.com/in/gustavo-chagas-2ba79015a" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>

        <h3>Experiência</h3>
        <ul>
          <li><strong>JULHO DE 2024 – MARÇO DE 2025</strong> — <b>Estagiário, MetLife</b><br />Agente de transformação, pesquisa e coleta de informações para implementação de soluções digitais inovadoras para processos empresariais</li>
          <li><strong>MARÇO DE 2023 – ABRIL DE 2024</strong> — <b>Estagiário, Ezze Seguros</b><br />Coleta de dados para implementação de dashboards. Pagamentos para regulação de sinistro. Gerenciamento de clientes e fornecedores.</li>
          <li><strong>MARÇO DE 2022 – MARÇO DE 2023</strong> — <b>Especialista de Relacionamento com o Cliente I, Atento Brasil S/A</b><br />Atuação estratégica em ambientes digitais, especializado em garantir experiências excepcionais ao usuário final. Ponte entre equipes técnicas e clientes, traduzindo linguagem técnica em soluções claras e humanizadas. Expertise em atendimento omnichannel, gestão de tickets via plataformas como Zendesk, Jira ou Salesforce, análise de métricas (CSAT, NPS, CES) e identificação proativa de oportunidades de melhoria em produtos e processos. Habilidade comprovada em trabalhar com times ágeis promovendo um relacionamento contínuo e colaborativo entre squads de produto, suporte técnico e stakeholders. </li>
          <li><strong>AGOSTO DE 2019 – ABRIL DE 2021</strong> — <b>Analista SAC I, Atento Brasil S/A</b><br />Experiência consolidada na resolução de demandas via canais de comunicação como telefone, e-mail e chat, atuando com empatia, agilidade e foco na satisfação do consumidor. Habilidade em transformar contatos receptivos em oportunidades de fidelização, representando a marca com profissionalismo e escuta ativa. Tratativa de reclamações junto aos órgãos reguladores (Reclame Aqui).</li>
                
        </ul>

        <h3>Educação</h3>
        <ul>
          <li><strong>2023 - Cursando</strong> — Análise e Desenvolvimento de Sistemas<br />EAD – Universidade Nove de Julho</li>
          <li><strong>2018 - 2021</strong> — Comunicação – Publicidade e Propaganda<br />Concluído – Universidade Nove de Julho</li>
        </ul>

        <h3>Habilidades</h3>
        <ul>
          <li>Bom relacionamento interpessoal</li>
          <li>Boa comunicação oral e escrita</li>
          <li>Pacote Office</li>
          <li>SEO</li>
          <li>Pacote Adobe</li>
          <li>Canva</li>
          <li>PMO (Project Management Office)</li>
          <li>Ferramentas CRM e recursos empresariais (I4pro, Zendesk)</li>
          <li>Conhecimento em HTML, CSS, Python, React e JavaScript</li>
          <li>Básico em linguagem de consulta SQL</li>
          <li>Senso analítico</li>
          <li>Inglês Intermediário</li>
          <li>Marketing & Marketing Digital</li>
          <li>Facebook ADS</li>
        </ul>
      </section>

      <section className="projects-section">
        <h2>Meus Projetos</h2>
        <ul className="projects-list">
          <li className="project-card">
            <a href="https://github.com/GusValentim/siteinstitucional" target="_blank" rel="noopener noreferrer">
              <img src={require('./Copilot_20250727_064816.png')} alt="Projeto 1" className="project-img" />
              <div>
                <strong>SOLUTIONS (Site institucional fictício)</strong><br />
                Este projeto é um site institucional chamado "Solutions", desenvolvido em HTML, CSS e JavaScript. Ele apresenta uma página inicial com informações sobre serviços de marketing digital, SEO e consultoria gratuita, além de páginas adicionais como "Sobre", "Contato" e "Se inscreva". O layout inclui menu de navegação, área de conteúdo com imagem e textos promocionais, e rodapé. O objetivo é divulgar soluções digitais e captar clientes interessados em melhorar sua presença online.
              </div>
            </a>
          </li>
          
        </ul>
      </section>

      <section className="contact-section">
        <h2>Contato</h2>
        <div className="contact-form" style={{textAlign: 'center', padding: '24px'}}>
          <p>
            <strong>Em breve:</strong> O envio de mensagens estará disponível.<br />
            Por enquanto, entre em contato pelo e-mail:<br />
            <a href="mailto:gustavovalentim255@gmail.com">gustavovalentim255@gmail.com</a> ou <a href="mailto:gustavo.valentimjp@hotmail.com>">gustavo.valentimjp@hotmail.com</a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
