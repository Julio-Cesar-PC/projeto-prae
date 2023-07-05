import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from '@inertiajs/react'

export default function Book({ livro, auth }) {
    console.log(livro);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    {livro.title}
                </h2>
            }
        >
            <Head title="Livro" />

            <div className="py-12">
                <div className="max-w-full mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 flex flex-col items-center ">
                            <h1>{livro.title}</h1>
                            <h3>{livro.author}</h3>
                            <img className="w-36" src={livro.imageLink} alt={livro.title} />
                        </div>

                        <div className="p-6 text-gray-900 text-center text-2xl font-bold">
                            <Link href={route('request.create', livro.id)} className="btn btn-primary">Solicitar troca</Link>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
