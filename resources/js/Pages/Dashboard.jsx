import TableLivros from '@/Components/TableLivros'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link } from '@inertiajs/react'
import { useState } from 'react'

export default function Dashboard({ auth, livros }) {
  const [isVisible, setIsVisible] = useState(true)

  const handleClick = () => {
    setIsVisible(false)
  }
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Dashboard
        </h2>
      }
    >
      <Head title="Dashboard" />

      {isVisible && (
        <div className="alert aviso max-w-7xl mx-auto sm:px-6 lg:px-8 relative flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span className="flex-1">
            Este é o quadro de administrador, aqui você pode: Adicionar livros,
            Adicionar administradores, consultar livros e ver a biblioteca.
            <Link href="/livros" className="font-bold">
              {' '}
              Voltar para o quadro de usuário
            </Link>
          </span>
          <button className="p-2" onClick={handleClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-info shrink-0 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      )}

      <div className="py-12">
        <div className="max-w-full w-full mx-auto sm:px-6 lg:px-8">
          <div className="bg-white w-full overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 w-full text-gray-900 dark:text-gray-100">
              <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                Biblioteca
              </h2>
              {/* tabela */}
              <TableLivros livros={livros}></TableLivros>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}
