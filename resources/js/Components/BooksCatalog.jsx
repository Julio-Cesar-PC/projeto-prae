import { useState } from 'react'
import { Link } from '@inertiajs/react'

export default function BooksCatalog({ livros }) {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredBooks = livros.filter(
    (livro) =>
      livro.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      livro.author.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {/* <h2 className="sr-only">Livros</h2> */}
        <div className="form-control relative rounded-md shadow-sm mb-6">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input input-bordered w-24 md:w-auto bg-white"
            placeholder="Pesquisar livros"
          />
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {filteredBooks.map((livro) => (
            <Link
              key={livro.id}
              href={route('livros.view', livro.id)}
              className="group"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={livro.imageLink}
                  alt={livro.title}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{livro.author}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {livro.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
