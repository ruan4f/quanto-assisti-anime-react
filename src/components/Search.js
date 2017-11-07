import React, { Component } from 'react'
import ItemPesquisa from './ItemPesquisa'
import axios from 'axios'
import { Button, Icon } from 'react-materialize'

class Search extends Component {
    constructor(props, context) {
        super(props, context)

        this.state = {
            items: []
        };

        this.searchItem = this.searchItem.bind(this)
    }

    searchItem(e) {
        var itemArray = []
        const urlCredentials = 'https://anilist.co/api/auth/access_token?grant_type=client_credentials&client_id=ruanfs-6yfhu&client_secret=TFBfZr50AlYRvlmoTaTcRhky'
        const urlSearchAnimes = `https://anilist.co/api/anime/search/${this._inputElement.value}`

        axios.post(urlCredentials)
            .then(resp => {
                axios.get(urlSearchAnimes, { headers: { authorization: 'Bearer ' + resp.data.access_token } })
                    .then(resp1 => {
                        console.log(resp1.data)
                        for (var key in resp1.data) {
                            if (resp1.data.hasOwnProperty(key)) {
                                var element = resp1.data[key];
                                itemArray.unshift(
                                    {
                                        key: element.id,
                                        image_url_med: element.image_url_med,
                                        title_romaji: element.title_romaji,
                                        total_episodes: element.total_episodes,
                                    }
                                );
                            }
                        }

                        this.setState({
                            items: itemArray
                        });
                    })
                    .catch(error => { console.log(error) })
            })
            .catch(error => { console.log(error) })

        e.preventDefault();
    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.searchItem}>
                        <input ref={(a) => this._inputElement = a}
                            placeholder="Pesquisar Animes">
                        </input>
                        <Button waves='light' type="submit"><Icon>search</Icon></Button>
                    </form>
                </div>
                <ItemPesquisa items={this.state.items} />
            </div>
        )
    }
}

export default Search