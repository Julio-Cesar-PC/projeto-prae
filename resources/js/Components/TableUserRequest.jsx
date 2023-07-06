import React from 'react'
import { Link, useForm } from '@inertiajs/react'
import Pagination from '@/Components/Pagination'
import { GoCheck, GoPerson, GoX } from 'react-icons/go'
import { MdEmail } from 'react-icons/md'
export default function RequestTable(livros) {
    const {
        data,
        setData,
        processing,
        errors,
        reset,
        patch,
        delete: destroy,
    } = useForm({
        id: '',
    })
    // Cria uma nova matriz de objetos `link` com os valores de `link.label` atualizados
    const updatedLinks = livros.livros.links.map((link) => {
        // cria uma cópia do objeto link
        const updatedLink = { ...link }

        // altera o valor de updatedLink.label para "Próximo" se for "Next"
        if (updatedLink.label === 'Next &raquo;') {
            updatedLink.label = 'Próximo'
        }

        // altera o valor de updatedLink.label para "Anterior" se for "Previous"
        if (updatedLink.label === '&laquo; Previous') {
            updatedLink.label = 'Anterior'
        }

        // remove as entidades HTML » e « do valor de updatedLink.label
        updatedLink.label = updatedLink.label.replace(/»|«/g, '')

        return updatedLink
    })

    // Cria um novo objeto `livros` com a propriedade `links` atualizada para usar a matriz `updatedLinks`
    const updatedLivros = { ...livros, links: updatedLinks }

    return (
        <div className="py-12 w-full">
            <div className="max-w-full w-full mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-auto shadow-sm sm:rounded-lg">
                    <table className="table min-w-full divide-y">
                        <thead className="bg-gray-50">
                            <tr>
                                {/* <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-900  uppercase tracking-wider"
                >
                  {' '}
                  #{' '}
                </th> */}
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider border w-52"
                                >
                                    {' '}
                                    Livro solicitado{' '}
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider border w-52"
                                >
                                    {' '}
                                    Livro oferecido{' '}
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider border"
                                >
                                    {' '}
                                    Usuário solicitante{' '}
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider border"
                                >
                                    {' '}
                                    Data de solicitação{' '}
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider border"
                                >
                                    {' '}
                                    Status{' '}
                                </th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {livros.livros.data.map((livro) => (
                                <tr className="hover" key={livro.id}>
                                    {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 ">
                    {' '}
                    {livro.book.id}{' '}
                  </td> */}
                                    <td className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase  border">
                                        {' '}
                                        {livro.book.title}{' '}
                                    </td>
                                    <td className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase  border">
                                        {' '}
                                        {livro.title}{' '}
                                    </td>
                                    <td className="px-6py-3 text-left text-xs font-medium text-gray-900  border">
                                        {' '}
                                        <div className="flex flex-col">
                                            <div className="flex gap-2">
                                                <GoPerson /> {livro.user.name}
                                            </div>
                                            <div className="flex gap-2">
                                                <MdEmail /> {livro.user.email}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase  border">
                                        {new Date(livro.created_at).toLocaleDateString('pt-BR')}
                                    </td>
                                    <td className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase  border">
                                        {livro.status === 'PENDENTE' ? (<div className="badge badge-warning gap-2">
                                            Pendente
                                        </div>) : livro.status === 'ACEITA' ? (<div className="badge badge-success gap-2">
                                            Aceita
                                        </div>) : (<div className="badge badge-error gap-2">
                                            Recusada
                                        </div>)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Pagination links={updatedLivros.links} />
                </div>
            </div>
        </div>
    )
}
