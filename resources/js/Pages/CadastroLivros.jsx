import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';

export default function CadastroLivros({ auth, categories }) {
    const { data, setData, post, errors } = useForm({
        title: '',
        author: '',
        publisher: '',
        pageCount: '',
        category_id: '',
        available: true,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('livros.store'));
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
                                        <InputLabel className="form-label">Título:</InputLabel>
                                        <TextInput  value={data.title}
                                                    type="text"
                                                    placeholder="Titulo..."
                                                    className="input w-full max-w-xs"
                                                    onChange={(e) => setData('title', e.target.value)}/>
                                        <InputError message={errors.title} className="mt-2" />
                                    </div>

                                    <div className="flex-1">
                                        <InputLabel className="form-label">Autor:</InputLabel>
                                        <TextInput  value={data.author}
                                                    type="text"
                                                    placeholder="Autor..."
                                                    className="input w-full max-w-xs"
                                                    onChange={(e) => setData('author', e.target.value)}/>
                                        <InputError message={errors.author} className="mt-2" />
                                    </div>
                                </div>

                                <div className="mb-3 flex">
                                    <div className="flex-1">
                                        <InputLabel className="form-label">Editora:</InputLabel>
                                        <TextInput  value={data.publisher}
                                                    type="text"
                                                    placeholder="Editora..."
                                                    className="input w-full max-w-xs"
                                                    onChange={(e) => setData('publisher', e.target.value)}/>
                                        <InputError message={errors.publisher} className="mt-2" />
                                    </div>

                                    <div className="flex-1">
                                        <InputLabel className="form-label">Número de páginas:</InputLabel>
                                        <TextInput  value={data.pageCount}
                                                    type="number"
                                                    placeholder="Número de páginas..."
                                                    className="input  w-full max-w-xs"
                                                    onChange={(e) => setData('pageCount', e.target.value)}/>
                                        <InputError message={errors.pageCount} className="mt-2" />
                                    </div>


                                </div>

                                <div className="mb-3 flex">
                                    <div className="flex-1">
                                        <InputLabel className="form-label">Categoria:</InputLabel>
                                        <select onChange={(e) =>setData('category_id', e.target.value)}
                                                value={data.category_id}
                                                className="select w-full max-w-xs text-black">
                                            <option>Selecione uma categoria</option>
                                            {categories.map((category) => (
                                                <option key={category.id} value={category.id}>{category.nome}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="flex-1">
                                        <InputLabel className="form-label">Disponível:</InputLabel>
                                        <input  checked={data.available}
                                                type="checkbox"
                                                className="checkbox"
                                                onChange={(e) => setData('available', e.target.checked)} />
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-primary">Cadastrar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
