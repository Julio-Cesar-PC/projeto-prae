// BookForm.js
import React from 'react'

class BookForm extends React.Component {
  constructor(props) {
    super(props)
    // Estado inicial com os campos do formulário
    this.state = {
      title: '',
      author: '',
      publisher: '',
      pageCount: '',
      imageLink: '',
      selfLink: '',
      categoryId: '',
      available: '',
    }

    // Fazendo o bind dos métodos para poderem acessar o `this`
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // Método para atualizar o estado quando o usuário digitar nos campos do formulário
  handleChange(event) {
    const name = event.target.name
    this.setState({ [name]: event.target.value })
  }

  // Método para lidar com o envio do formulário
  handleSubmit(event) {
    event.preventDefault()
    // Aqui você pode enviar os dados do formulário para o servidor
  }

  // Renderizando os elementos do formulário
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Título:
          </h2>
          <input
            type="text"
            placeholder="Digite o título do livro"
            className="input input-bordered w-full max-w-xs"
            name="title"
            value={this.state.title}
            onChangeCapture={this.handleChange}
          />
        </label>
        <br />
        <label>
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Autor:
          </h2>
          <input
            type="text"
            placeholder="Digite o autor(es) do livro"
            className="input input-bordered w-full max-w-xs"
            name="author"
            value={this.state.author}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Editora:
          </h2>
          <input
            type="text"
            placeholder="Digite a editora do livro"
            className="input input-bordered w-full max-w-xs"
            name="publisher"
            value={this.state.publisher}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Número de páginas:
          </h2>
          <input
            type="text"
            placeholder="Nº de páginas"
            className="input input-bordered w-full max-w-xs"
            name="pageCount"
            value={this.state.pageCount}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Imagem do livro:
          </h2>
          <input
            type="file"
            // placeholder="Digite a editora do livro"
            className="file-input file-input-bordered w-full max-w-xs"
            name="imageLink"
            value={this.state.imageLink}
            onChange={this.handleChange}
          />
        </label>
        {/* <label>
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Categoria:
          </h2>
          <input
            type="select"
            // placeholder="Digite a editora do livro"
            className="input input-bordered w-full max-w-xs"
            name="categoryId"
            value={this.state.categoryId}
            onChange={this.handleChange}
          />
        </label> */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="font-semibold  text-gray-800 dark:text-gray-200 leading-tight">
              Escolha a categoria em que o livro se encaixa:
            </span>
            {/* <span className="label-text-alt">Alt label</span> */}
          </label>
          <select className="select select-bordered text-black">
            <option className="text-black" disabled selected>
              Selecione...
            </option>
            <option className="text-black">Star Wars</option>
            <option className="text-black">Harry Potter</option>
            <option className="text-black">Lord of the Rings</option>
            <option className="text-black">Planet of the Apes</option>
            <option className="text-black">Star Trek</option>
          </select>
          {/* <label className="label">
            <span className="label-text-alt">Alt label</span>
            <span className="label-text-alt">Alt label</span>
          </label> */}
        </div>
        {/* <label>
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Disponível:
          </h2>
        </label> */}
        <div className="form-control">
          <label className="cursor-pointer">
            <span className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight mr-2">
              Red pill
            </span>
            <input
              type="radio"
              name="available"
              value={this.state.available}
              onChange={this.handleChange}
              className="radio checked:bg-red-500"
              checked
            />
          </label>
        </div>
        <div className="form-control">
          <label className="cursor-pointer">
            <span className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight mr-2">
              Blue pill
            </span>
            <input
              type="radio"
              name="available"
              value={this.state.available}
              onChange={this.handleChange}
              className="radio checked:bg-blue-500"
              checked
            />
          </label>
        </div>
        <input
          type="submit"
          value="Adicionar"
          className="btn btn-primary flex justify-between mt-4"
        />
      </form>
    )
  }
}

export default BookForm
