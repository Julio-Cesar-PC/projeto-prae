import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import TableLivros from '@/Components/TableLivros'
import axios from 'axios'

export default function Livros({ auth, livros }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Livros
        </h2>
      }
    >
      <Head title="Livro" />

      <div className="py-12">
        <div className="max-w-full mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 text-center text-2xl font-bold">
              Livros cadastrados
            </div>

            <TableLivros livros={livros} />
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}
