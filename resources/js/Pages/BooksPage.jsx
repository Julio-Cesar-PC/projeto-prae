import TableLivros from '@/Components/TableLivros'
import AdminPage from '@/Components/AdminPage'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link } from '@inertiajs/react'
import CategoryPage from '@/Components/CategoryPage'
import BooksCatalog from '@/Components/BooksCatalog'

export default function BooksPage({ auth, livros }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Livros
        </h2>
      }
    >
      <Head title="Livros" />

      {/* <div className="alert aviso max-w-7xl mx-auto sm:px-6 lg:px-8">
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
          <Link href="/livros"> Voltar para o quadro de usuário</Link>
        </span>
      </div> */}
      <BooksCatalog livros={livros}></BooksCatalog>
    </AuthenticatedLayout>
  )
}
