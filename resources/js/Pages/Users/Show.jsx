import RequestTable from '../../Components/RequestTable'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'

import { Head } from '@inertiajs/react'

export default function Show({ auth, user, bookRequests }) {
  console.log(bookRequests)

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-500 leading-tight">
          Perfil de {user.name}
        </h2>
      }
    >
      <Head title={'Profile ' + user.name} />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
          <div className="p-4 sm:p-8 bg-white  shadow sm:rounded-lg">
            <div className="p-4 sm:p-8 bg-white  shadow sm:rounded-lg">
              <div className="flex flex-col">
                <div className="flex flex-row">
                  <div className="flex flex-col">
                    <span className="font-semibold text-md">
                      Nome: {user.name}
                    </span>
                    <span className="font-semibold text-md">
                      Email: {user.email}
                    </span>
                  </div>
                  <span className="ml-4 font-semibold text-md">
                    Status: {user.banned ? 'Banido' : 'Ativo'}
                  </span>
                </div>
                <span className="mt-4 font-semibold text-md">
                  Data de criação:{' '}
                  {new Date(user.created_at).toLocaleDateString('pt-BR')}
                </span>
              </div>
            </div>
            <RequestTable livros={bookRequests} />
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}
