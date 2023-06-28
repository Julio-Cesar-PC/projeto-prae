import { FaPlus } from 'react-icons/fa'
import { Link, useForm } from '@inertiajs/react'

export default function TableCategorias({ categorias, error }) {
    const { data, setData, processing, errors, reset, delete: destroy, } = useForm({});

    function excluirCategoria(categoria) {
        destroy(route('categorias.destroy', categoria.id), {
            preserveScroll: true,
            onError: () => console.log('Erro ao excluir categoria')
        })
    }

    return (
        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <a href='categoria/cadastro' className="btn btn-primary mb-5"><FaPlus/>Nova Categoria</a>
                    <table className="table min-w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-900  uppercase tracking-wider"> # </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-900  uppercase tracking-wider"> Nome </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-900  uppercase tracking-wider"> Criação </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-900  uppercase tracking-wider"> Atualizado </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-900  uppercase tracking-wider"> Ações </th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {categorias.map((categoria) => (
                                <tr className='hover' key={categoria.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 "> {categoria.id} </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 "> {categoria.nome} </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 "> {categoria.created_at} </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 "> {categoria.updated_at} </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 flex gap-2">
                                        <Link href={route('categorias.edit', categoria.id)} className="btn btn-primary btn-xs">Editar</Link>

                                        <label  htmlFor={'modalExcluir-'+categoria.id}
                                                className="btn btn-error btn-xs" >Excluir
                                        </label >
                                        <input type="checkbox" id={'modalExcluir-'+categoria.id} className="modal-toggle" />

                                        <div className="modal">
                                            <form method="dialog" className="modal-box">
                                                <h3 className="font-bold text-lg">Excluir {categoria.nome}</h3>
                                                <p className="py-4">Deseja excluir a categoria "{categoria.nome}"</p>
                                                <div className="modal-action">
                                                    <label htmlFor={'modalExcluir-'+categoria.id} className="btn">Não</label>
                                                    <button className="btn btn-primary" onClick={() => {excluirCategoria(categoria)}}>Sim</button>
                                                </div>
                                            </form>
                                            <label className="modal-backdrop" htmlFor={'modalExcluir-'+categoria.id}>Close</label>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
}
