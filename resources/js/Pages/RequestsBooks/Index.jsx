import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link } from '@inertiajs/react'
import RequestTable from '@/Components/RequestTable'
import { useState } from 'react'

export default function Requests({ auth, bookRequests }) {
  const [isVisible, setIsVisible] = useState(true)

  const handleClick = () => {
    setIsVisible(false)
  }

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Solicitações de Troca
        </h2>
      }
    >
      <Head title="Trocas pendentes" />
      {isVisible && (
        <div className="alert aviso max-w-7xl mx-auto sm:px-6 lg:px-8 relative">
          <button className="absolute top-0 right-0 p-2" onClick={handleClick}>
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

          <span>
            Nesta página é possível visualizar, recusar e aceitar as
            solicitações de troca. Assim como ver informações da troca desejada.
            <Link href="/dashboard" className="font-bold">
              Voltar para o Dashboard
            </Link>
          </span>
        </div>
      )}

      <div className="py-12">
        <div className="max-w-full w-full mx-auto sm:px-6 lg:px-8">
          <div className="bg-white w-full overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 w-full text-gray-900 dark:text-gray-100">
              <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                Trocas Disponíveis
              </h2>
              {/* tabela */}
              {/* <TableLivros livros={livros}></TableLivros> */}
              <RequestTable livros={bookRequests}></RequestTable>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}
