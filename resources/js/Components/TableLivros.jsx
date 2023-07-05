import { FaPlus } from 'react-icons/fa'
import { Link, useForm } from '@inertiajs/react'
import Pagination from '@/Components/Pagination'

export default function TableLivros({ livros }) {
  const {
    data,
    setData,
    processing,
    errors,
    reset,
    delete: destroy,
  } = useForm({})
  // Cria uma nova matriz de objetos `link` com os valores de `link.label` atualizados
  const updatedLinks = livros.links.map((link) => {
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

  function excluirLivro(livro) {
    destroy(route('livros.destroy', livro.id), {
      preserveScroll: true,
      onError: () => console.log('Erro ao excluir livro'),
    })
  }

  function editarLivro(livro) {}

  return (
    <div className="py-12 w-full">
      <div className="max-w-full w-full mx-auto sm:px-6 lg:px-8">
        <div className="bg-white overflow-auto shadow-sm sm:rounded-lg">
          <a href="livro/cadastro" className="btn btn-primary mb-5">
            <FaPlus />
            Novo Livro
          </a>
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
                  Título{' '}
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-900  uppercase tracking-wider"
                >
                  {' '}
                  Autor{' '}
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-900  uppercase tracking-wider"
                >
                  {' '}
                  Editora{' '}
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
              {livros.data.map((livro) => (
                <tr className="hover" key={livro.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 ">
                    {' '}
                    {livro.id}{' '}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 ">
                    {' '}
                    {livro.title}{' '}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 ">
                    {' '}
                    {livro.author}{' '}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 ">
                    {' '}
                    {livro.publisher}{' '}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 flex gap-2">
                    <Link
                      href={route('livros.edit', { book_id: livro.id })}
                      className="btn btn-primary btn-xs"
                    >
                      Editar
                    </Link>

                    <label
                      htmlFor={'modalExcluir-' + livro.id}
                      className="btn btn-error btn-xs"
                    >
                      Excluir
                    </label>
                    <input
                      type="checkbox"
                      id={'modalExcluir-' + livro.id}
                      className="modal-toggle"
                    />

                    <div className="modal">
                      <form method="dialog" className="modal-box">
                        <h3 className="font-bold text-lg">
                          Excluir {livro.title}
                        </h3>
                        <p className="py-4">
                          Deseja excluir o livro "{livro.title}"
                        </p>
                        <div className="modal-action">
                          <label
                            htmlFor={'modalExcluir-' + livro.id}
                            className="btn"
                          >
                            Não
                          </label>
                          <button
                            className="btn btn-primary"
                            onClick={() => {
                              excluirLivro(livro)
                            }}
                          >
                            Sim
                          </button>
                        </div>
                      </form>
                      <label
                        className="modal-backdrop"
                        htmlFor={'modalExcluir-' + livro.id}
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
