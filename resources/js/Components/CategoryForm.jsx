import React from 'react'

class CategoryForm extends React.Component {
  constructor(props) {
    super(props)
    // Estado inicial com os campos do formulário
    this.state = {
      name: '',
    }

    // useEffect(() => {
    //   return () => {
    //     reset('password', 'password_confirmation')
    //   }
    // }, [])

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
            Nome:
          </h2>
          <input
            type="text"
            placeholder="Digite o título do livro"
            className="input input-bordered w-full max-w-xs"
            name="name"
            value={this.state.name}
            onChangeCapture={this.handleChange}
          />
        </label>

        <input
          type="submit"
          value="Adicionar"
          className="btn btn-primary flex justify-between mt-4"
        />
      </form>
    )
  }
}

export default CategoryForm
