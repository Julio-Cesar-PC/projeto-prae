import React from 'react'
import { Link, Head } from '@inertiajs/react'
import Footer from '@/Components/Footer'
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
      <div className="hero-overlay bg-opacity-80">
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
          <div>
            <Link href="/">
              <ApplicationLogo className="w-20 h-20 fill-current" />
            </Link>
          </div>
          <div className="font-semibold">
            <h1 className="mb-5 text-5xl font-bold text-center text-neutral-content">
              Parceiros
            </h1>
            <p className="mb-5 hero-content text-center text-neutral-content">
              UFSM
            </p>
          </div>
        </div>
      </div>
      {/* Content */}
      <Footer />
    </>
  )
}

export default About
