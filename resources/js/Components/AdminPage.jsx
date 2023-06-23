import React from 'react'
import AdminForm from './AdminForm'

class AdminPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Cadastro de Administrador</h1>
        <AdminForm />
        {/* Renderizando o componente adminForm */}
      </div>
    )
  }
}

export default AdminPage
