import React, { Component } from 'react'
import AnimeItem from './AnimeItem'
import axios from 'axios'
import fire from '../fire'

class AnimeList extends Component {
    constructor(props, context) {
        super(props, context)

        this.state = { items: [] }

        this.addEpisode = this.addEpisode.bind(this)
        this.removeEpisode = this.removeEpisode.bind(this)
        this.buildAnimes = this.buildAnimes.bind(this)
        this.updateAnimes = this.updateAnimes.bind(this)
        this.deleteAnime = this.deleteAnime.bind(this)
        this.deleteAnimes = this.deleteAnimes.bind(this)
    }

    buildAnimes(snapshot) {
        /* Update React state when message is added at Firebase Database */
        let anime = snapshot.val()
        anime.key = snapshot.key
        this.setState({ items: [anime].concat(this.state.items) })
    }

    updateAnimes(snapshot) {
        let anime = snapshot.val()
        anime.key = snapshot.key
        let newAnimes = []
        this.state.items.forEach((element) => {
            if (element.key === snapshot.key) {
                element = anime
            }

            newAnimes.push(element)
        })

        this.setState({ items: newAnimes })
    }

    deleteAnimes(snapshot) {
        let newAnimes = []
        this.state.items.forEach((element) => {
            if (element.key !== snapshot.key) {
                newAnimes.push(element)
            }
        })

        this.setState({ items: newAnimes })
    }

    componentWillMount() {
        this.messagesRef = fire.database().ref('animes')
        this.messagesRef.on('child_added', this.buildAnimes)
        this.messagesRef.on('child_changed', this.updateAnimes)
        this.messagesRef.on('child_removed', this.deleteAnimes)
    }

    componentWillUnmount() {
        this.messagesRef.off()
    }

    searchAnimes(id) {
        const urlCredentials = 'https://anilist.co/api/auth/access_token?grant_type=client_credentials&client_id=ruanfs-6yfhu&client_secret=TFBfZr50AlYRvlmoTaTcRhky'
        //const urlSearchAnimes = `https://anilist.co/api/anime/`
        //var itemArray = []

        axios.post(urlCredentials)
            .then(resp => {
                // const url = urlSearchAnimes + listIds[index]
                // axios.get(url, { headers: { authorization: 'Bearer ' + resp.data.access_token } })
                //     .then(resp1 => {
                //         console.log(resp1)
                //         var element = resp1.data;
                //         itemArray.unshift(
                //             {
                //                 key: element.id,
                //                 image_url_med: element.image_url_med,
                //                 title_romaji: element.title_romaji,
                //                 total_episodes: element.total_episodes,
                //             }
                //         );
                //     })
                //     .catch(error => { console.log(error) })
            })
            .catch(error => { console.log(error) })
    }

    addEpisode(key, value) {
        fire.database().ref(`animes/${key}`).update({ assisted_episodes: value + 1 });
    }

    removeEpisode(key, value) {
        fire.database().ref(`animes/${key}`).update({ assisted_episodes: value - 1 });
    }

    deleteAnime(key) {
        this.messagesRef.child(key).remove()
    }

    render() {
        return (
            <div>
                <AnimeItem items={this.state.items} addEpisode={this.addEpisode} removeEpisode={this.removeEpisode} deleteAnime={this.deleteAnime} />
            </div>
        )
    }
}

export default AnimeList