import { FaPlus } from 'react-icons/fa'
import { Link, useForm } from '@inertiajs/react'
import Pagination from '@/Components/Pagination'

export default function TableLivros({ users }) {
    const {
        data,
        setData,
        processing,
        errors,
        reset,
        delete: destroy,
        patch,
    } = useForm({})
    // Cria uma nova matriz de objetos `link` com os valores de `link.label` atualizados
    const updatedLinks = users.links.map((link) => {
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
    const updatedLivros = { ...users, links: updatedLinks }

    function banirUser(id) {
        patch(route('usuarios.ban', id), {
            preserveScroll: true,
        })
    }

    function excluirUser(id) {
        destroy(route('usuarios.destroy', id), {
            preserveScroll: true,
        })
    }

    return (
        <div className="py-12 w-full">
            <div className="max-w-full w-full mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-auto shadow-sm sm:rounded-lg">
                    <table className="table min-w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-900  uppercase tracking-wider"
                                >
                                    {' '}
                                    #{' '}
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-900  uppercase tracking-wider"
                                >
                                    {' '}
                                    Nome{' '}
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-900  uppercase tracking-wider"
                                >
                                    {' '}
                                    email{' '}
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-900  uppercase tracking-wider"
                                >
                                    {' '}
                                    Banido{' '}
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-900  uppercase tracking-wider"
                                >
                                    {' '}
                                    Ações{' '}
                                </th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {users.data.map((user) => (
                                <tr className="hover" key={user.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 ">
                                            {' '}
                                            {user.id}{' '}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 ">
                                        <Link href={route('usuarios.show', user.id)}>
                                            {' '}
                                            {user.name}{' '}
                                        </Link>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 ">
                                        {' '}
                                        {user.email}{' '}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 ">
                                        {' '}
                                        {user.banned}{' '}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 flex gap-2">
                                        <label
                                            htmlFor={'modalBanir-' + user.id}
                                            className="btn btn-warning btn-xs"
                                        >
                                            {user.banned ? 'Desbanir' : 'Banir'}
                                        </label>
                                        <input
                                            type="checkbox"
                                            id={'modalBanir-' + user.id}
                                            className="modal-toggle"
                                        />

                                        <div className="modal">
                                            <form method="dialog" className="modal-box">
                                                <h3 className="font-bold text-lg">
                                                    Excluir {user.title}
                                                </h3>
                                                <p className="py-4">
                                                    Deseja {user.banned ? 'desbanir' : 'banir'} o usuário "{user.name}"
                                                </p>
                                                <div className="modal-action">
                                                    <label
                                                        htmlFor={'modalBanir-' + user.id}
                                                        className="btn"
                                                    >
                                                        Não
                                                    </label>
                                                    <label
                                                        htmlFor={'modalBanir-' + user.id}
                                                        className="btn btn-primary"
                                                        onClick={() => {
                                                            banirUser(user.id)
                                                        }}
                                                    >
                                                        Sim
                                                    </label>
                                                </div>
                                            </form>
                                            <label
                                                className="modal-backdrop"
                                                htmlFor={'modalBanir-' + user.id}
                                            >
                                                Close
                                            </label>
                                        </div>

                                        <label
                                            htmlFor={'modalExcluir-' + user.id}
                                            className="btn btn-error btn-xs"
                                        >
                                            Excluir
                                        </label>
                                        <input
                                            type="checkbox"
                                            id={'modalExcluir-' + user.id}
                                            className="modal-toggle"
                                        />

                                        <div className="modal">
                                            <form method="dialog" className="modal-box">
                                                <h3 className="font-bold text-lg">
                                                    Excluir {user.title}
                                                </h3>
                                                <p className="py-4">
                                                    Deseja excluir o usuário "{user.name}"
                                                </p>
                                                <div className="modal-action">
                                                    <label
                                                        htmlFor={'modalExcluir-' + user.id}
                                                        className="btn"
                                                    >
                                                        Não
                                                    </label>
                                                    <button
                                                        className="btn btn-primary"
                                                        onClick={() => {
                                                            excluirUser(user.id)
                                                        }}
                                                    >
                                                        Sim
                                                    </button>
                                                </div>
                                            </form>
                                            <label
                                                className="modal-backdrop"
                                                htmlFor={'modalExcluir-' + user.id}
                                            >
                                                Close
                                            </label>
                                        </div>
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
