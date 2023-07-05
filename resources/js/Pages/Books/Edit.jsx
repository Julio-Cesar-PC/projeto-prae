import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, useForm } from '@inertiajs/react'
import TextInput from '@/Components/TextInput'
import InputLabel from '@/Components/InputLabel'
import InputError from '@/Components/InputError'
import { FaSearch } from 'react-icons/fa'
import { useState } from 'react'
import axios from 'axios'
import Modal from '@/Components/Modal'

export default function CadastroLivros({ auth, categories, livro }) {
    const { data, setData, patch, errors } = useForm({
        title: livro.title,
        author: livro.author,
        publisher: livro.publisher,
        pageCount: livro.pageCount,
        category_id: livro.category_id,
        available: livro.available,
        imageLink: livro.imageLink,
    })

    const submit = (e) => {
        e.preventDefault()

        patch(route('livros.update', livro.id))
    }

    const [showModalProcurarCapa, setShowModalProrcurarCapa] = useState(false);
    const [query, setQuery] = useState('');
    const [bookCovers, setBookCovers] = useState([]);

    async function pesquisaCapa(e) {
        e.preventDefault();
        await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
        .then((response) => {
            setBookCovers(response.data.items)
        })
    }

    const chooseBook = (book) => {
        setData('title', book.volumeInfo.title)
        setData('author', book.volumeInfo.authors[0])
        setData('pageCount', book.volumeInfo.pageCount)
        setData('imageLink', book.volumeInfo.imageLinks.thumbnail)
        setShowModalProrcurarCapa(!showModalProcurarCapa)
        console.log(book)
    }


    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Livros
                </h2>
            }
        >
            <Head title="Cadastro de livros" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="flex justify-between items-center mx-6 my-6">
                            <div className="p-6 text-gray-900 ">Edição de Livros</div>
                            <Modal maxWidth='4xl' title="Procurar Capa" show={showModalProcurarCapa}>
                                <div className="p-6 bg-white border-b border-gray-200 ">
                                    <div className="mb-3 flex justify-between items-center">
                                        <h1 className=''>Pesquise por Capas</h1>
                                        <button onClick={() => setShowModalProrcurarCapa(!showModalProcurarCapa)} className="btn btn-ghost rounded-full">X</button>
                                    </div>
                                    <form onSubmit={(e) => pesquisaCapa(e)}>
                                        <div className="mb-3 flex">
                                            <div className="flex-1">
                                                <InputLabel className="form-label">Pesquise:</InputLabel>
                                                <TextInput value={query}
                                                    type="text"
                                                    placeholder="Titulo..."
                                                    className="input w-full max-w-xs"
                                                    onChange={(e) => setQuery(e.target.value)} />
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Pesquisar</button>
                                    </form>
                                    <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                        {bookCovers.map((bookcover) => (
                                            <div className='flex flex-col items-center bg-gray-200 rounded'>
                                                <img className='hover:scale-105 w-24' onClick={() => chooseBook(bookcover)} key={bookcover.id} src={bookcover.volumeInfo?.imageLinks?.thumbnail ? bookcover.volumeInfo?.imageLinks?.thumbnail : '/placeholder.webp'} alt='Sem Capa' />
                                                <h3 className='text-center'>{bookcover.volumeInfo?.title}</h3>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Modal>
                        </div>

                        <div className="p-6 bg-white border-b border-gray-200 ">
                            <form onSubmit={submit}>
                                <div className="mb-3 flex">
                                    <div className="flex-1">
                                        <InputLabel className="form-label">Título:</InputLabel>
                                        <TextInput
                                            value={data.title}
                                            type="text"
                                            placeholder="Titulo..."
                                            className="input w-full max-w-xs"
                                            onChange={(e) => setData('title', e.target.value)}
                                        />
                                        <InputError message={errors.title} className="mt-2" />
                                    </div>

                                    <div className="flex-1">
                                        <InputLabel className="form-label">Autor:</InputLabel>
                                        <TextInput
                                            value={data.author}
                                            type="text"
                                            placeholder="Autor..."
                                            className="input w-full max-w-xs"
                                            onChange={(e) => setData('author', e.target.value)}
                                        />
                                        <InputError message={errors.author} className="mt-2" />
                                    </div>
                                </div>

                                <div className="mb-3 flex">
                                    <div className="flex-1">
                                        <InputLabel className="form-label">
                                            Número de páginas:
                                        </InputLabel>
                                        <TextInput
                                            value={data.pageCount}
                                            type="number"
                                            placeholder="Número de páginas..."
                                            className="input  w-full max-w-xs"
                                            onChange={(e) => setData('pageCount', e.target.value)}
                                        />
                                        <InputError message={errors.pageCount} className="mt-2" />
                                    </div>

                                    <div className="flex-1">
                                        <InputLabel className="form-label">Disponível:</InputLabel>
                                        <input
                                            checked={data.available}
                                            type="checkbox"
                                            className="checkbox"
                                            onChange={(e) => setData('available', e.target.checked)}
                                        />
                                    </div>
                                </div>

                                <div className="mb-3 flex">



                                </div>

                                <div className="mb-3 flex">
                                    <div className="flex-1">
                                        <InputLabel className="form-label">Capa:</InputLabel>
                                        <div className="flex gap-2 items-center">
                                            <TextInput value={data.imageLink}
                                                type="text"
                                                placeholder="Capa..."
                                                className="input w-full max-w-xs"
                                                onChange={(e) => setData('imageLink', e.target.value)} />
                                            <button type='button' onClick={() => setShowModalProrcurarCapa(!showModalProcurarCapa)} className="btn btn-primary"><FaSearch /> Procurar</button>
                                        </div>
                                        <InputError message={errors.imageLink} className="mt-2" />
                                    </div>
                                    <div className="flex-1">
                                        <img src={data.imageLink} alt="" className="" />
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-primary">
                                    Salvar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
