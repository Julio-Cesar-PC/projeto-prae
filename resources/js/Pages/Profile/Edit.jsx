import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import DeleteUserForm from './Partials/DeleteUserForm'
import UpdatePasswordForm from './Partials/UpdatePasswordForm'
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm'
import { Head, Link } from '@inertiajs/react'

export default function Edit({ auth, mustVerifyEmail, status }) {
  console.log(auth.user)

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-500 leading-tight">
          Edição de perfil
        </h2>
      }
    >
      <Head title="Profile" />

      {auth.user.banned ? (
        <div className="alert alert-error aviso max-w-7xl mx-auto sm:px-6 lg:px-8">
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
            Você está <span className="font-bold">banido</span> do sistema.
            Entre em contato com o administrador para mais informações.
          </span>
        </div>
      ) : null}

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
          <div className="p-4 sm:p-8 bg-white  shadow sm:rounded-lg">
            <UpdateProfileInformationForm
              mustVerifyEmail={mustVerifyEmail}
              status={status}
              className="max-w-xl"
            />
          </div>

          <div className="p-4 sm:p-8 bg-white  shadow sm:rounded-lg">
            <UpdatePasswordForm className="max-w-xl" />
          </div>

          <div className="p-4 sm:p-8 bg-white  shadow sm:rounded-lg">
            <DeleteUserForm className="max-w-xl" />
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}
