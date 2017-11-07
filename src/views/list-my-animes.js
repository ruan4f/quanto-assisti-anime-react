import React, { Component } from 'react'
import AnimeList from '../components/AnimeList'

class ListMyAnimes extends Component {
    render() {

        return (
            <div>
                <h1>List my animes</h1>
                <AnimeList />
            </div>
        )
    }
}

export default ListMyAnimes