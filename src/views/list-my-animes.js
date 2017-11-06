import React, { Component } from 'react'
import TodoApp from '../components/TodoItem'

class ListMyAnimes extends Component {




    render() {
        var todoItems = [];
        todoItems.push({ index: 1, value: "learn react", done: false });
        todoItems.push({ index: 2, value: "Go shopping", done: true });
        todoItems.push({ index: 3, value: "buy flowers", done: true });
        return (
            <div>
                <h1>List my animes - componente que vai listar os animes que estou assistindo</h1>
                <TodoApp initItems={todoItems} />

            </div>
        )
    }
}

export default ListMyAnimes

