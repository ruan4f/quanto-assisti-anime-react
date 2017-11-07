import React, { Component } from 'react'
import ItemPesquisa from './ItemPesquisa'
import axios from 'axios'
import { Row, Col, Button } from 'react-materialize'
import fire from '../fire';

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

    addItem(anime) {
        fire.database().ref('animes').push({
            id: anime.key,
            image_url_med: anime.image_url_med,
            title_romaji: anime.title_romaji,
            total_episodes: anime.total_episodes,
            assisted_episodes: 0
        });
    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.searchItem}>
                        <Row>
                            <Col s={10}>
                                <input ref={(a) => this._inputElement = a}
                                    placeholder="Pesquisar Animes">
                                </input>
                            </Col>
                            <Col s={2}>
                                <Button waves='light' type="submit" icon='search'></Button>
                            </Col>
                        </Row>
                    </form>
                </div>
                <ItemPesquisa items={this.state.items} addItem={this.addItem} />
            </div>
        )
    }
}

export default Search