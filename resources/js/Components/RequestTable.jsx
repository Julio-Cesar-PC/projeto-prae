import React from 'react'
import { Link, useForm } from '@inertiajs/react'
import Pagination from '@/Components/Pagination'
import { GoCheck, GoPerson, GoX } from 'react-icons/go'
import { MdEmail } from 'react-icons/md'
export default function RequestTable(livros) {
  console.log(livros.livros.status)
  const {
    data,
    setData,
    processing,
    errors,
    reset,
    delete: destroy,
  } = useForm({})
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

  console.log(livros)

  function recusarSolicitacao(livro) {
    console.log(livro)
  }

  function aceitarSolicitacao(livro) {
    console.log(livro)
  }

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
                  Ações{' '}
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
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 flex gap-2">
                    <label
                      htmlFor={'modalAceitar-' + livro.book.id}
                      className="btn btn-primary btn-xs"
                    >
                      <GoCheck />
                    </label>
                    <input
                      type="checkbox"
                      id={'modalAceitar-' + livro.book.id}
                      className="modal-toggle"
                    />
                    {/* Modal de aceitar */}
                    <div className="modal">
                      <form method="dialog" className="modal-box">
                        <h3 className="font-bold text-lg">
                          Aceitar {livro.book.title}
                        </h3>
                        <p className="py-4">
                          Deseja aceitar a solicitação de "{livro.book.title}"
                        </p>
                        <div className="modal-action">
                          <label
                            htmlFor={'modalAceitar-' + livro.book.id}
                            className="btn"
                          >
                            Não
                          </label>
                          <button
                            className="btn btn-primary"
                            onClick={() => {
                              aceitarSolicitacao(livro)
                            }}
                          >
                            Sim
                          </button>
                        </div>
                      </form>
                      <label
                        className="modal-backdrop"
                        htmlFor={'modalAceitar-' + livro.book.id}
                      ></label>
                    </div>
                    {/* Fim modal de aceitar */}

                    <label
                      htmlFor={'modalRecusar-' + livro.book.id}
                      className="btn btn-error btn-xs"
                    >
                      <GoX />
                    </label>
                    <input
                      type="checkbox"
                      id={'modalRecusar-' + livro.book.id}
                      className="modal-toggle"
                    />

                    {/* Modal de recusar */}
                    <div className="modal">
                      <form method="dialog" className="modal-box">
                        <h3 className="font-bold text-lg">
                          recusar {livro.book.title}
                        </h3>
                        <p className="py-4">
                          Deseja recusar a solicitação de "{livro.book.title}"
                        </p>
                        <div className="modal-action">
                          <label
                            htmlFor={'modalRecusar-' + livro.book.id}
                            className="btn"
                          >
                            Não
                          </label>
                          <button
                            className="btn btn-primary"
                            onClick={() => {
                              recusarSolicitacao(livro)
                            }}
                          >
                            Sim
                          </button>
                        </div>
                      </form>
                      <label
                        className="modal-backdrop"
                        htmlFor={'modalRecusar-' + livro.book.id}
                      ></label>
                    </div>
                    {/* Fim modal de recusar */}
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
