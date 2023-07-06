import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link } from '@inertiajs/react'

export default function Book({ livro, auth }) {
  console.log(livro)
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Solicitação de "{livro.title}"
        </h2>
      }
    >
      <Head title="Livro" />

      <div className="py-12">
        <div className="max-w-2xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg shadow-2xl">
            <div className="p-6 text-gray-900 flex flex-col items-center ">
              <img
                className="w-36 rounded-lg	rounded"
                src={livro.imageLink}
                alt={livro.title}
              />
              <h1 className=" py-6 font-light text-xl text-gray-800 leading-tight">
                Título: {livro.title}
              </h1>
              <h3 className="font-light text-xl text-gray-800 leading-tight">
                Autor(a): {livro.author}
              </h3>
            </div>

            <div className="p-6 text-gray-900 text-end text-2xl font-bold">
              <Link
                href={route('request.create', livro.id)}
                className="btn btn-outline btn-success btn-md"
              >
                Solicitar troca
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}
