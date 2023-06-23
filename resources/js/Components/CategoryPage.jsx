// BooksPage.js
import React from 'react'
import CategoryForm from './CategoryForm'

class CategoryPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Cadastro de categorias para troca</h1>
        <CategoryForm />
      </div>
    )
  }
}

export default CategoryPage
