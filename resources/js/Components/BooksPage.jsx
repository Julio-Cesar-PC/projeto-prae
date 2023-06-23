// BooksPage.js
import React from 'react'
import BookForm from './BooksForm' // Importando o componente BookForm

class BooksPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Cadastro de Livros</h1>
        <BookForm /> {/* Renderizando o componente BookForm */}
      </div>
    )
  }
}

export default BooksPage
