import { useEffect } from 'react'
import Checkbox from '@/Components/Checkbox'
import GuestLayout from '@/Layouts/GuestLayout'
import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import TextInput from '@/Components/TextInput'
import { Head, Link, useForm } from '@inertiajs/react'
import { FcGoogle } from 'react-icons/fc'

export default function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false,
  })

  useEffect(() => {
    return () => {
      reset('password')
    }
  }, [])

  const submit = (e) => {
    e.preventDefault()

    post(route('login'))
  }

  return (
    <>
      <GuestLayout>
        <Head title="Entrar" />

        {status && <div className="mb-4 font-medium text-sm">{status}</div>}

        <form onSubmit={submit}>
          <div>
            <InputLabel htmlFor="email" value="E-mail" />

            <TextInput
              id="email"
              type="email"
              name="email"
              value={data.email}
              className="mt-1 block w-full"
              autoComplete="username"
              isFocused={true}
              onChange={(e) => setData('email', e.target.value)}
            />

            <InputError message={errors.email} className="mt-2" />
          </div>

          <div className="mt-4">
            <InputLabel htmlFor="password" value="Senha" />

            <TextInput
              id="password"
              type="password"
              name="password"
              value={data.password}
              className="mt-1 block w-full"
              autoComplete="current-password"
              onChange={(e) => setData('password', e.target.value)}
            />

            <InputError message={errors.password} className="mt-2" />
          </div>

          <div className="block mt-4">
            <label className="flex items-center">
              <Checkbox
                name="remember"
                checked={data.remember}
                onChange={(e) => setData('remember', e.target.checked)}
              />
              <span className="ml-2 text-sm ">Lembrar de mim</span>
            </label>
          </div>

          <div className="flex items-center justify-between mt-4">
            {canResetPassword && (
              <Link
                href={route('password.request')}
                className="underline text-sm  rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
              >
                Esqueceu sua senha?
              </Link>
            )}

            <button className="btn btn-primary ml-4" disabled={processing}>
              Entrar
            </button>
          </div>
          <div class="divider">ou</div>
        </form>
        <a
          class="w-60 px-4 py-3 flex items-center rounded-full mx-auto mt-5"
          href="/login/google"
        >
          <button className="btn btn-outline hover: btn-primary">
            <FcGoogle /> Continue com Google
          </button>
        </a>
      </GuestLayout>
    </>
  )
}
