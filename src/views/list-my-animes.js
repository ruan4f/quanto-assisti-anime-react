import React, { Component } from 'react'
import TodoList from '../components/TodoList'

class ListMyAnimes extends Component {
    render() {
        
        return (
            <div>
                <h1>List my animes</h1>
                <TodoList />
            </div>
        )
    }
}

export default ListMyAnimes