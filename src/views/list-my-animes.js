import React, { Component } from 'react'
import TodoList from '../components/TodoList'

class ListMyAnimes extends Component {
    render() {
        
        return (
            <div>
                <h1>List my animes - componente que vai listar os animes que estou assistindo</h1>
                <TodoList />
            </div>
        )
    }
}

export default ListMyAnimes