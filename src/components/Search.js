import React, { Component } from 'react'
import TodoItems from './TodoItems'
import axios from 'axios'

class Search extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.searchItem = this.searchItem.bind(this);
    }

    addItem(e) {
        var itemArray = this.state.items;

        if (this._inputElement.value !== "") {
            itemArray.unshift(
                {
                    text: this._inputElement.value,
                    key: Date.now()
                }
            );

            this.setState({
                items: itemArray
            });

            this._inputElement.value = "";
        }

        console.log(itemArray);

        e.preventDefault();
    }

    searchItem(e) {
        var itemArray = []
        const urlCredentials = 'https://anilist.co/api/auth/access_token?grant_type=client_credentials&client_id=ruanfs-6yfhu&client_secret=TFBfZr50AlYRvlmoTaTcRhky'
        const urlSearchAnimes = `https://anilist.co/api/anime/search/${this._inputElement.value}`

        axios.post(urlCredentials)
            .then(resp => {
                axios.get(urlSearchAnimes, { headers: { authorization: 'Bearer ' + resp.data.access_token } })
                    .then(resp1 => {
                        for (var key in resp1.data) {
                            if (resp1.data.hasOwnProperty(key)) {
                                var element = resp1.data[key];
                                itemArray.unshift(
                                    {
                                        text: element.title_romaji,
                                        key: element.id
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
                        <button type="submit">add</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items} />
            </div>
        )
    }
}

export default Search