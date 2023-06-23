import { FaPlus } from 'react-icons/fa'

export default function TableLivros({ livros }) {
    return (
        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <a href='livro/cadastro' className="btn btn-primary mb-5"><FaPlus/>Novo Livro</a>
                    <table className="table min-w-full">
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
                            {livros.map((livro) => (
                                <tr className='hover' key={livro.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 "> {livro.id} </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 "> {livro.title} </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 "> {livro.author} </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 "> {livro.publisher} </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 "> <span className="badge badge-primary">{livro.category.nome}</span> </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 ">
                                        <a href="#" className="text-indigo-600 hover:text-indigo-900">Editar</a>
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
