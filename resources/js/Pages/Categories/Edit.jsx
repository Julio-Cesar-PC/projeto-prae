import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';

export default function CadastroLivros({ auth, categoria }) {
    const { data, setData, patch, errors } = useForm({
        nome: categoria.nome,
    });

    const submit = (e) => {
        e.preventDefault();

        patch(route('categorias.update', categoria.id));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 ">Cadastro de Livros</div>

                        <div className="p-6 bg-white border-b border-gray-200 ">
                            <form onSubmit={submit}>
                                <div className="mb-3 flex">
                                    <div className="flex-1">
                                        <InputLabel className="form-label">Nome:</InputLabel>
                                        <TextInput  value={data.nome}
                                                    type="text"
                                                    placeholder="Nome..."
                                                    className="input w-full max-w-xs"
                                                    onChange={(e) => setData('nome', e.target.value)}/>
                                        <InputError message={errors.nome} className="mt-2" />
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-primary">Salvar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
