import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import { useState } from 'react';
import axios from 'axios';


export default function CadastroLivros({ auth, livro }) {
    const { data, setData, post, errors } = useForm({
        title: '',
        state: '',
        imageLink: null,
        book_id: livro.id,
        user_id: auth.user.id,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('request.store'));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Livros</h2>}
        >
            <Head title="Cadastro de livros" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className='flex justify-between items-center mx-6 my-6'>
                            <div className="p-6 text-gray-900 ">Cadastro de Solicitação</div>
                        </div>
                    </div>

                    <div className="p-6 bg-white border-b border-gray-200 ">
                        <form onSubmit={submit}>
                            <div className="mb-3 flex">
                                <div className="flex-1">
                                    <InputLabel className="form-label">Título:</InputLabel>
                                    <TextInput value={data.title}
                                        type="text"
                                        placeholder="Titulo..."
                                        className="input w-full max-w-xs"
                                        onChange={(e) => setData('title', e.target.value)} />
                                    <InputError message={errors.title} className="mt-2" />
                                </div>

                                <div className="flex-1">
                                    <InputLabel className="form-label">Autor:</InputLabel>
                                    <TextInput value={data.state}
                                        type="text"
                                        placeholder="Autor..."
                                        className="input w-full max-w-xs"
                                        onChange={(e) => setData('state', e.target.value)} />
                                    <InputError message={errors.state} className="mt-2" />
                                </div>
                            </div>


                            <button type="submit" className="btn btn-primary">Cadastrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
