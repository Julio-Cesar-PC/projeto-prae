import { FaPlus } from 'react-icons/fa'
import { useForm } from '@inertiajs/react'
import Pagination from '@/Components/Pagination'

export default function TableLivros({ livros }) {
    const { data, setData, processing, errors, reset, delete: destroy, } = useForm({});

    function excluirLivro(livro) {
        destroy(route('livros.destroy', livro.id), {
            preserveScroll: true,
            onError: () => console.log('Erro ao excluir livro')
        })
    }

    return (
        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <a href='livro/cadastro' className="btn btn-primary mb-5"><FaPlus/>Novo Livro</a>
                    <table className="table table-xs table-fixed min-w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-900  uppercase tracking-wider"> # </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-900  uppercase tracking-wider"> Título </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-900  uppercase tracking-wider"> Autor </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-900  uppercase tracking-wider"> Editora </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-900  uppercase tracking-wider"> Categoria </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-900  uppercase tracking-wider"> Ações </th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {livros.data.map((livro) => (
                                <tr className='hover' key={livro.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 "> {livro.id} </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 "> {livro.title} </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 "> {livro.author} </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 "> {livro.publisher} </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 "> <span className="badge badge-primary">{livro.category.nome}</span> </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 flex gap-2">
                                    <label  htmlFor={'modalEditar-'+livro.id}
                                                className="btn btn-primary btn-xs" >Editar
                                        </label >
                                        <input type="checkbox" id={'modalEditar-'+livro.id} className="modal-toggle" />


                                        <label  htmlFor={'modalExcluir-'+livro.id}
                                                className="btn btn-error btn-xs" >Excluir
                                        </label >
                                        <input type="checkbox" id={'modalExcluir-'+livro.id} className="modal-toggle" />

                                        <div className="modal">
                                            <form method="dialog" className="modal-box">
                                                <h3 className="font-bold text-lg">Excluir {livro.title}</h3>
                                                <p className="py-4">Deseja excluir o livro "{livro.title}"</p>
                                                <div className="modal-action">
                                                    <label htmlFor={'modalExcluir-'+livro.id} className="btn">Não</label>
                                                    <button className="btn btn-primary" onClick={() => {excluirLivro(livro)}}>Sim</button>
                                                </div>
                                            </form>
                                            <label className="modal-backdrop" htmlFor={'modalExcluir-'+livro.id}>Close</label>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Pagination links={livros.links} />
                </div>
            </div>
        </div>
    );
}
