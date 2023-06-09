import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import TableCategories from '@/Components/TableCategories'

export default function Categorias({ auth, categorias }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Categorias
        </h2>
      }
    >
      <Head title="Categorias" />

      <div className="py-12">
        <div className="max-w-full mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 text-center text-2xl font-bold">
              Categorias cadastradas
            </div>

            <TableCategories categorias={categorias} />
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}
