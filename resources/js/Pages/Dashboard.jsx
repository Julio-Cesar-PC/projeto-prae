import Modal from '@/Components/Modal'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'

export default function Dashboard({ auth }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      // header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"></h2>}
    >
      <Head title="Dashboard" />

      <div className="alert aviso max-w-7xl mx-auto sm:px-6 lg:px-8">
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
          Este é o quadro de administrador, aqui você pode: Adicionar livros,
          Adicionar administradores, consultar livros e ver a biblioteca.
        </span>
      </div>
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                Adicionar livro
              </h2>
              Aqui você pode adicionar novos livros no sistema clicando no botão
              abaixo.
            </div>
          </div>
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                Adicionar Administrador
              </h2>
              Este é o quadro de administrador, aqui você pode: Adicionar
              livros, Adicionar administradores, consultar livros e ver a
              biblioteca
            </div>
          </div>
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                Biblioteca
              </h2>
              Este é o quadro de administrador, aqui você pode: Adicionar
              livros, Adicionar administradores, consultar livros e ver a
              biblioteca
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}
