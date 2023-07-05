import React from 'react'
import { Link, Head } from '@inertiajs/react'
import Footer from '@/Components/Footer'
import NavBarHome from '@/Components/NavBarHome'

const Home = () => {
  return (
    <>
      <Head title="Prae" />
      <NavBarHome />
      {/* Content */}
      <div className="hero min-h-screen fundoHome">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Bem-vindo ao nosso site!
            </h1>
            <p className="mb-5 font-semibold">
              Somos uma iniciativa dedicada a promover a leitura e a troca de
              livros. Explore nossa seleção de títulos, compartilhe suas
              histórias favoritas e ajude a espalhar o amor pela leitura.
              Junte-se a nós nesta jornada literária!
            </p>
            <Link href={route('login')}>
              <button className="btn btn-primary">Entrar</button>
            </Link>
            <div class="divider">ou</div>
            <Link href={route('register')}>
              <button className="btn btn-info">Cadastrar</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <Footer />
    </>
  )
}

export default Home
