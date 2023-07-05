import React from 'react'
import { Link, Head } from '@inertiajs/react'
import Footer from '@/Components/Footer'
import NavBarHome from '@/Components/NavBarHome'
import ApplicationLogo from '@/Components/ApplicationLogo'
import FloatingButton from '@/Components/FloatingButton'

const About = () => {
  return (
    <>
      <Head title="Prae" />
      <FloatingButton />
      {/* Content */}

      <div className="navbar hero-overlay bg-opacity-60 text-neutral-content">
        <Link href="/">
          <a className="btn btn-ghost normal-case text-xl text-white">
            Livro Fora da Estante
          </a>
        </Link>
      </div>
      <div className="hero-overlay bg-opacity-60">
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
          <div>
            <Link href="/">
              <ApplicationLogo className="w-20 h-20 fill-current" />
            </Link>
          </div>
          <p className="mb-5 hero-content text-center text-neutral-content">
            A Pró-Reitoria de Assuntos Estudantis (PRAE) é o órgão
            administrativo da Universidade Federal de Santa Maria (UFSM)
            responsável pelo planejamento e execução da Política de Assistência
            Estudantil da instituição. As ações da Assistência Estudantil visam
            a democratização do acesso e da permanência dos estudantes em
            vulnerabilidade socioeconômica na universidade. O marco regulatório
            das ações da assistência estudantil é estabelecido pelo Decreto nº
            7.234 (BRASIL, 2010) que institui o Programa Nacional de Assistência
            Estudantil (PNAES). Destaca-se que a assistência estudantil tem
            grande relevância no contexto brasileiro devido às altas taxas de
            desigualdade social que se expressam, no cenário universitário, em
            alarmantes índices de evasão.
          </p>
          <p className="mb-5 hero-content text-center text-neutral-content">
            O Setor de Atenção Integral ao Estudante (SATIE), órgão vinculado à
            PRAE, tomando a métrica do PNAES como eixo balizador de suas ações,
            busca viabilizar a criação de um tempo e um espaço destinados a
            atividades que promovam bem-estar e cuidado dentro do território da
            universidade.
          </p>
          <p className="mb-5 hero-content text-center text-neutral-content">
            Neste cenário, emergem os espaços coletivos de intervenção: as
            oficinas de cultura, esporte e lazer, previstas pelo projeto de
            desenvolvimento institucional “OFICINAS SATIE/PRAE: Espaços de
            prevenção e cuidado na Assistência Estudantil Universitária”, todas
            elas norteadas por princípios democráticos de inclusão e equidade
            social, interação de saberes e acesso a direitos fundamentais.
          </p>
          <p className="mb-5 hero-content text-center text-neutral-content">
            A ação nominada Livro Fora da Estante faz parte das atividades
            propostas por este Projeto e se constitui como um espaço democrático
            de acesso à cultura, interação social e troca de saberes. A ação se
            originou a partir da doação de um acervo particular de livros ao
            SATIE, no ano de 2019, que foi destinada à realização de trocas
            solidárias entre a comunidade estudantil com vistas à ampliação do
            repertório de leitura dos sujeitos envolvidos. A partir das trocas
            de livros, e por meio de uma abordagem dialógica, a ação também
            objetiva a construção mútua de sentidos e o comprometimento com a
            leitura, bem como a legitimação do desejo de ler dos participantes.
          </p>
          <p className="mb-5 hero-content text-center text-neutral-content">
            Para operacionalizar as trocas, bem como garantir a diversidade e
            qualidade do acervo, a equipe responsável pela ação convencionou uma
            curadoria baseada em alguns critérios que, entre outros, consideram
            gênero literário, estado de conservação do exemplar e assuntos de
            interesse da comunidade. A partir da curadoria, o acervo é
            classificado em 7 categorias que organizam as trocas.
          </p>
          <p className="mb-5 hero-content text-center text-neutral-content">
            As trocas são registradas em um formulário específico, manualmente,
            no espaço da troca. O participante que não encontrar um exemplar de
            seu interesse no dia da troca, terá direito a um vale-livro a ser
            utilizado em outra oportunidade.
          </p>
          <p className="mb-5 hero-content text-center text-neutral-content">
            A partir de 2022, com o retorno das atividades presenciais no
            campus, a ação passou a integrar a Polifeira do Agricultor, como
            convidada, alcançado também o público externo à comunidade
            estudantil e universitária. Tal ampliação demanda novas exigências
            para operacionalização das trocas, entre as quais se configura a
            necessidade de uma ferramenta digital de registro do acervo, dos
            participantes e das trocas realizadas.
          </p>
        </div>
      </div>
      {/* Content */}
      <Footer />
    </>
  )
}

export default About
